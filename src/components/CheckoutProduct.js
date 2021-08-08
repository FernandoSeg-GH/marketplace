import { StarIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice"
const { default: Image } = require("next/image");

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,    
}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };
        // Push item into redux
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        //Remove item from redux
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <p className="text-gray-900">USD$ {price}</p>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs">FREE Next-day Delivery</p>
                    </div>
                )}

            </div>
            
            {/* Right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="mt-auto p-2 text-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border boder-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">
                    Add +
                </button>
                <button onClick={removeItemFromBasket} className="mt-auto p-2 text-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border boder-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">
                    Remove fom Basket
                </button>
            </div>
    
        </div>
    )
}

export default CheckoutProduct
