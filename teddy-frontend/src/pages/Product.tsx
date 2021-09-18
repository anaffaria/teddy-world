import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductComponent from "../components/Product/Product";
import { GetTeddy } from "../service/teddyService";
import { Teddy } from "../Types/Teddy";


function Product() {
  const [teddy, setTeddy ] = useState<Teddy>(); 
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
      GetTeddy({ id: id })
      .then((resp) => {
        setTeddy(resp);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <ProductComponent teddy={teddy}/>
    </>
  );
}

export default Product;
