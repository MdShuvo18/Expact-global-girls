import Banner from "../Banner/Banner";
import CommunitySection from "../CommunitySection/CommunitySection";
import FAQsection from "../FAQsection/FAQsection";
import TravelerSection from "../TravelerSection/TravelerSection";


const Home = () => {
    return (
        <div>
            <Banner />
            <main>
                <CommunitySection />
                <TravelerSection/>
                <FAQsection/>
            </main>
        </div>
    );
};

export default Home;