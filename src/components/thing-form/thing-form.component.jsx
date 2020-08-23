import React, { useState } from "react";
import { thingForm, thingFormKeys, dummyTasks } from "../../assets/base-data";
import FormInput from "../form-input/form-input.component";
import { css } from "aphrodite/no-important";
import { thingFormStyles } from "./thing.form.styles";
import Button from "../button/custom-button.component";
import { typeAction, payloadAction } from "../../assets/functions";
import { userTypes } from "../../redux/user/user.types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserId } from "../../redux/user/user.selectors";

const ThingForm = ({ title, userId, ...props }) => {
  const [formState, setFormState] = useState(thingForm);
  const handleChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
      },
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await payloadAction(userTypes.ADD_THING_TO_DO_START, {
      userId,
      thingToDo: { ...formState, createdAt: new Date() },
    });
    await setFormState(thingForm);

    if (props.setIsVisible) {
      props.setIsVisible(false);
    }
  };
  return (
    // container
    <div className={css(thingFormStyles.container)}>
      {/* header */}
      <div className={css(thingFormStyles.header)}>
        {/* headerTitle */}
        <div className={css(thingFormStyles.headerTitle)}>{title}</div>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit} className={css(thingFormStyles.form)}>
        {/* flexContainer */}
        <div className={css(thingFormStyles.flexContainer)}>
          {/* formInputs */}
          <div className={css(thingFormStyles.formInputs)}>
            {thingFormKeys.map((key, i) => (
              // formInput
              <FormInput
                key={i}
                name={key}
                label={formState[key].label}
                value={formState[key].value}
                handleChange={handleChange}
                styles={thingFormStyles.formInput}
                type={formState[key].type}
              />
            ))}
          </div>
          {/* image */}
          <div className={css(thingFormStyles.image)}></div>
        </div>
        {/* formButton  */}
        <div className={css(thingFormStyles.formButtom)}>
          <Button type="submit">Add Thing to Do</Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
});

export default connect(mapStateToProps)(ThingForm);
