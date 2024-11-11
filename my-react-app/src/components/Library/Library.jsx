import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    achievements: '',
    favoriteGame: '',
    registeredDate: '',
  });

  const [profileImage, setProfileImage] = useState('profile-placeholder.png');
  const [submittedProfile, setSubmittedProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
    if (!profile.firstName || !profile.lastName || !profile.email) {
      alert("Please fill out all required fields.");
      return;
    }

  
    console.log(`Age: ${profile.age}`);
    console.log(`Achievements: ${profile.achievements}`);
    console.log(`Favorite Game: ${profile.favoriteGame}`);

  
    setSubmittedProfile({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
    });

  
    setProfile({
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      achievements: '',
      favoriteGame: '',
      registeredDate: '',
    });
  };

  return (
    <div className="containera">
      <div className="profile-carda">
       
        <div className="image-sectiona">
          <img id="profileImagea" src={profileImage} className="profile-imga" alt="Profile" />
          <input type="file" id="imageUploada" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
          <button className="btna btn-primary" onClick={() => document.getElementById('imageUploada').click()}>Update Profile Image</button>
        </div>
        <div className="info-sectiona">
          <h3 className="gamer-namea">{submittedProfile.firstName} {submittedProfile.lastName}</h3>
          <p className="gamer-emaila">{submittedProfile.email}</p>
        </div>
      </div>
      <div className="form-sectiona">
        <h4 className="profile-headera">Profile Settings</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-groupa">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={profile.firstName} onChange={handleInputChange} placeholder="Enter your first name" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={profile.lastName} onChange={handleInputChange} placeholder="Enter your last name" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" value={profile.age} onChange={handleInputChange} placeholder="Enter your age" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={profile.email} onChange={handleInputChange} placeholder="Enter your email" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="achievements">Achievements</label>
            <textarea id="achievements" value={profile.achievements} onChange={handleInputChange} rows="3" placeholder="List your achievements..."></textarea>
          </div>
          <div className="form-groupa">
            <label htmlFor="favoriteGame">Favorite Game</label>
            <input type="text" id="favoriteGame" value={profile.favoriteGame} onChange={handleInputChange} placeholder="Enter your favorite game title" required />
          </div>
          <div className="form-groupa">
            <label htmlFor="registeredDate">Registered Date</label>
            <input type="datetime-local" id="registeredDate" value={profile.registeredDate} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="btna btn-success">Save Changes</button>
        </form>
      </div>
    </div>
    
  );
}

export default ProfilePage;
