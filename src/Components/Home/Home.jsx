import Banner from "../Banner/Banner";
import CommunitySection from "../CommunitySection/CommunitySection";
import FAQsection from "../FAQsection/FAQsection";
import Footer from "../Footer/Footer";
import MemebersSay from "../MembersSay/MemebersSay";
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
                <MemebersSay/>
                <FAQsection/>
                
            </main>
            <Footer/>
        </div>
    );
};

export default Home;