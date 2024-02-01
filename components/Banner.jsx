import { LiaShippingFastSolid } from "react-icons/lia";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiCubeFocusThin } from "react-icons/pi";



const Banner = () => {
    return (
        <div className="grid p-3 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
           
            <div className="h-32 rounded-lg bg-gray-100 flex justify-center p-3 items-center">
                <div className="text-5xl" >
                    <LiaShippingFastSolid />
                </div>
                <h2 className="mx-3 text-2xl">Livraison Gratuit</h2>
            </div>
            <div className="h-32 rounded-lg bg-gray-100 flex justify-center p-3 items-center">
                <div className="text-5xl" >
                    <PiCubeFocusThin />
                </div>
                <h2 className="mx-3 text-2xl">Customized Design</h2>
            </div>
            <div className="h-32 rounded-lg bg-gray-100 flex justify-center p-3 items-center">
                <div className="text-5xl" >
                    <IoPricetagsOutline />
                </div>
                <h2 className="mx-3 text-2xl">Des Prix Raisonable</h2>
            </div>
        </div>
    )
}

export default Banner