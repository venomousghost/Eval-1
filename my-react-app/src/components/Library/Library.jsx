import React, { useState } from 'react';
import Navbar from './Navbar';
import Card from '../Card/Card';

const games = [
  { title: "Apex Legends", image: "https://cdn1.epicgames.com/spt-assets/5dcd88f4e2094a698ebffa43438edc33/apex-legends-v4qf9.jpg?h=480&quality=medium&resize=1&w=360", favorite: false },
  { title: "The Outlast", image: "https://cdn1.epicgames.com/6504cc61472e498796e0b4963a201438/offer/EGS_TheOutlastTrials_RedBarrels_S2-1200x1600-c70676de7925195513fa7bc4bc2f1d9b.jpg?resize=1&w=360&h=480&quality=medium", favorite: false },
  { title: "Dying Light", image: "https://cdn1.epicgames.com/offer/87b7846d2eba4bc49eead0854323aba8/EGS_DyingLight2StayHumanReloadedEdition_Techland_S2_1200x1600-76cef594ff94fbac64a8af1ebe4c7590?resize=1&w=360&h=480&quality=medium", favorite: true },
  { title: "Alan Wake 2", image: "https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S2_1200x1600-c7c8091ddac0f9669c8e5905bca88aaa?resize=1&w=360&h=480&quality=medium", favorite: true },
  { title: "GTA V", image: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?resize=1&w=360&h=480&quality=medium", favorite: true },
  { title: "Last of us", image: "https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?resize=1&w=360&h=480&quality=medium", favorite: true }
];

function Library() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredGames = games.filter(game => {
    if (filter === 'favorites' && !game.favorite) {
      return false;
    }
    return game.title.toLowerCase().includes(search);
  });

  return (
    <>
    <Navbar/>
    <div className="librarya">
      <div className="contenta">
        <div className="games-sectiona">
          <div className="sub-main1a">
            <div className="word1a">LIBRARY</div>
            <div className="sub-part1a">
              <button onClick={() => handleFilterChange('all')}>
                <li id="all-games" className={filter === 'all' ? 'active' : ''}>All</li>
              </button>
              <button onClick={() => handleFilterChange('favorites')}>
                <li id="favorite-games" className={filter === 'favorites' ? 'active' : ''}>Favorites</li>
              </button>
            </div>
            <div className="sub-part2a">
              <label htmlFor="sort-dropdowna">Sort by:</label>
              <select id="sort-dropdowna">
                <option value="1">Alphabetical A-Z</option>
                <option value="2">Recently purchased</option>
                <option value="3">Recently played</option>
                <option value="4">Alphabetical Z-A</option>
              </select>
            </div>
            <div className="sub-part3a">
              {filteredGames.map((game, index) => (
                <Card key={index} game={game} />
              ))}
            </div>
          </div>
        </div>
        <div className="filters-sectiona">
          <div className="sub-main2a">
            <div className="word2a">Filters</div>
            <div className="nav-3a">
              <form>
                <input
                  type="text"
                  placeholder="Title"
                  className="search-input1a"
                  onChange={handleSearchChange}
                />
              </form>
            </div>
            <hr width="260px" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Library;
