import { FiPhoneCall } from "react-icons/fi";
import { BiPackage } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

import "./inform.css";
function Inform() {
  return (
    <>
      <div className="inform-container justify-content-center m-auto d-flex  mt-3">
        <div className="m-auto text-center">
          <div>
            <FiPhoneCall size={37} className="icons" />
          </div>
          <label>Atendimento</label>
        </div>
        <div className="m-auto text-center">
          <div>
            <BiPackage size={37} className="icons" />
          </div>
          <label>Troca e Devoluções</label>
        </div>
        <div className="m-auto text-center">
          <div>
            <MdPayment size={37} className="icons" />
          </div>
          <label>Parcelamento</label>
        </div>
      </div>
    </>
  );
}
export default Inform;
