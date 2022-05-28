import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ActorCard = ({ name, img, handleActorClick }) => {
    return (
        // <div onClick={handleActorClick}>
        //     <img src={img} alt={name} name={name} width="200px"></img>
        //     <h3 name={name}>{name}</h3>
        // </div>
        <Card onClick={handleActorClick} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ActorCard;
