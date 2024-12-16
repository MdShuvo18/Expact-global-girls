/* eslint-disable react/prop-types */


const Headers = ({ title, subTitle }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl lg:text-5xl font-bold text-[#1D2939]">{title}</h1>
            <h2 className="w-2/3 text-center lg:text-xl font-medium text-[#344054] mt-5">{subTitle}</h2>
        </div>
    );
};

export default Headers;