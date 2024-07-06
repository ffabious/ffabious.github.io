import React from "react";

const BioBlock: React.FC = () => {
    return (
        <div>
            <h2 className="font-section-name tab" style={{ marginTop: "5%" }}>
                About me
            </h2>
            <div className="font-section-text tab" style={{ marginTop: "1%" }}>
                I'm a Computer Science student at Innopolis University.<br />
                I code in C++ and Python, and I'm particularly interested in Artificial Intelligence and Data Science. <br />
                Currently, I'm studying Front-end Web Development, which this website is done for =P.
            </div>
        </div>
    );
};

export default BioBlock;