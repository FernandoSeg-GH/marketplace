import { useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";

const { default: Image } = require("next/image");
const { default: Header } = require("../components/Header");

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();
    
    return (
        <div className="bg-gray-100">
            <Header/>

            <main className="lg: flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-xl">
                    <Image 
                        src="https://links.papareact.com/ikj" 
                        width={1020}
                        height={250}
                        objectFit="contain"    
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.lenght === 0 ? "Your basket is empty" : "Your Shopping Basket"}
                        </h1>

                        {items.map((item, i) => (
                            <CheckoutProduct  
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                description={item.description}
                                price={item.price}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>
                {/* Right */}
                <div className="fleex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitepace-nowrap">Subtotal ({items.length}, items):
                                <span className="font-bold">ARS$ {total}</span>
                            </h2>

                            <button className={`mt-auto p-2 text-sm md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border boder-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allow'}`}>
                                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
