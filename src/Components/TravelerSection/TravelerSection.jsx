import Headers from "../../reUseable/Headers";
import img from "../../assets/image-resources/perfect.png"


const TravelerSection = () => {
    return (
        <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-center mb-2">
                <hr className="w-[57px] h-[8px] rounded-2xl bg-primary border-2" />
            </div>
            <Headers title="Perfect for every type of traveler" />
           <div>
            <img className="w-full" src={img} alt="" />
           </div>
        </div>
    );
};

export default TravelerSection;