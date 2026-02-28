import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoBeerOutline } from "react-icons/io5";

const Iconos = () => {
  return (
    <ul className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 my-5">
      <li style={{ "--i": "#f85b5b", "--j": "#9441f3" }}>
        <a href="https://www.instagram.com/v.a_valhalla/"
        target="_blank"
        rel="noopener noreferrer" className="">
        <span className="icon "><FaInstagram/></span>
        <span className="title">Instagram</span>
        </a>
      </li>

      <li style={{ "--i": "#54be5d", "--j": "#a6ecb5" }} className="mx-5">
        <a href="https://wa.me/5493815986888"
        ><span className="icon"><FaWhatsapp/></span>
        <span className="title">Whatsapp</span></a>
      </li>

      <li style={{ "--i": "#FF9966", "--j": "#FF5E62" }}>
        <a href="https://www.instagram.com/distribuidora.imporia/"
        target="_blank"
        rel="noopener noreferrer">
        <span className="icon"><IoBeerOutline/></span>
        <span className="title text-center fs-6">Distribuidora<br/>Oficial</span>
        </a>
        
      </li>
    </ul>
  );
};

export default Iconos;