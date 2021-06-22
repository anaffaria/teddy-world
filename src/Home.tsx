import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Inform from "./components/Inform/Inform";
import Footer from "./components/Footer/Footer";
import Top3products from "./components/Top3products/Top3products";

function Home(){
  return(
    <>
      <Header/>
      <Navbar/>
      <Carousel/>
      <Inform/>
      <Top3products/>
      <Footer/>
    </>
  )
}

export default Home;