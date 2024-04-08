import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    console.log(cards);
    return (
        <div className="grid my-20 md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-10">
            {
                cards.map(card => <Card
                    key={card.id}
                    card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;