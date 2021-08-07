import Image from "next/image"

import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"

function Header() {
    return (
        <header>
            {/* Top Nav */}
            <div className="flex items-center bg-corderitos_blue p-1 flex-grow py-2">

                {/* Logo */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4"/>
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="cursor-pointer hover:underline link">
                        <p>Hola Fernando Segre</p>
                        <p className="font-extrabold">Cuenta & Listas</p>
                    </div>
                    <div className="cursor-pointer hover:underline link">
                        <p>Devoluciones</p>
                        <p className="font-extrabold">& Ordenes</p>
                    </div>
                    <div className="cursor-pointer hover:underline link">
                        <ShoppingCartIcon className="h-10"/>
                        <p className="font-extrabold">Carrito</p>
                    </div>
                </div>
            </div>
            {/* Bottom Nav*/}
            <div>

            </div>
        </header>
    )
}

export default Header
