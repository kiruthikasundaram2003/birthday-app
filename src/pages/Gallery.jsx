import "../styles/Gallery.css";

function Gallery() {

  const images = [
    `${import.meta.env.BASE_URL}1.jpeg`,
    `${import.meta.env.BASE_URL}2.jpeg`,
    `${import.meta.env.BASE_URL}3.jpeg`,
    `${import.meta.env.BASE_URL}4.jpeg`,
    `${import.meta.env.BASE_URL}5.jpeg`,
    `${import.meta.env.BASE_URL}6.jpeg`,
    `${import.meta.env.BASE_URL}7.jpeg`,
    `${import.meta.env.BASE_URL}8.jpeg`,
    `${import.meta.env.BASE_URL}9.jpeg`,
    `${import.meta.env.BASE_URL}10.jpeg`,
    `${import.meta.env.BASE_URL}11.jpeg`,
    `${import.meta.env.BASE_URL}12.jpeg`,
    `${import.meta.env.BASE_URL}13.jpeg`,
    `${import.meta.env.BASE_URL}14.jpeg`
  ];

  return (

    <div className="gallery-page">

      <h1>📸 Our Beautiful Memories ❤️</h1>

      <div className="gallery-container">

        {
          images.map((image, index) => (

            <div className="card" key={index}>

              <img src={image} alt="" />

            </div>

          ))
        }

      </div>

    </div>

  );
}

export default Gallery;