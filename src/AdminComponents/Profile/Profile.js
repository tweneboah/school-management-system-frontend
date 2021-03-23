import React, { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs";
import axios from "../../store/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

function Profile() {
  const [admin, setadmin] = useState({});
  const user = useSelector(selectUser);

  useEffect(() => {
    axios.get(`/school`).then((res) => {
      console.log(res);
      setadmin(res.data);
    });
  }, [user]);

  console.log(admin);

  return (
    <div className="profile__page">
      <ProfileInfo admin={admin} />
      <ProfileTabs />
    </div>
  );
}

export default Profile;
