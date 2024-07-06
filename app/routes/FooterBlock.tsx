import React from "react";

const FooterBlock: React.FC = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
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
        </footer>
    );
};

export default FooterBlock;