import React, { useEffect } from "react";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import Showcase from "../components/Showcase/Showcase";
import Inform from "../components/Inform/Inform";
import Footer from "../components/Footer/Footer";
import TopProducts from "../components/TopProducts/TopProducts";
import img1 from "../components/TopProducts/img/img1.jpg";
import img2 from "../components/TopProducts/img/img2.jpg";
import img3 from "../components/TopProducts/img/img3.jpg";
import img4 from "../components/TopProducts/img/img4.jpg";
import UserOff from "../components/UserOff/UserOff";
import { useCustomer } from "../providers/Customer";

function Home() {
  const { customer, setCustomer } = useCustomer();
  console.log(customer);

  useEffect(() => {
    setCustomer({ name: "huehueheue" });
  }, []);
  const products = [
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
  return (
    <>
      <UserOff />
      <QuickLinks />
      <Showcase />
      <Inform />
      <TopProducts products={products} />
      <Footer />
    </>
  );
}

export default Home;
