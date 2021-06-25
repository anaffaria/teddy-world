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
      price: 69.90,
      title: "Leão de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img1,
      productUrl: "#",
    },
    {
      price: 69.9,
      title: "Elefante de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img2,
      productUrl: "#",
    },
    {
      price: 69.90,
      title: "Girafa de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img3,
      productUrl: "#",
    },
    {
      price: 69.90,
      title: "Onça de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
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
