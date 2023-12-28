import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timline/Timeline";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Name</h4>
              <span className="profileInfoDesc">自己紹介</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}