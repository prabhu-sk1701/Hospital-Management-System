import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          cumque in corrupti enim fugit quod voluptate dolore et vel veniam
          voluptates sapiente, maiores, molestiae alias earum sunt porro quis,
          distinctio delectus quos pariatur architecto provident laborum
          accusantium. Tenetur nobis minus accusamus eaque temporibus velit
          aspernatur neque saepe cumque vero quam laborum illum quae maiores
          possimus unde veniam, fugit debitis! Sint, alias? Minus dignissimos
          debitis at! Sed possimus nobis reprehenderit ex libero consequuntur
          corrupti, dolorem neque placeat repellendus, quasi et molestiae iusto
          praesentium ipsa totam animi in illo sint maiores eaque atque?
          Laborum, repellat sint sit natus nobis numquam debitis exercitationem!
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
