import ProductListComponent from "../components/ProductList/ProductList";

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
  ];

  const filterproducts = {
    categories: ["Ursos", "Elefantes", "Girafas"],
    colors: ["Azul", "Vermelho", "Marrom"],
    sizes: ["0cm ~ 20cm", "21cm ~ 30cm", "31cm ~ 40cm"],
  };

  return (
    <>
      <ProductListComponent
        listproducts={listproducts}
        listfilter={filterproducts}
      />
    </>
  );
}

export default ProductList;
