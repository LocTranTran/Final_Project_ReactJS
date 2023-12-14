import React from "react";
import "./UseProfile.scss";

function UserProfile() {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src="" alt="Profile" />
      </div>
      <div className="profile-details">
        <h2 className="profile-heading">Hồ sơ người dùng</h2>
        <p>
          <strong>Tên:</strong> John Doe
        </p>
        <p>
          <strong>Tuổi:</strong> 30
        </p>
        <p>
          <strong>Email:</strong> johndoe@example.com
        </p>
        <p>
          <strong>Địa chỉ:</strong> Đường ABC, Thành phố XYZ
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
