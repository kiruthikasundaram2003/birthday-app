import "../styles/Gallery.css";

function Gallery() {

  const images = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/9.jpeg",
    "/10.jpeg",
    "/11.jpeg",
    "/12.jpeg",
    "/13.jpeg",
    "/14.jpeg"
  ];

  return (

    <div className="gallery-page">

      <h1>📸 Our Beautiful Memories ❤️</h1>

      <div className="gallery-container">

        {
          images.map((image,index)=>(

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