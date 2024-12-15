import Banner from "../Banner/Banner";
import CommunitySection from "../CommunitySection/CommunitySection";
import FAQsection from "../FAQsection/FAQsection";
import TravelerSection from "../TravelerSection/TravelerSection";
import WorkSection from "../WorksSection/WorkSection";


const Home = () => {
    return (
        <div>
            <Banner />
            <main>
                <CommunitySection />
                <TravelerSection/>
                <WorkSection/>
                <FAQsection/>
            </main>
        </div>
    );
};

export default Home;