import React from "react";
import {
  RiDashboardFill,
  RiDashboardLine,
  RiFolderLine,
  RiChat4Fill,
  RiSettings2Line,
} from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import frame from "../../image/Frame.svg";
import loggo from "../../image/115.svg";

import "./aside.css";

const Aside = () => {
  return (
    <section className="aside">
      <div className="aside-content">
        <div className="logo">
          <h1>
            <img src={loggo} className="img-logo" alt="logo" /> Ohara
          </h1>
          <button className="btn btn-join">Join a course</button>
        </div>

        <div className="nav">
          <ul className="list">
            <li className="item">
              <RiDashboardLine />
              Dashboard
            </li>
            <li className="item">
              <RiDashboardFill />
              All Courses
            </li>
            <li className="item">
              <RiFolderLine />
              Resources
            </li>
            <li className="item">
              <MdPersonOutline />
              Friends
            </li>
            <li className="item">
              <RiChat4Fill />
              Chats
            </li>
            <li className="item">
              <RiSettings2Line />
              Settings
            </li>
          </ul>
        </div>

        <div className="upgrade">
          <div className="upgrade-img-con">
            <img src={frame} className="upgrade-img" alt="frame" />
          </div>
          <div className="upgrade-content">
            <p>Upgrade to for more resources</p>

            <button className="btn btn-upgrade">Upgrade</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aside;
