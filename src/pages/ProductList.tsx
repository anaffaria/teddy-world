import Header from "../components/Header/Header";
import PageProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import img1 from "../components/TopProducts/img/img1.jpg";
import img2 from "../components/TopProducts/img/img2.jpg";
import img3 from "../components/TopProducts/img/img3.jpg";
import img4 from "../components/TopProducts/img/img4.jpg";

function ProductList() {
  
  const listproducts = [
    {
      price: 69.9,
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
      price: 69.9,
      title: "Girafa de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img3,
      productUrl: "#",
    },
    {
      price: 69.9,
      title: "Onça de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img4,
      productUrl: "#",
    },
    {
      price: 69.9,
      title: "Onça de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img4,
      productUrl: "#",
    },
    {
      price: 69.9,
      title: "Onça de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img2,
      productUrl: "#",
    },
    {
      price: 69.9,
      title: "Onça de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img1,
      productUrl: "#",
    },
    {
      price: 69.9,
      title: "Onça de Pelúcia",
      subtitle: "25 cm - M Decoração Quarto Bebê",
      image: img3,
      productUrl: "#",
    },
  ];

  return (
    <>
      <Header />
      <QuickLinks />
      <PageProductList
        listproducts={listproducts}
        // filterproducts={filterproducts}
      />
      <Footer />
    </>
  );
}

export default ProductList;
