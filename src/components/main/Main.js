import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./main.css";
import box from "../../image/box.svg";

const Main = () => {
  return (
    <section className="main">
      <div className="main-content">
        <div className="search">
          <form>
            <FiSearch />
            <input type="search" name="find" id="find" placeholder="Search" />
          </form>

          <div className="notify">
            <IoIosNotificationsOutline className="notice" />
          </div>
        </div>

        <div className="all">
          <h3>All courses</h3>
          <ul className="list-all">
            <li>Ongoing</li>
            <li>Favorite</li>
            <li>Complete</li>
          </ul>
        </div>

        <div className="main-section">
          <div className="design">
            <div className="header">
              <div className="title-header">
                <h3>UI/UX Design</h3>
                <p>20 lessons</p>
              </div>
              <p>2h 20min</p>
            </div>
            <div className="bottom">
              <img src={box} alt="box" className="box" />
              <div className="bottom-img">
                <img
                  src="https://images.pexels.com/photos/5944321/pexels-photo-5944321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="profile"
                />
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="design2">
              <div className="header">
                <div className="title-header">
                  <h3>Photography</h3>
                  <p>12 lessons</p>
                </div>
                <p>1h 20min</p>
              </div>
              <div className="bottom">
                <img src={box} alt="box" className="box" />
                <div className="bottom-img">
                  <img
                    src="https://images.pexels.com/photos/4946649/pexels-photo-4946649.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
            <div className="design3">
              <div className="header">
                <div className="title-header">
                  <h3>Animation</h3>
                  <p>12 lessons</p>
                </div>
                <p>2h 30min</p>
              </div>
              <div className="bottom">
                <img src={box} alt="box" className="box" />
                <div className="bottom-img">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
