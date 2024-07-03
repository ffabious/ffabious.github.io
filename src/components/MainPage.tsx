import React from "react";
import BioBlock from "./BioBlock";
import ComicBlock from "./ComicBlock";
// import "./styles/MainPage.css";

const MainPage: React.FC = () => {
    return (
        <div>
            <header className="nav">
                <nav>
                    <ul>
                        <li style={{ marginLeft: "12%" }}>
                            <h1><a href="index.html" style={{ textDecoration: "none" }} className="logo-text">
                                <span className="logo font-logo">
                                    <img className="logo"
                                        src="https://img.icons8.com/?size=100&id=sXm12ie1GUjg&format=png&color=ffc800"
                                        alt="Logo Icon" height="48" width="48" />
                                    Kirill Greshnov
                                </span>
                            </a>
                            </h1>
                        </li>
                        <li style={{ marginLeft: "40%" }}>
                            <a href="https://t.me/didukyril" id="tg-link">
                                <img src="https://img.icons8.com/?size=100&id=9R1sV3QvY18K&format=png&color=ffc800"
                                    alt="Telegram" width="40" height="40" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ffabious" id="gh-link">
                                <img src="https://img.icons8.com/?size=100&id=12598&format=png&color=ffc800" alt="GitHub"
                                    width="40" height="40" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:k.greshnov@innopolis.university" id="email">
                                <img src="https://img.icons8.com/?size=100&id=124377&format=png&color=ffc800" alt="Email"
                                    width="40" height="40" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <BioBlock />
            <ComicBlock />
        </div>
    );
};

export default MainPage;