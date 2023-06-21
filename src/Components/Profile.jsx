import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Profile.css";
const Profile = () => {
  const location = useLocation();
  const {
    name,
    vision,
    mission,
    core,
    exp,
    target,
    nclients,
    clients,
    key,
    oview,
    collab,
    finperf,
    statprof,
    profit,
    sgoal,
    lgoal,
    newMarket,
    expan,
    inno,
    ideas,
  } = location.state || {};

  return (
    <div className="profile-container">
      <h1 className="profile-heading">{name}</h1>
      <div className="profile-content">
        <h4 className="profile-subheading">Vision:</h4>
        <p className="profile-text">{vision}</p>
        <h4 className="profile-subheading">Mission:</h4>
        <p className="profile-text">{mission}</p>
        <h4 className="profile-subheading">Core Service:</h4>
        <p className="profile-text">{core}</p>
        <h4 className="profile-subheading">Years of Experience:</h4>
        <p className="profile-text">{exp}</p>
        <h4 className="profile-subheading">Target Customers:</h4>
        <p className="profile-text">{target}</p>
        {nclients === "Yes" && (
          <div>
            <h4 className="profile-subheading">Clients:</h4>
            <p className="profile-text">{clients}</p>
          </div>
        )}
        <h4 className="profile-subheading">Strengths:</h4>
        <p className="profile-text">{key}</p>
        <h4 className="profile-subheading">Team Overview:</h4>
        <p className="profile-text">{oview}</p>
        <h4 className="profile-subheading">Collaboration Experience:</h4>
        <p className="profile-text">{collab}</p>
        <h4 className="profile-subheading">Financial Performance:</h4>
        <p className="profile-text">{finperf}</p>
        {statprof === "Yes" && (
          <div>
            <h4 className="profile-subheading">Net Profit:</h4>
            <p className="profile-text">{profit}</p>
          </div>
        )}
        <h4 className="profile-subheading">Short-term goal:</h4>
        <p className="profile-text">{sgoal}</p>
        <h4 className="profile-subheading">Long-term goal:</h4>
        <p className="profile-text">{lgoal}</p>
        {newMarket === "Yes" && (
          <div>
            <h4 className="profile-subheading">Expansion Plans:</h4>
            <p className="profile-text">{expan}</p>
          </div>
        )}
        {inno === "Yes" && (
          <div>
            <h4 className="profile-subheading">Upcoming Product launches:</h4>
            <p className="profile-text">{ideas}</p>
          </div>
        )}
      </div>
    </div>
  );

};

export default Profile;
