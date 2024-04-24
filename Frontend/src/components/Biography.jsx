import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, qui?
          Sed ipsa a corporis laborum veritatis nobis, voluptatem ducimus
          deleniti consequuntur recusandae porro ullam. Sequi delectus, iure
          quod, dolores provident recusandae illum nulla qui fugiat ab debitis
          est quidem quibusdam rem atque! Itaque dolor sapiente nam veritatis
          nesciunt minima corporis.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          tempora?
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          tenetur eveniet iste harum facere eligendi. Consequuntur odio modi
          optio quisquam nam exercitationem quae cumque asperiores quod veniam,
          vel reprehenderit ea doloremque labore excepturi. Quam,
          exercitationem.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur quisquam omnis.</p>
      </div>
    </div>
  );
};

export default Biography;
