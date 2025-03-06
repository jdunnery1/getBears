import {useEffect, useState} from "react";
import {axiosInstance} from "../lib/axios.js";
import '../styles/gallery.css'
import {useNavigate} from "react-router-dom";

const Gallery = () => {

    const[bears, setBears] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.get('/bears/').then((response) => {setBears(response.data)})
    }, []);

    return (
        <div id={'gallery-app'} className={'bg-[#291711] w-full h-full overflow-y-auto p-10 flex justify-center items-center'}>
            <div id={'wrapper'} className={'h-full w-full min-md:flex-wrap max-sm:w-fit flex max-sm:flex-col gap-x-5 max-sm:gap-y-5 s'}>
            {bears?.map((bear) => {
                return (
                    <div className={'image min-w-[200px] max-sm:size-100 size-50 bg-[#474B24] rounded-xl flex justify-center items-center'}>
                        <img src={bear.src} alt="" className={'w-4/5 h-4/5 rounded-xl border-[20px] border-[#B8B42D]'}/>
                    </div>
                )
            })}
            </div>
            <button onClick={() => {navigate('/')}} className={'fixed bg-[#474B24] text-[#B8B42D] p-5 rounded-xl bottom-10 right-10'}>Back</button>
        </div>
    )
}

export default Gallery