import React, { useState } from "react";
import Button from "../button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { thingForm, thingFormKeys } from "../../assets/base-data";
import { css } from "aphrodite/no-important";
import { thingFormStyles } from "./thing.form.styles";
import { payloadAction } from "../../assets/functions";
import { userTypes } from "../../redux/user/user.types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectUserId,
  selectThingsToDoName,
} from "../../redux/user/user.selectors";

const ThingForm = ({ title, userId, thingsToDoName, ...props }) => {
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

   
    const isNameAlready = Boolean(thingsToDoName.filter(t=>t===formState.thing.value).length)
    if (isNameAlready) {
      alert("That Name is Already on your list");
      return;
    } else {
      await payloadAction(userTypes.ADD_THING_TO_DO_START, {
        userId,
        thingToDo: { ...formState, createdAt: new Date() },
      });
      await setFormState(thingForm);
    }
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
      {/* flexContainer */}
      <form onSubmit={handleSubmit} className={css(thingFormStyles.form)}>
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
  thingsToDoName: selectThingsToDoName,
});

export default connect(mapStateToProps)(ThingForm);
