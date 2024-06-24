import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { MainLove } from "./components/MainLove"
import { Navigation } from "./components/Navigation"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Planes } from "./pages/Planes"
import { OptionsQr } from "./pages/OptionsQr"


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <MainLove >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/qr" element={<OptionsQr />} />
          </Routes>
        </MainLove>
      </BrowserRouter>
    </>
  )
}

