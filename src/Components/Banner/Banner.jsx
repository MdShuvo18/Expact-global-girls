import bannerPhoto from "../../assets/image-resources/banner.jpeg"
import Nav from "../../reUseable/Nav";
import SignUpForm from "../../reUseable/SignUpForm";

const Banner = () => {
    return (
        <div>
            <div
                className="pt-6 relative"
                style={{
                    backgroundImage: `linear-gradient(268.85deg, rgba(0, 0, 0, 0) 40.91%, rgba(8, 114, 186, 0.5) 99.15%), url(${bannerPhoto})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "100%",
                }}
            >
                <Nav />
                <div className="flex justify-center mt-24 gap-24">
                    <div className="mt-10 space-y-7">
                        <h1 className="text-5xl font-bold text-white">The Premier <br />
                            Co-living Travel <br /> Network for Women</h1>
                        <p className="text-lg font-bold text-white">Find your perfect housemate, <br />
                            move faster, stay longer, and travel with confidence.</p>
                    </div>
                    <div>
                        <SignUpForm />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Banner;