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
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserThingsToDoLength } from "../../redux/user/user.selectors";
import Default404 from "../../components/default-404/default-404.component";
const TodayThingsPage = ({ history, thingsToDoLength }) => {
  const fadeIn = useSpring(fadeInSpring);
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
          <div>Things To Do</div>
        </div>
        {/* Add A new thing and */}
        <div className={css(todayThingsStyle.modalButton)}>
          <Modal trigger={<Button>Add a New Thing</Button>}>
            <ThingForm title={"New Thing"} />
          </Modal>
        </div>
        {/* Table */}
        {thingsToDoLength ? (
          <Table headArray={thingsToDoHeader} />
        ) : (
          <Default404
            height={30}
            title="No Things to Do"
            subtitle="Create One!!"
          />
        )}
      </animated.div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  thingsToDoLength: selectUserThingsToDoLength,
});
export default connect(mapStateToProps)(withRouter(TodayThingsPage));
