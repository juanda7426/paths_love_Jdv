import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Navigation } from "./components/Navigation"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Planes } from "./pages/Planes"
import { OptionsQr } from "./pages/OptionsQr"
import { Pagos } from "./pages/Pagos"
import { Beneficios } from "./pages/Beneficios"


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<OptionsQr />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/beneficios" element={<Beneficios />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

