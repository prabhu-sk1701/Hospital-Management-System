import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          iure aliquam. Enim debitis dolorum architecto voluptas ut aliquam
          deleniti dolore voluptatem, perspiciatis vero quas. Quod ducimus
          consequatur quibusdam vitae placeat.
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
