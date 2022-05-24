import React from "react";

const Card = ({ name, img, handleActorClick }) => {
    return (
        <div onClick={handleActorClick}>
            <img src={img} alt={name} name={name} width="200px"></img>
            <h3 name={name}>{name}</h3>
        </div>
    );
};

export default Card;
