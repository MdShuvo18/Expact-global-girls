import Banner from "../Banner/Banner";
import CommunitySection from "../CommunitySection/CommunitySection";
import TravelerSection from "../TravelerSection/TravelerSection";


const Home = () => {
    return (
        <div>
            <Banner />
            <main>
                <CommunitySection />
                <TravelerSection/>
            </main>
        </div>
    );
};

export default Home;