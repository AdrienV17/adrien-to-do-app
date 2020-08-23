import React, { useEffect } from 'react';
import Modal from "../../components/modal/modal.component";
import ThingForm from "../../components/thing-form/thing-form.component";
import { Link } from "react-router-dom";
import { css } from "aphrodite/no-important";
import { homepageStyles } from "./homepage.styles";
import { useSpring, animated } from "react-spring";
import { fadeInSpring } from "../../assets/springs";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserId,selectUserName } from "../../redux/user/user.selectors";
import { typeAction } from '../../assets/functions';
import { userTypes } from '../../redux/user/user.types';
const Homepage = ({id,name, history}) => {
  const fadeIn = useSpring({
    ...fadeInSpring,
    delay:0
  })
  useEffect(() => {
    if(!id){
      history.push('/sign-in')
    }
  }, [history, id]);
  return (
    <div className="homepage">
      {/* Homepage Container */}
      <animated.div style={fadeIn} className={css(homepageStyles.homepageContainer)}>
        {/* Sign in/up Button */}
        <div onClick={()=>typeAction(userTypes.SIGN_OUT)} className={css(homepageStyles.signButton)}>Sign Out</div>
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
              <Link to='/today'>See Today List</Link>
            </li>
            <li style={{cursor:'pointer'}}>
              <Modal trigger='Add Another Thing to Do'>
                <ThingForm title={'New Thing Form'}/>
              </Modal>
            </li>
            <li className={css(homepageStyles.li)}>See all Lists</li>
          </ul>
        </div>
      </animated.div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  id: selectUserId,
  name:selectUserName
})
export default connect(mapStateToProps)(Homepage);
