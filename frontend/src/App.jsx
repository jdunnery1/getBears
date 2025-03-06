import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Landing from "./pages/landing.jsx";
import Gallery from "./pages/gallery.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Landing />}></Route>
                <Route path={'/gallery'} element={<Gallery />}></Route>
            </Routes>
        </>
    )
}

export default App
