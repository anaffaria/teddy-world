import { FiShoppingBag } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { RiUserHeartLine } from "react-icons/ri";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";

function AdminIndex() {
  const links = [
    {
      icon: <GoGraph fontSize={24}></GoGraph>,
      text: "Dashboard",
    },
    {
      icon: <FiShoppingBag fontSize={24}></FiShoppingBag>,
      text: "Pedidos",
    },
    {
      icon: <CgArrowsExchangeAlt fontSize={24}></CgArrowsExchangeAlt>,
      text: "Devoluções",
    },
    {
      icon: <RiUserHeartLine fontSize={24}></RiUserHeartLine>,
      text: "Clientes",
    },
  ];

  return (
    <>
      <div className="d-flex">
        <AdminNavBar links={links} />
        <h1>Holá AdminIndex :P</h1>
      </div>
    </>
  );
}

export default AdminIndex;
