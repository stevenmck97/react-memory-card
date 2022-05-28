import React, { useState } from "react";
import ActorCard from "./Card";
import Grid from "@mui/material/Grid";

const Main = () => {
    const [actor, setActor] = useState([
        {
            id: 1,
            firstName: "Brad",
            imgUrl: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
        },
        {
            id: 2,
            firstName: "Angelina",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/640px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg",
        },
        {
            id: 3,
            firstName: "Johnny",
            imgUrl: "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg",
        },
        {
            id: 4,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
        {
            id: 5,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
        {
            id: 6,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
        {
            id: 7,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
        {
            id: 8,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
        {
            id: 9,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
        {
            id: 10,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
        {
            id: 11,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
        {
            id: 12,
            firstName: "Amber",
            imgUrl: "https://www.stylectory.net/wp-content/uploads/2021/01/Amber-heard-met-costume-institute-gala-2016-in-new-york-25-560x783-1.jpg",
        },
    ]);

    const [actorStore, setActorStore] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    /**
     * If the actorStore array does not include the name of the actor that was clicked, add the name of
     * the actor to the actorStore array, increment the score by 1, and if the score is greater than or
     * equal to the bestScore, set the bestScore to the score plus 1. If the actorStore array does
     * include the name of the actor that was clicked, log an error, set the score to 0, and set the
     * actorStore array to an empty array
     * @param e - the event that is triggered when the image is clicked
     */
    const handleActorClick = (e) => {
        if (!actorStore.includes(e.target.name)) {
            setActorStore(actorStore.concat(e.target.name));
            setScore(score + 1);

            if (score >= bestScore) setBestScore(score + 1);
        } else {
            console.log("You already clicked this! Try again!");
            setScore(0);
            setActorStore([]);
        }
    };

    const randomize = () => {
        setActor(actor.sort(() => Math.random() - 0.5));
    };

    return (
        <div>
            <p>
                Current Score: {score} Best Score: {bestScore}
            </p>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                justifyContent={"center"}
            >
                {actor.map((item) => {
                    return (
                        <Grid
                            key={item.id}
                            onClick={randomize}
                            item
                            xs={4}
                            sm={4}
                            md={2}
                        >
                            <ActorCard
                                name={item.firstName}
                                img={item.imgUrl}
                                handleActorClick={handleActorClick}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default Main;
