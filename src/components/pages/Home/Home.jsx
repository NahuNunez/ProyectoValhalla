import { Col, Container, Image, Row } from "react-bootstrap";
import FondoWaves from "./fondo";
import Iconos from "./Iconos";
import "/src/components/pages/Home/Iconos.css"
import logo1 from "../../../assets/logo-png.png"

const Home = () => {
    
  return (
  <>
    <FondoWaves/>
    <Container className="d-flex justify-content-center align-items-center vh-75 pt-5"> 
      <Image src={logo1} className="logo"/>
    </Container>

    <Container className="mb-5">
      <h1 className="display-5 text-white text-center">Pronto podrás ver todo lo que te ofrecemos...</h1>
    </Container>

    <Container className="pt-5">
      <Row className="d-flex justify-content-between ">
        <h2 className="text-white display-6 text-center mb-5">Seguinos!</h2>
        <Iconos/>
      </Row>
    </Container>
    
  </>
   
  )
}

export default Home;