import React from 'react';

function Slider() {
  return (
    <div className="slider">
      <input type="radio" name="slider" id="slide1" defaultChecked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <input type="radio" name="slider" id="slide4" />
      <input type="radio" name="slider" id="slide5" />

      <div className="slides">
        <div className="item" id="slide1-content">
          <img src="https://wallpapercave.com/wp/wp5029421.jpg" alt="Cyberpunk" />
          <div className="content">
            <p>Design</p>
            <h2>Cyberpunk</h2>
            <p>
              Cyberpunk 2077 is an open-world, a megalopolis obsessed with power, glamour, and body modification. Take on the most powerful forces of the city in a fight for glory and survival.
            </p>
          </div>
        </div>
        <div className="item" id="slide2-content">
          <img src="https://wallpapercave.com/wp/wp3770576.jpg" alt="Red Dead Redemption 2" />
          <div className="content">
            <p>Design</p>
            <h2>Red Dead Redemption 2</h2>
            <p>
              Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.
            </p>
          </div>
        </div>
        <div className="item" id="slide3-content">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Falan-wake-2-hd-gaming_bWZlam2UmZqaraWkpJRobWllrWdma2U.jpg&f=1&nofb=1&ipt=3336c6f77fb0cb857dd0b6e3ecd786697cd53f0d8e475cac272b7c14f2b0b4d0&ipo=images" alt="Alan Wake 2" />
          <div className="content">
            <p>Design</p>
            <h2>Alan Wake 2</h2>
            <p>
              Saga Anderson arrives to investigate ritualistic murders in a small town. Alan Wake pens a dark story to shape the reality around him. These two heroes are somehow connected.
            </p>
          </div>
        </div>
        <div className="item" id="slide4-content">
          <img src="https://rare-gallery.com/mocahbig/392395-elden-ring-game-tarnished-warrior-4k-pc-wallpaper.jpg" alt="Elden Ring" />
          <div className="content">
            <p>Design</p>
            <h2>Elden Ring</h2>
            <p>
              ELDEN RING is a fantasy RPG game by FromSoftware and George R. R. Martin, set in the Lands Between. Pre-order now and get exclusive bonuses, editions, and expansions.
            </p>
          </div>
        </div>
        <div className="item" id="slide5-content">
          <img src="https://images.hdqwalls.com/download/the-last-of-us-video-game-4k-n3-3840x2160.jpg" alt="The Last of Us: Part 1" />
          <div className="content">
            <p>Design</p>
            <h2>The last of us: Part 1</h2>
            <p>
              Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="thumbnail">
        <label className="item" htmlFor="slide1">
          <img src="https://hdqwalls.com/wallpapers/2018-cyberpunk-2077-4k-n6.jpg" alt="Thumbnail Cyberpunk 2077" />
          <div className="content">Cyberpunk 2077</div>
        </label>
        <label className="item" htmlFor="slide2">
          <img src="https://wallpaperaccess.com/full/2377328.jpg" alt="Thumbnail Red Dead Redemption 2" />
          <div className="content">Red Dead Redemption 2</div>
        </label>
        <label className="item" htmlFor="slide3">
          <img src="https://wallpapercave.com/wp/wp13002792.jpg" alt="Thumbnail Alan Wake 2" />
          <div className="content">Alan Wake 2</div>
        </label>
        <label className="item" htmlFor="slide4">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4kwallpapers.com%2Fimages%2Fwallpapers%2Felden-ring-pc-games-playstation-4-playstation-5-xbox-one-2880x1800-7712.jpg&f=1&nofb=1&ipt=fcaf4f0503b2968a13087e5877b941c2fa3e45c5878ad416b9f6c5aeb9a25f02&ipo=images" alt="Thumbnail Elden Ring" />
          <div className="content">Elden Ring</div>
        </label>
        <label className="item" htmlFor="slide5">
          <img src="https://images.hdqwalls.com/wallpapers/the-last-of-us-part-2-4k-2020-6b.jpg" alt="Thumbnail The Last of Us: Part 1" />
          <div className="content">The last of us: Part 1</div>
        </label>
      </div>
    </div>
  );
}

export default Slider;
