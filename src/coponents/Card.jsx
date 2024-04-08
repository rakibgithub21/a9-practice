/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ card }) => {
    console.log(card);
    const { image, description, estate_title, id
 } = card;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/property/${id}`} className="btn btn-primary">View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
