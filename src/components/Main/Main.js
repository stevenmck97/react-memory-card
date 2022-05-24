import React, { useState } from "react";
import Card from "./Card";

const Main = () => {
    const [actor, setActor] = useState({
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
            // console.log(actorStore);
        } else console.log("error");
    };

    return (
        <div>
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
