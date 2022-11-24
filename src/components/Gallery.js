import React from "react";
import "./Gallery.css";

const imageUrls = [
  {
    image: "https://wallpaperaccess.com/full/12919.jpg",
    key: "https://wallpaperaccess.com/full/12919.jpg",
  },
  {
    image: "https://wallpapercave.com/wp/wp7925511.jpg",
    key: "https://wallpapercave.com/wp/wp7925511.jpg",
  },
  {
    image:
      "https://i.pinimg.com/originals/19/05/f7/1905f7b877462f2cd3a0efa922faa7a2.jpg",
    key: "https://i.pinimg.com/originals/19/05/f7/1905f7b877462f2cd3a0efa922faa7a2.jpg",
  },
  {
    image:
      "https://p4.wallpaperbetter.com/wallpaper/771/885/249/digital-art-artwork-illustration-landscape-4k-hd-wallpaper-preview.jpg",
    key: "https://p4.wallpaperbetter.com/wallpaper/771/885/249/digital-art-artwork-illustration-landscape-4k-hd-wallpaper-preview.jpg",
  },
  {
    image: "https://wallpapercave.com/wp/wp7027819.jpg",
    key: "https://wallpapercave.com/wp/wp7027819.jpg",
  },
  {
    image:
      "https://i.pinimg.com/originals/b3/ab/24/b3ab2449cafb778bde0b18c266573294.jpg",
    key: "https://i.pinimg.com/originals/b3/ab/24/b3ab2449cafb778bde0b18c266573294.jpg",
  },
  {
    image:
      "https://c4.wallpaperflare.com/wallpaper/317/339/593/xiaomi-abstract-hd-4k-wallpaper-preview.jpg",
    key: "https://c4.wallpaperflare.com/wallpaper/317/339/593/xiaomi-abstract-hd-4k-wallpaper-preview.jpg",
  },
  {
    image:
      "https://free4kwallpapers.com/uploads/originals/2020/01/23/digital-art-k-wallpaper.jpg",
    key: "https://free4kwallpapers.com/uploads/originals/2020/01/23/digital-art-k-wallpaper.jpg",
  },
  {
    image:
      "https://wallpapersmug.com/download/3840x2400/07a65a/abstract-digital-art-of-leaves.jpg",
    key: "https://wallpapersmug.com/download/3840x2400/07a65a/abstract-digital-art-of-leaves.jpg",
  },
  {
    image:
      "https://assets.hongkiat.com/uploads/ww-falling-stars-meteors-wallpapers/4k/original/18.jpg",
    key: "https://assets.hongkiat.com/uploads/ww-falling-stars-meteors-wallpapers/4k/original/18.jpg",
  },
];

function Gallery() {
  return (
    <div className="container">
      <div className="row">
        {imageUrls.map(({ image, key }) => (
          <div className="col-sm-6" key={key}>
            {console.log(image)}
            <div className="card">
              <img className="card-img-top" src={image} alt={image} />
              <div className="card-body"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
