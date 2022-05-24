import React from "react";

const Card = ({ name, img }) => {
    return (
        <div>
            <img src={img} alt={name} width="200px"></img>
            <h3>{name}</h3>
        </div>
    );
};

export default Card;
