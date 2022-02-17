import FuseSplashScreen from "@fuse/core/FuseSplashScreen";
import jwtService from "app/services/jwtService";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { hideMessage, showMessage } from "app/store/fuse/messageSlice";

import {
  setUserData,
  logoutUser,
} from "./store/userSlice";

class Auth extends Component {
  state = {
    waitAuthCheck: true,
  };

  componentDidMount() {
    return Promise.all([
      // Comment the lines which you do not use
      // this.firebaseCheck(),
      this.jwtCheck(),
    ]).then(() => {
      this.setState({ waitAuthCheck: false });
    });
  }

  jwtCheck = () =>
    new Promise((resolve) => {
      jwtService.on("onAutoLogin", () => {
        this.props.showMessage({ message: "Logging in with JWT" });

        /**
         * Sign in and retrieve user data from Api
         */


        // useEffect(() => {
        //   setSession(supabase.auth.session())
        //   supabase.auth.onAuthStateChange((_event, session) => {
        //     setSession(session)
        //   })
        // }, [])

        jwtService
          .signInWithToken()
          .then((user) => {
            console.log(user);
            this.props.setUserData(user.user);
            this.props.showMessage({ message: "Logged in with JWT" });
            resolve();
          })
          .catch((error) => {
            this.props.showMessage({ message: error.message });

            resolve();
          });
      });

      jwtService.on("onAutoLogout", (message) => {
        if (message) {
          this.props.showMessage({ message });
        }

        this.props.logout();

        resolve();
      });

      jwtService.on("onNoAccessToken", () => {
        resolve();
      });

      jwtService.init();

      return Promise.resolve();
    });

  render() {
    return this.state.waitAuthCheck ? (
      <FuseSplashScreen />
    ) : (
      <>
        {console.log("this.props.children", this.props.children)}
        {this.props.children}{" "}
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout: logoutUser,
      setUserData,
      // setUserDataAuth0,
      // setUserDataFirebase,
      showMessage,
      hideMessage,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Auth);
