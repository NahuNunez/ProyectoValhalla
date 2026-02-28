import { useEffect } from "react";



const Home = () => {
    useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty("--x", `${e.clientX}px`);
      document.body.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    
    <> 
    <h1 className="display-2 text-white text-center"> </h1>
    </>
   
  )
}

export default Home
