// import { useCallback, useEffect, useRef, useState } from "react"

import Navbar from "./Components/navbar"
import Hero from "./Components/Hero"
import Keystate from "./Components/keystate"
import SupportedBrokers from "./Components/SupportedBroker"
import Features from "./Components/Features"
import HowitWorks from "./Components/HowitWorks"
import PricingPlans from "./Components/PricingPlan"
import ContactUs from "./Components/ContactUs"
import Footer from "./Components/Footer"


function App() {


  return (
<>


    <Navbar />
    <Hero />
    <Keystate />
    <SupportedBrokers />
    <Features />
    <HowitWorks />
    <PricingPlans />
    <ContactUs />
    <Footer />

 </>)
}

export default App
