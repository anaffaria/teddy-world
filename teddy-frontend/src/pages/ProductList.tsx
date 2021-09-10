import { useEffect } from "react";
import { useState } from "react";
import ProductListComponent from "../components/ProductList/ProductList";
import { ListColor } from "../service/colorService";
import { ListTeddy } from "../service/teddyService";
import { Color, Size, Teddy } from "../Types/Teddy";

function ProductList() {
  const [listTeddy, setListTeddy] = useState<Array<Teddy>>();
  const [listColor, setListColor] = useState<Array<Color>>();

  useEffect(() => {
    ListTeddy({})
      .then((resp) => {
        setListTeddy(resp);
      })
      .catch((err) => console.log(err));

    ListColor({}).then((resp) => {
      setListColor(resp);
    })
    .catch((err) => console.log(err));
  }, []);

  const filterproducts = {
    // TODO: Get values from backend
    categories: [{ id: 1, name: "teste" }],
    colors: listColor,
    sizes: [Size.oneSize, Size.twoSize, Size.treeSize, Size.fourSize, Size.fiveSize]
  };

  return (
    <>
      <ProductListComponent teddys={listTeddy} filters={filterproducts} />
    </>
  );
}

export default ProductList;
