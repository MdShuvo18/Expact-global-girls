import imgOne from "../assets/image-resources/World-bro 1.svg"
import imgTwo from "../assets/image-resources/Filter-rafiki 1.svg"
import imgThree from "../assets/image-resources/Traveling-bro 1.jpg"
const AbsouluteCard = () => {
    return (
        <div className="grid grid-cols-3 justify-items-center">
            <div>
                <img className="w-[83px] h-[83px]" src={imgOne} alt="" />
                <h1 className="text-2xl font-semibold text-black">150+ Countries</h1>
                <p className="font-light text-lg text-[#475467]">Empowering women to <br />explore destinations globally.</p>
            </div>
            <div>
                <img className="w-[83px] h-[83px]" src={imgTwo} alt="" />
                <h1 className="text-2xl font-semibold text-black">Connect & Travel</h1>
                <p className="font-light text-lg text-[#475467]">A trusted community of
                    <br />
                    verified members.</p>
            </div>
            <div>
                <img className="w-[83px] h-[83px]" src={imgThree} alt="" />
                <h1 className="text-2xl font-semibold text-black">Find Your Tribe</h1>
                <p className="font-light text-lg text-[#475467]">Find like-minded housemates
                    <br />
                    faster and easier.</p>
            </div>

        </div>
    );
};

export default AbsouluteCard;