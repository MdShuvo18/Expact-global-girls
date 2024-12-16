import logo from "../assets/image-resources/company_logo.png"
const Nav = () => {
    return (
        <div>
            <nav className="px-5 py-1 rounded-2xl bg-white/30 flex justify-between items-center backdrop-blur-sm ">
                <img className="w-[108px] h-[96px]" src={logo} alt="" />
                <button className="px-6 py-2 bg-white rounded-xl text-primary font-montserrat">Log In</button>
            </nav>
        </div>
    );
};

export default Nav;