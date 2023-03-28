import { HashRouter, Route, Routes } from "react-router-dom";
import '../src/scss/deafultCssReset.scss'
import '../src/scss/main.scss'
import '../src/assets/fonts/fonts.css'


import ModelRen from "./components/3DModels/Model";
export default function App() {
  return <div className="main">
    <Routes>
      <Route path="/" element={<ModelRen />} />
    </Routes>
  </div>
}
