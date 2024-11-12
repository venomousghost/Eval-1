import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  const [profile, setProfile] = useState({
    FirstName: '',
    LastName: '',
    Age: '',
    Email: '',
    Achievements: '',
    FavoriteGame: '',
    RegisteredDate: '',
  });

  const [profileImage, setProfileImage] = useState('profile-placeholder.png');
  const [submittedProfile, setSubmittedProfile] = useState({
    FirstName: '',
    lastName: '',
    Email: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("No file selected or file is invalid.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!profile.FirstName || !profile.LastName || !profile.Email) {
      alert("Please fill out all required fields.");
      return;
    }

  
    console.log(`Age: ${profile.Age}`);
    console.log(`Achievements: ${profile.Achievements}`);
    console.log(`Favorite Game: ${profile.FavoriteGame}`);

  
    setSubmittedProfile({
      FirstName: profile.FirstName,
      LastName: profile.LastName,
      Email: profile.Email,
    });

  
    setProfile({
      FirstName: '',
      LastName: '',
      Age: '',
      Email: '',
      Achievements: '',
      FavoriteGame: '',
      RegisteredDate: '',
    });
  };

  return (
    <div className="containera">
      <div className="profile-carda">
       
        <div className="image-sectiona">
          <img id="profileImagea" src={profileImage} className="profile-imga" alt="Profile" />
          <input type="file" id="imageUploada" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
          <button className="btna btn-primarya" onClick={() => document.getElementById('imageUploada').click()}>Update Profile Image</button>
        </div>
        <div className="info-sectiona">
          <h3 className="gamer-namea">{submittedProfile.FirstName} {submittedProfile.LastName}</h3>
          <p className="gamer-emaila">{submittedProfile.Email}</p>
        </div>
      </div>
      <div className="form-sectiona">
        <h4 className="profile-headera">Profile Settings</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-groupa">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" id="FirstName" value={profile.FirstName} onChange={handleInputChange} placeholder="Enter your first name" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="LastName" value={profile.LastName} onChange={handleInputChange} placeholder="Enter your last name" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="Age">Age</label>
            <input type="number" id="Age" value={profile.Age} onChange={handleInputChange} placeholder="Enter your age" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" value={profile.Email} onChange={handleInputChange} placeholder="Enter your email" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="Achievements">Achievements</label>
            <textarea id="Achievements" value={profile.Achievements} onChange={handleInputChange} rows="3" placeholder="List your achievements..."></textarea>
          </div>
          <div className="form-groupa">
            <label htmlFor="FavoriteGame">Favorite Game</label>
            <input type="text" id="FavoriteGame" value={profile.FavoriteGame} onChange={handleInputChange} placeholder="Enter your favorite game title" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="RegisteredDate">Registered Date</label>
            <input type="datetime-local" id="RegisteredDate" value={profile.RegisteredDate} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="btna btn-successa">Save Changes</button>
        </form>
      </div>
    </div>
    
  );
}

export default ProfilePage;
