import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectUserId,
  selectUserIsFetching,
} from "../../redux/user/user.selectors";
import { setIsFetching } from "../../assets/functions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import HomepageJSX from "./homepage.JSX";

const HomepageWithSpinner = WithSpinner(HomepageJSX);
const Homepage = ({ id, history, isFetching }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!id) {
      history.push("/sign-in");
    }

    setIsFetching(isFetching, setIsLoading, 1000);
  }, [history, id, isFetching]);
  return <HomepageWithSpinner isLoading={isLoading} />;
};
const mapStateToProps = createStructuredSelector({
  isFetching: selectUserIsFetching,
  id: selectUserId,
});
export default connect(mapStateToProps)(Homepage);
