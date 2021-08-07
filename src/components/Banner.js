import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t  from-gray-500 to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loadiing="lazy" src="https://links.papareact.com/gi1" atl=""/>
                </div>
                <div>
                    <img loadiing="lazy" src="https://links.papareact.com/6ff" atl=""/>
                </div>
                <div>
                    <img loadiing="lazy" src="https://links.papareact.com/7ma" atl=""/>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
