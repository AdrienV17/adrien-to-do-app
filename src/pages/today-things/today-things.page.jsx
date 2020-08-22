import React from "react";
import { css } from "aphrodite/no-important";
import { todayThingsStyle } from "./today-things.styles";
import { withRouter } from "react-router-dom";
import Table from "../../components/table/table.component";
import { thingsToDoHeader } from "../../assets/base-data";
import Button from "../../components/button/custom-button.component";
import Modal from "../../components/modal/modal.component";
import ThingForm from "../../components/thing-form/thing-form.component";
import { useSpring, animated } from "react-spring";
import { fadeInSpring } from "../../assets/springs";

const TodayThingsPage = ({ history }) => {
  const fadeIn = useSpring(fadeInSpring)
  return (
    // page
    <div className={css(todayThingsStyle.container)}>
      {/* Go Back Button */}
      <div
        className={css(todayThingsStyle.goBackButton)}
        onClick={() => history.goBack()}
      >
        Go back
      </div>
      {/* Card */}
      <animated.div style={fadeIn} className={css(todayThingsStyle.card)}>
        {/* Header */}
        <div className={css(todayThingsStyle.header)}>
          {/* Title */}
          <div>Today Things</div>
        </div>
        {/* Add A new thing and */}
        <div className="">
          <Modal trigger={<Button>Add a New Thing</Button>}>
            <ThingForm title={'New Thing Form'}/>
          </Modal>
        </div>
        {/* Table */}
        <Table headArray={thingsToDoHeader} />
      </animated.div>
    </div>
  );
};

export default withRouter(TodayThingsPage);
