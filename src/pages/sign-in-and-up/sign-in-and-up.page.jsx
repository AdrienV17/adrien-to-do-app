import React, { useState, useEffect } from "react";
import Button from "../../components/button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import { withRouter } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { signInAndUpStyles } from "./sign-in-and-up.styles";
import { css } from "aphrodite/no-important";
import { payloadAction, typeAction } from "../../assets/functions";
import { fadeInSpring } from "../../assets/springs";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserId, selectUserErrorMessage } from "../../redux/user/user.selectors";
import { userTypes } from "../../redux/user/user.types";
import { signInForm, signUpForm } from "../../assets/base-data";

const SignInAndUp = ({ isSignIn, errorMessage, history, userId, ...props }) => {
  const signForm = isSignIn ? signInForm : signUpForm;
  // Form State
  const [userCredentials, setUserCredentials] = useState(signForm);
  const stateKeys = Object.keys(userCredentials);
  if (userId) {
    history.push("/");
  }
  useEffect(()=>{
    typeAction(userTypes.REMOVE_ERROR_MESSAGE)
  },[])
  // Handlers
  const handleChange = ({ target: { name, value } }) =>
    setUserCredentials({
      ...userCredentials,
      [name]: {
        ...userCredentials[name],
        value,
      },
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    const userRawCredentials = {};

    stateKeys.map(
      (key) => (userRawCredentials[key] = userCredentials[key].value)
    );

    payloadAction(
      isSignIn ? userTypes.SIGN_IN_EMAIL_START : userTypes.SIGN_UP_START,
      userRawCredentials
    );
    setUserCredentials(isSignIn ? signInForm : signUpForm);
  };
  // Transitions
  const fadeIn = useSpring(fadeInSpring);
  return (
    // Container
    <animated.div className={css(signInAndUpStyles.signInAndUp)} style={fadeIn}>
      {/* Sign In Card */}
      <div className={css(signInAndUpStyles.signInAndUpContainer)}>
        {/* Header */}
        <div className={css(signInAndUpStyles.header)}>
          {/* Title */}
          <div className={css(signInAndUpStyles.headerTitle)}>
            Sign {isSignIn ? "In" : "Up"}
          </div>
        </div>
        {/* Form Container */}
        <div className={css(signInAndUpStyles.signInForm)}>
          {/* errorMessage */}
  <div style={{display:errorMessage?'block':'none'}} className={css(signInAndUpStyles.errorMessage)}>{errorMessage}</div>
          {/* Form */}
          <form onSubmit={handleSubmit} className={css(signInAndUpStyles.form)}>
            {/* Inputs */}
            {stateKeys.map((key, i) => (
              <FormInput
                key={i}
                label={userCredentials[key].label}
                name={userCredentials[key].label.toLowerCase()}
                type={userCredentials[key].type}
                handleChange={handleChange}
                value={userCredentials[key].value}
                required={userCredentials[key].required}
              />
            ))}

            {/* Submit Button */}
            <div className="form__button">
              <Button type="submit">Sign {isSignIn ? "In" : "Up"}</Button>
            </div>
          </form>
        </div>
        {/* Footer */}
        <div className={css(signInAndUpStyles.footer)}>
          <div
            className={css(signInAndUpStyles.footerLinks)}
            onClick={() =>
              history.push("/Redirect", {
                route: isSignIn ? "sign-up" : "sign-in",
              })
            }
          >
            Sign {isSignIn ? "Up" : "In"}
          </div>
          <div className={css(signInAndUpStyles.footerLinks)}>
            Forgot your Password??
          </div>
        </div>
      </div>
    </animated.div>
  );
};

const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
  errorMessage:selectUserErrorMessage
});
export default connect(mapStateToProps)(withRouter(SignInAndUp));
