import React from "react";
import "./Sponser.css";

const sponsers = [
  { src: "/Tournament/epic.png", alt: "Epic Games" },
  { src: "/Tournament/riot-games-AABQG2Fu.png", alt: "Riot Games" },
  { src: "/Tournament/omen.png", alt: "Omen" },
  { src: "/Tournament/pgl.png", alt: "PGL" },
  { src: "/Tournament/intel1-removebg-preview.png", alt: "Intel" },
  { src: "/Tournament/gameloft.png", alt: "Gameloft" },
  { src: "/Tournament/amazon-games-CILh7vi7.png", alt: "Amazon Games" },
  { src: "/Tournament/tencent-games-BdkeqMFn.png", alt: "Tencent Games" },
  { src: "/Tournament/discord.png", alt: "Discord" },
  { src: "/Tournament/huawei-CRY38fFI.png", alt: "Huawei" },
  { src: "/Tournament/redbull-MfpvSIiL.png", alt: "Red Bull" },
  { src: "/Tournament/blast-sO_BmQ2X.png", alt: "Blast" },
];

const Sponser = () => {
  return (
    <div className="X-colaborator">
      <h1>Trusted by gamers, developers, and organizers</h1>
      <div className="X-sponser-row X-second-row">
        {sponsers.slice(0, 6).map((sponser, index) => (
          <div key={index} className="X-img">
            <img src={sponser.src} alt={sponser.alt} />
          </div>
        ))}
      </div>
      <div className="X-sponser-row X-first-row">
        {sponsers.slice(6, 12).map((sponser, index) => (
          <div key={index + 6} className="X-img">
            <img src={sponser.src} alt={sponser.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponser;
