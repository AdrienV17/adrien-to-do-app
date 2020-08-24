import React from "react";
import { animated, useSpring } from "react-spring";
import { css } from "aphrodite";
import { homepageStyles } from "./homepage.styles";
import { userTypes } from "../../redux/user/user.types";
import { typeAction } from "../../assets/functions";
import ThingForm from "../../components/thing-form/thing-form.component";
import Modal from "../../components/modal/modal.component";
import { Link } from "react-router-dom";
import { fadeInSpring } from "../../assets/springs";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserName } from "../../redux/user/user.selectors";

const HomepageJSX = ({ name,id }) => {
  const fadeIn = useSpring({
    ...fadeInSpring,
    delay: 0,
  });
  return (
    <div className="homepage">
      {/* Homepage Container */}
      <animated.div
        style={fadeIn}
        className={css(homepageStyles.homepageContainer)}
      >
        {/* Sign in/up Button */}
        <div
          onClick={() => typeAction(userTypes.SIGN_OUT)}
          className={css(homepageStyles.signButton)}
        >
          Sign Out
        </div>
        {/* Header */}
        <div className={css(homepageStyles.header)}>
          {/* Big list Image */}
          <i className={`fas fa-list-ul ${css(homepageStyles.i)}`}></i>
          {/* Title */}
          <div className="header__title">Hello, {name}!</div>
        </div>
        {/* List of options */}
        <div className={css(homepageStyles.text)}>
          <ul>
            <li className={css(homepageStyles.li)}>
              <Link to="/today">See Today List</Link>
            </li>
            <li style={{ cursor: "pointer" }}>
              <Modal trigger="Add Another Thing to Do">
                <ThingForm title={"New Thing Form"} />
              </Modal>
            </li>
          </ul>
        </div>
      </animated.div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    name:selectUserName,
})

export default connect(mapStateToProps)(HomepageJSX);
