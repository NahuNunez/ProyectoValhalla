const Iconos = () => {
  return (
    <ul>
      <li style={{ "--i": "#f85b5b", "--j": "#9441f3" }}>
        <span className="icon">
          <ion-icon name="home-outline"></ion-icon>
        </span>
        <span className="title">Instagram</span>
      </li>

      <li style={{ "--i": "#54be5d", "--j": "#a6ecb5" }} className="mx-5">
        <span className="icon">
          <ion-icon name="videocam-outline"></ion-icon>
        </span>
        <span className="title">Whatsapp</span>
      </li>

      <li style={{ "--i": "#FF9966", "--j": "#FF5E62" }}>
        <span className="icon">
          <ion-icon name="camera-outline"></ion-icon>
        </span>
        <span className="title text-center fs-6">Distribuidora <br/> Oficial</span>
      </li>
    </ul>
  );
};

export default Iconos;