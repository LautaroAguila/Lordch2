//import NavbarCustom from "./components/Basic/Navbar/Navbar";

import AboutUsSection from "./components/Basic/AboutUs/AboutUsSection";
import ContactSection from "./components/Basic/Contact/ContactSection";
import ContactSectionDark from "./components/Basic/Contact/ContactSectionDark";
import HomeBackground from "./components/Basic/Home/HomeBackground";
import HomeCarousel from "./components/Basic/Home/HomeCarousel";
import NavbarCustom from "./components/Basic/Navbar/Navbar";
import ProductsCatalog from "./components/Basic/Offer/ProductsCatalog";
import ServicesList from "./components/Basic/Offer/ServicesList";
import BrandsSection from "./components/Basic/Trust/BrandsSection";
import TestimonialsSection from "./components/Basic/Trust/TestimonialsSection";



function App() {

  const modoDesarrollador = true;

  return (
    <>
      <NavbarCustom/>
      {/*<HomeCarousel/>*/}
      <HomeBackground/>
      <BrandsSection/>
      <TestimonialsSection/>
      
      {/*<ProductsCatalog/> */}
      <ServicesList/>
      
      <AboutUsSection/>

      <ContactSection/>
      {/*<ContactSectionDark/>*/}
    </>
  );
}


export default App