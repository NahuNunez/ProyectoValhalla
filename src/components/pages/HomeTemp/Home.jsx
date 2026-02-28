import { Container, Image } from "react-bootstrap";
import FondoWaves from "./fondo";
import Iconos from "./iconos";
import "/src/components/pages/Home/Iconos.css"

const Home = () => {
    
  return (
  <>
    <FondoWaves/>
    <Container className="d-flex justify-content-center align-items-center vh-75 pt-5"> 
      <Image src="/src/assets/logo-png.png" className="logo"/>
    </Container>

    <Container className="mb-5">
      <h1 className="display-5 text-white text-center">Pronto podrás ver todo lo que te ofrecemos...</h1>
    </Container>

    <Container className="d-flex justify-content-center pt-5">
      <h2 className="text-white display-6">Seguinos!</h2> 
      <Iconos/>
    </Container>
    
  </>
   
  )
}

export default Home;