import bannerPhoto from "../../assets/image-resources/banner.jpeg"
import AbsouluteCard from "../../reUseable/AbsouluteCard";
import Nav from "../../reUseable/Nav";
import SignUpForm from "../../reUseable/SignUpForm";

const Banner = () => {
    return (
        <div>
            <div
                className="pt-6 relative min-h-screen w-full bg-cover bg-center"
                style={{
                    background: `linear-gradient(268.85deg, rgba(0, 0, 0, 0) 40.91%, rgba(8, 114, 186, 0.5) 99.15%), url(${bannerPhoto})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                }}
            >
                <main>
                    <Nav />
                    <div className="flex flex-col p-4 lg:px-0 lg:flex-row justify-between pt-24 gap-24 pb-32 ">
                        <div className="mt-10 space-y-7">
                            <h1 className="text-5xl font-bold text-white leading-tight">The Premier <br />
                                Co-living Travel <br /> Network for Women</h1>
                            <div className="flex gap-5">
                            <hr className="px-5 mt-3 rounded-2xl border-[#D9D9D9] border-2" />
                            <p className="text-lg font-semibold text-white">Find your perfect housemate, <br />
                                move faster, stay longer, and travel with confidence.</p>
                            </div>
                        </div>
                        <div>
                            <SignUpForm />
                        </div>
                    </div>
                </main>
            </div>
            <div >
                <AbsouluteCard />
            </div>

        </div>
    );
};

export default Banner;