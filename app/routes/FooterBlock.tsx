import React from "react";
import Image from "next/image";
import telegram from "../img/telegramIcon.png"
import gh from "../img/ghIcon.png"
import email from "../img/emailIcon.png"

const FooterBlock: React.FC = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="https://t.me/didukyril" id="tg-link">
                            <Image src={telegram}
                                alt="Telegram" width="40" height="40" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ffabious" id="gh-link">
                            <Image src={gh} alt="GitHub"
                                width="40" height="40" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:k.greshnov@innopolis.university" id="email">
                            <Image src={email} alt="Email"
                                width="40" height="40" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default FooterBlock;