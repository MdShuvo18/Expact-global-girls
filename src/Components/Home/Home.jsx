import Banner from "../Banner/Banner";
import CommunitySection from "../CommunitySection/CommunitySection";
import FAQsection from "../FAQsection/FAQsection";
import Footer from "../Footer/Footer";
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
            <Footer/>
        </div>
    );
};

export default Home;