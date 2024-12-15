import bannerPhoto from "../../assets/image-resources/banner.jpeg"
import Nav from "../../reUseable/Nav";

const Banner = () => {
    return (
        <div
            className="pt-6"
            style={{
                backgroundImage: `url(${bannerPhoto})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
            }}
        >
           <Nav/>
            
        </div>
    );
};

export default Banner;