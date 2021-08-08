import { useState } from "react";
import Image from "next/image"
import {StarIcon} from "@heroicons/react/solid"
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice"

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image}) {
    const dispatch = useDispatch();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            hasPrime,
        };

        // Sending the product as an action to the REDUX store... the basket slice
        dispatch(addToBasket(product));
    }

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-sm capitalize italic text-gray-400">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain"/>

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating)
                    .fill()
                    .map( (_, i) => (<StarIcon className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <p>ARS$ {price}</p>

            {hasPrime && (
                <div className="flex items-center space-x-2 mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt={title}/>
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>  
                </div>
            )}

            <button 
                className="mt-auto p-2 text-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border boder-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
                onClick={addItemToBasket}
            >
                Add to basket
            </button>

        </div>
    )
}

export default Product
