import React, { useState } from "react";
import Card from "./Card";

const Main = () => {
    const [actor] = useState({
        name: [
            {
                id: 1,
                firstName: "Brad",
                imgUrl: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
            },
            {
                id: 2,
                firstName: "Angelina",
                imgUrl: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
            },
            {
                id: 3,
                firstName: "Johnny",
                imgUrl: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
            },
            {
                id: 4,
                firstName: "Amber",
                imgUrl: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
            },
        ],
    });

    const [actorStore, setActorStore] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const handleActorClick = (e) => {
        if (!actorStore.includes(e.target.name)) {
            setActorStore(actorStore.concat(e.target.name));
            setScore(score + 1);
            score >= bestScore ? setBestScore(score + 1) : console.log("test");
        } else {
            console.log("error");
            setScore(0);
            setActorStore([]);
        }
    };

    return (
        <div>
            <p>
                Current Score: {score} Best Score: {bestScore}
            </p>
            {actor.name.map((item) => {
                return (
                    <div key={item.id}>
                        <Card
                            name={item.firstName}
                            img={item.imgUrl}
                            handleActorClick={handleActorClick}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Main;
