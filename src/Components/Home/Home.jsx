import Banner from "../Banner/Banner";
import CommunitySection from "../CommunitySection/CommunitySection";
import FAQsection from "../FAQsection/FAQsection";
import Footer from "../Footer/Footer";
import MemebersSay from "../MembersSay/MemebersSay";
import TravelerSection from "../TravelerSection/TravelerSection";
import WhyChoose from "../WhyChoose/WhyChoose";
import WorkSection from "../WorksSection/WorkSection";


const Home = () => {
    return (
        <div>
            <Banner />
            <main>
                <CommunitySection />
                <TravelerSection />
                <WhyChoose />
            </main>
            <WorkSection />
            <main>
                <MemebersSay />
                <FAQsection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;