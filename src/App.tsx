import Navbar from "@/pages/Navbar"
import Home from "@/pages/Home"
import OurClasses from "./pages/OurClasses"
import { useState,useEffect } from "react"
import { SelectedPage } from "./shared/types"
import Benefits from "./pages/Benefits";
import ContactUs from "./pages/ContactUs"
import Footer from "./pages/Footer"



function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY ===0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)
  },[]);

  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>  
      <Footer/>
    </div>
  )
}
export default App
