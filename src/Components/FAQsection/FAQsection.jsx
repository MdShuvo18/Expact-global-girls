import Headers from "../../reUseable/Headers";


const FAQsection = () => {
    return (
        <div className="mt-24">
            {/* headers section */}
            <Headers
                title="FAQs"
                subTitle={
                    <>
                        If you have any questions that aren’t listed below, please send your question to:{" "}
                        <span className="underline">info@ExpatGlobalGirls.com</span>
                    </>
                }
            />

            <div className="space-y-5 mt-10">
                <div className="collapse collapse-plus bg-white">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> What cars do you have in your inventory?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris. </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-medium"> What cars do you have in your inventory?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris. </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-medium"> What cars do you have in your inventory?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris. </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-medium"> What cars do you have in your inventory?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris. </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-medium"> What cars do you have in your inventory?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQsection;