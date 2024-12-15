import logo from "../assets/image-resources/company_logo.png"
const Nav = () => {
    return (
        <div>
            <nav className="mx-24 px-5 py-2 rounded-2xl bg-white/30 flex justify-between items-center backdrop-blur-sm ">
                <img className="w-[108px] h-[80px]" src={logo} alt="" />
                <button className="w-[106px] h-[42px] bg-white rounded-xl text-primary font-montserrat text-lg">Log In</button>
            </nav>
        </div>
    );
};

export default Nav;