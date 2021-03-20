import React from "react";
import Aside from "../aside/Aside";
import Main from "../main/Main";
import Profile from "../profile/Profile";

const Group = () => {
  return (
    <section className="group">
      <Aside />
      <Main />
      <Profile />
    </section>
  );
};

export default Group;
