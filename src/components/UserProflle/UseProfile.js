import React, { useState } from "react";
import "./UseProfile.scss";
import { useSelector } from "react-redux";

function UserProfile() {
  const [image, setImage] = useState(null);
  const loggedInUser = useSelector((state) => state.loggedInUser);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile">
      <div className="profile-image">
        <label
          htmlFor="image-upload"
          className="d-flex justify-content-center align-items-center flex-column profile-image-label"
        >
          {image ? (
            <img src={image} alt="Profile" className="profile-image-round" />
          ) : (
            <div className="d-flex justify-content-center profile-image-placeholder">
              <i
                style={{ fontSize: "150px" }}
                className="fa-solid fa-circle-user"
              ></i>
            </div>
          )}
          <input
            style={{ fontSize: "1rem" }}
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
            className="d-flex justify-content-center  profile-image-input"
          />
        </label>
      </div>
      <div className="profile-details">
        <h2 className="profile-heading">Hồ sơ người dùng</h2>
        {loggedInUser && (
          <>
            <p>
              <strong>Tên:</strong> {loggedInUser}
            </p>
            <p>
              <strong>Số Điện Thoại:</strong> {loggedInUser.phoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {loggedInUser.email}
            </p>
          </>
        )}
        <p>
          {/* <strong>Địa chỉ:</strong> Đường ABC, Thành phố XYZ */}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
