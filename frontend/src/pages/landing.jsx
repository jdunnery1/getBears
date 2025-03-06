import '../styles/landing.css'
import {axiosInstance} from "../lib/axios.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Landing = () => {

    const[postImage, setPostImage] = useState({src: null})
    const[bears, setBears] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.get('/bears/').then((response) => {
            setBears(response.data)
        })
    }, []);

   function convert64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    const createPost = async (newImage) => {
        await axiosInstance.post('/bears/uploadBear', newImage)
    }
    const handleSubmit = (e) => {
        createPost(postImage)
        document.querySelector('#file-input').value =''
        setBears([...bears, postImage])
    }
    const handleFileUpload = async (e) => {
        const file = e.target.files[0]
        const base64 = await convert64(file)
        setPostImage( {...postImage, src: base64, datePosted: new Date().toISOString()})
    }

    return (
        <div id={'landing-app'} className={'w-full h-full flex justify-around items-center bg-[#291711]'}>
            <div className={'w-1/5 max-sm:w-2/5 flex flex-col justify-center items-center'}>
                <input id={'file-input'} onChange={handleFileUpload} type="file" placeholder={'Upload Bear'} className={'text-[#B8B42D] bg-[#474B24] p-3 rounded-xl w-full'}/>
                <button onClick={handleSubmit} className={'bg-[#FFFCE8] p-2 rounded-xl mt-[10px] text-[#DD403A]'}>Upload Bear</button>
            </div>

            <div className={'w-3/5 h-4/5 max-sm:w-4/5 max-sm:h-3/5 bg-[#474B24] rounded-[50px] flex justify-center items-center p-5'}>
                <img src={bears[bears.length-1]?.src} alt="" className={'w-full h-full rounded-[50px]'}/>
            </div>
            <button className={'text-[#B8B42D] bg-[#474B24] p-5 rounded-xl'} onClick={() => {navigate('/gallery')}}>Bear Gallery</button>
        </div>
    )
}

export default Landing