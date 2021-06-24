import Header from "../components/Header/Header";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import Carousel from "../components/Carousel/Carousel";
import Inform from "../components/Inform/Inform";
import Footer from "../components/Footer/Footer";
import TopProducts from "../components/TopProducts/TopProducts";
import img1 from "../components/TopProducts/img/img1.jpg";
import img2 from "../components/TopProducts/img/img2.jpg";
import img3 from "../components/TopProducts/img/img3.jpg";
import img4 from "../components/TopProducts/img/img4.jpg";

function Home() {
  const products = [
    {
      price: 1234,
      title: "Produto1",
      subtitle: "Produto fofinho",
      image: img1,
      productUrl: "#",
    },
    {
      price: 9999,
      title: "Produto2",
      subtitle: "Produto fofinho2",
      image: img2,
      productUrl: "#",
    },
    {
      price: 555,
      title: "Produto3",
      subtitle: "Produto fofinho3",
      image: img3,
      productUrl: "#",
    },
    {
      price: 9123459,
      title: "Produto4",
      subtitle: "Produto fofinh42",
      image: img4,
      productUrl: "#",
    },         
  ];
  return (
    <>
      <Header />
      <QuickLinks />
      <Carousel />
      <Inform />
      <TopProducts products={products} />
      <Footer />
    </>
  );
}

export default Home;
