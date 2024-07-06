import React from "react";
import Image from "next/image";

const HeaderBlock: React.FC = () => {
  return (
    <header className="nav">
      <nav>
        <ul>
          <li style={{ marginLeft: "12%" }}>
            <h1><a href="/" style={{ textDecoration: "none" }} className="logo-text">
              <span className="logo font-logo">
                <Image className="logo"
                  src="https://img.icons8.com/?size=100&id=sXm12ie1GUjg&format=png&color=ffc800"
                  alt="Logo Icon" height="48" width="48" />
                Kirill Greshnov
              </span>
            </a>
            </h1>
          </li>
          <li style={{ marginLeft: "40%" }}>
            <h1><a href="/comic" style={{ textDecoration: "none" }} className="logo-text">
              <span className="logo font-logo">
                <Image className="logo"
                  src="https://img.icons8.com/?size=100&id=Bau6M9xR1HkV&format=png&color=ffc800"
                  alt="Comic Icon" height="36" width="36" />
                Comic
              </span>
            </a>
            </h1>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderBlock;