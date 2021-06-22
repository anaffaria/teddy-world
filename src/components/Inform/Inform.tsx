import { FiPhoneCall } from "react-icons/fi";
import { BiPackage } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

import "./inform.css";
function Inform() {
  return (
    <>
      <div className="inform-container justify-content-center m-auto d-flex  mt-4">
        <div className="m-auto text-center">
          <div>
            <FiPhoneCall size={37} className="icons" />
          </div>
          <label>Atendimento</label>
          <p>Seg à sex das 8h as 17h</p>
        </div>
        <div className="m-auto text-center">
          <div>
            <BiPackage size={37} className="icons" />
          </div>
          <label>Troca e Devoluções</label>
          <p>Garantia contra Defeitos de Fabricação</p>
        </div>
        <div className="m-auto text-center">
          <div>
            <MdPayment size={37} className="icons" />
          </div>
          <label>Pagamento</label>
          <p>Agilidade nas compras</p>
        </div>
      </div>
    </>
  );
}
export default Inform;
