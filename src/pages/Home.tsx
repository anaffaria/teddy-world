import Header from "../components/Header/Header";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import Carousel from "../components/Carousel/Carousel";
import Inform from "../components/Inform/Inform";
import Footer from "../components/Footer/Footer";
import TopProducts from "../components/TopProducts/TopProducts";

function Home() {
  return(
    <>
      <Header/>
      <QuickLinks/>
      <Carousel/>
      <Inform/>
      <TopProducts/>
      <Footer/>
    </>
  )
}

export default Home;