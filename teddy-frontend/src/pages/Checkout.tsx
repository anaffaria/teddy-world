import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";
import { ToggleUser } from "../components/ToggleUser/ToggleUser";
import { CustomerContextTiping, useCustomer } from "../providers/Customer";

function CheckoutPage() {
  const { customer } = useCustomer() as CustomerContextTiping;
  return (
    <>
      <ToggleUser />

      {customer?.cart?.itemDTOS?.length! > 0 ? (
        <Checkout />
      ) : (
        <div className='text-center d-flex flex-column' style={{height: 300}}>
          <h1 className='mt-auto'>Seu Carrinho está vazio</h1>
          <p className='mb-auto'>Adicione pelúcias para continuar!</p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default CheckoutPage;
