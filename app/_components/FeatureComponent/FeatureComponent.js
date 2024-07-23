import React from "react";
import Image from "next/image";
import "./FeatureComponent.css";

const FeatureComponent = ({ obj }) => {
  const { title, text, image } = obj;
  return (
    <div className="feature__component">
      <div className="feature__component__image-wrapper">
        <Image
          src={image}
          alt="feature icon"
          className="feature__img"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <h4 className="feature__title">{title}</h4>
      <p className="feature__text">{text}</p>
    </div>
  );
};

export default FeatureComponent;
