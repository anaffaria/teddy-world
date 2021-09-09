import { useEffect } from "react";
import { useState } from "react";
import ProductListComponent from "../components/ProductList/ProductList";
import { ListTeddy } from "../service/teddyService";
import { Size, Teddy } from "../Types/Teddy";

function ProductList() {
  const [listTeddy, setListTeddy] = useState<Array<Teddy>>();

  useEffect(() => {
    ListTeddy({})
      .then((resp) => {
        setListTeddy(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterproducts = {
    categories: [{ id: 1, name: "teste" }],
    colors: [{ id: 1, name: "teste cor" }],
    sizes: [Size.oneSize, Size.twoSize, Size.treeSize, Size.fourSize, Size.fiveSize]
  };

  return (
    <>
      <ProductListComponent teddys={listTeddy} filters={filterproducts} />
    </>
  );
}

export default ProductList;
