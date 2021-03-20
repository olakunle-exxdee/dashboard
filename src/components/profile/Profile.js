import React from "react";
import "./profile.css";
import { AiOutlineDown } from "react-icons/ai";
import ui from "../../image/ui.svg";
import photo from "../../image/photo.svg";
import amine from "../../image/anime.svg";
import cube from "../../image/cube.svg";
import chat from "../../image/chat.svg";
import Elipse27 from "../../image/Ellipse27.svg";
import Elipse28 from "../../image/Ellipse28.svg";
import app from "../../image/app.svg";
import play from "../../image/play.svg";

import person1 from "../../image/person1.png";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-content">
        <article className="info">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
            alt="profile"
          />
          <p>Alexa Rogue </p>
          <span>
            <AiOutlineDown />
          </span>
        </article>

        <section className="progress">
          <p className="heading">Progress</p>
          <div className="product">
            <div className="product-img">
              <img src={ui} alt="" />
            </div>
            <div className="title">
              <p>UI/UX Design</p>
              <p>Advanced</p>
            </div>
            <progress value="80" max="100"></progress>
          </div>
          <div className="product">
            <div className="product-img">
              <img src={photo} alt="" />
            </div>
            <div className="title">
              <p>Photography</p>
              <p>Intermediate</p>
            </div>
            <progress className="photo-pro" value="30" max="100"></progress>
          </div>
          <div className="product">
            <div className="product-img">
              <img src={amine} alt="" />
            </div>
            <div className="title">
              <p>Animation</p>
              <p>Advanced</p>
            </div>
            <progress className="anime" value="60" max="100"></progress>
          </div>
        </section>

        <section className="upcoming">
          <p className="heading">Upcoming Task</p>
          <div className="tasks">
            <div className="product-1">
              <div className="product-img">
                <img src={chat} alt="" />
              </div>
              <div className="title">
                <p>UI/UX - Discussion</p>
                <p>27 Oct 2020, Tuesday</p>
              </div>
            </div>
            <div className="product-1">
              <div className="product-img-1">
                <img src={cube} alt="" />
              </div>
              <div className="title">
                <p>Animation - 3D Animation</p>
                <p>26 Oct 2020, Monday</p>
              </div>
            </div>
          </div>
        </section>

        <section className="download">
          <div className="download-content">
            <p>
              Download Ohara <br /> Now!
            </p>
            <div className="store">
              <div className="playstore">
                <img src={play} alt="playstore" />
              </div>
              <div className="apple">
                <img src={app} alt="applestore" />
              </div>
            </div>
            <img src={person1} alt="person" className="person" />
          </div>
          <img src={Elipse27} alt="frame" className="down" />
          <img src={Elipse28} alt="frame" className="up" />
        </section>
      </div>
    </section>
  );
};

export default Profile;
