import img from "../../assets/image-resources/Frame 172.png"
import twitter from "../../assets/image-resources/twitter (2) 1.svg"
import instagram from "../../assets/image-resources/instagram 1.svg"
import linkedIn from "../../assets/image-resources/linkedin 1.svg"
import facebook from "../../assets/image-resources/facebook 1.svg"

const Footer = () => {
    return (
        <footer className="mt-24 bg-white">
            <main>
                <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4 lg:gap-0">
                    <div className="flex lg:w-1/3 flex-col gap-3">
                        <img className="w-[130px] h-[105px]" src={img} alt="" />
                        <p className="w-full">Scan a Turning Hearts Medallion to learn about and interact with those who have passed on. You can also begin documenting the legacy you wish to leave behind.</p>
                        <div className="space-y-4">
                            <p className="">Social Media :</p>
                            <div className="flex gap-3">
                                <img src={twitter} alt="" />
                                <img src={instagram} alt="" />
                                <img src={linkedIn} alt="" />
                                <img src={facebook} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center lg:flex-row md:items-center lg:items-center gap-8 lg:gap-36 ">
                        <div className="w-full">
                            <h1 className="text-lg font-bold text-[#1D2939]">Quick Link</h1>
                            <ul>
                                <li>Home</li>
                                <li>FAQ</li>
                                <li>Country search</li>
                                <li>Register</li>
                            </ul>
                        </div>
                        <div>
                            <h1>(316) 555-0116</h1>
                            <p>deanna.curtis@example.com</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t-2 border-gray-300 pt-6 text-end">
                    <p>&copy; {new Date().getFullYear()} Ash and Fire. All Rights Reserved.</p>
                </div>
            </main>
        </footer>
    );
};


export default Footer;

/* 
<div className="mt-10 border-t border-gray-700 pt-6 text-end">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div> 
*/