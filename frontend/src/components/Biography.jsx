import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
<p>
  We are a team of passionate innovators dedicated to revolutionizing healthcare management.
   Our project, a state-of-the-art **Hospital Management System**, 
    
   We are committed to enhancing the efficiency, security, and quality of patient care through 
   innovative solutions.
</p>
<p>
  With a deep understanding of the complexities of healthcare systems, we focus on creating intuitive,
   user-friendly platforms that streamline operations, reduce administrative burdens, and improve patient
    experiences. Our mission is to empower healthcare providers with the tools they need to deliver exceptional
     care in a rapidly evolving digital landscape.
</p>

        </div>
      </div>
    </>
  );
};

export default Biography;
