import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"


import Home from "./pages/Home";
import { Store } from "./pages/Store";
import { Model } from "./pages/Model";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Forum } from "./pages/Forum";
import { ShoppingHelp } from "./pages/ShoppingHelp";
import { Footer } from "./components/Footer";

function App() {  
  
  return (
    <ShoppingCartProvider>
      <Navbar />

      <div  >

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Model" element={<Model />}></Route>
          <Route path="/ShoppingHelp" element={<ShoppingHelp />}></Route>
          <Route path="/Forum" element={<Forum />}></Route>
        </Routes>

      </div>
      <Footer />
    </ShoppingCartProvider>)
}
export default App







