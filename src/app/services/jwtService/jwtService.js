import FuseUtils from "@fuse/utils/FuseUtils";
import axios from "axios";
import _ from "@lodash";
import jwtDecode from "jwt-decode";
import { supabase } from "../../supabaseClient";

// import Base64 from 'crypto-js/enc-base64';
// import HmacSHA256 from 'crypto-js/hmac-sha256';
// import Utf8 from 'crypto-js/enc-utf8';

/* eslint-disable camelcase */
const userDat = {
  uuid: "XgbuVEXBU5gtSKdbQRP1Zbbby1i1",
  from: "custom-db",
  role: "admin",
  data: {
    displayName: "Vimal KV",
    photoURL: "assets/images/avatars/Abbott.jpg",
    email: "admin@fusetheme.com",
  },
};

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit("onAutoLogout", "Invalid access_token");
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    console.log(access_token, "access_token");

    // if (!access_token) {
    //   this.emit("onNoAccessToken");
    //   this.setSession(null);
    //   this.emit("onAutoLogout", "access_token expired");
    //   return;
    // }
    // this.emit("onAutoLogin", true);

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit("onAutoLogin", true);
    } else {
      this.setSession(null);
      this.emit("onAutoLogout", "access_token expired");
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post("/api/auth/register", data).then((response) => {
        if (response.data.user) {
          this.setSession(response.data.access_token);
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      const myHeaders = new Headers();

      const formdata = new FormData();
      formdata.append("username", "Balaji");
      formdata.append("password", "123456");
      formdata.append("COMInstanceId", "1");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      // fetch("http://3.83.194.88/user/login", requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.log("error", error));

      // // console.log(email, password);
      // // return dispatch(loginSuccess());

      // this.setSession("fsfdfdfsddfdfs");

      // resolve({ user: userDat, access_token: "sdsdsd.sdsd.sdsd" });

      // axios
      //   .get('/api/auth', {
      //     data: {
      //       email,
      //       password,
      //     },
      //   })
      //   .then((response) => {
      //     if (response.data.user) {
      //       this.setSession(response.data.access_token);
      //       resolve(response.data.user);
      //     } else {
      //       reject(response.data.error);
      //     }
      //   });
    });
  };

  signInWithEmailAndPasswordSuperbase = (email, password) => {
    return new Promise((resolve, reject) => {
      supabase.auth
        .signIn({
          email,
          password,
        })
        .then((response) => {
          // this.setSession(session);

          console.log(response);

          if (response.error) {
            this.emit(response.error.message);
            this.setSession(null);
            reject(new Error("Failed to login ."));
          }

          if (response.data) {
            this.emit("Login success");

            const user = _.merge({}, response.data, {
              uid: response.data.user.id,
              from: "custom-db",
              role: "admin",
              data: {
                displayName: response.data.user.email,
                photoURL: "assets/images/avatars/Abbott.jpg",
                email: response.data.user.email,
              },
            });

            console.log(user, "user");

            this.setSession(response.data.access_token);
            // resolve(response.data);
            resolve({ user });
          }

          // resolve({ user, access_token: "sdsdsd.sdsd.sdsd" });
          // if (response.data.user) {
          //   this.setSession(response.data.access_token);
          //   resolve(response.data.user);
          // } else {
          //   this.logout();
          //   reject(new Error("Failed to login with token."));
          // }
        })
        .catch((error) => {
          this.logout();
          reject(new Error("Failed to login with token."));
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      const accessToken = this.getAccessToken();

      supabase.auth.api
        .getUser(accessToken)
        .then((response) => {
          console.log(response, "response");


          if (response.data) {
            this.emit("Login success");

            const user = _.merge({}, response.data, {
              uid: response.data.id,
              from: "custom-db",
              role: "admin",
              user:response.user,
              data: {
                displayName: response.data.email,
                photoURL: "assets/images/avatars/Abbott.jpg",
                email: response.data.email,
              },
            });

            const da=user.user;
            console.log(user, "user");
            console.log(da, "da");

            resolve({ user });
          }
        })
        .catch((error) => {
          console.log(error);
          this.logout();
        });

      // console.log(accessToken, "accessToken");
      // if (accessToken) {
      //   this.setSession(accessToken);
      //   resolve(userDat);
      // } else {
      //   this.logout();
      // }

      // axios
      //   .get("/api/auth/access-token", {
      //     data: {
      //       access_token: this.getAccessToken(),
      //     },
      //   })
      //   .then((response) => {
      //     if (response.data.user) {
      //       this.setSession(response.data.access_token);
      //       resolve(response.data.user);
      //     } else {
      //       this.logout();
      //       reject(new Error("Failed to login with token."));
      //     }
      //   })
      //   .catch((error) => {
      //     this.logout();
      //     reject(new Error("Failed to login with token."));
      //   });
    });
  };

  updateUserData = (userData) => {
    return axios.post("/api/auth/user/update", {
      user: userData,
    });
  };

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem("jwt_access_token", access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem("jwt_access_token");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
    // this.context.router.transitionTo("/login");
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn("access token expired");
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem("jwt_access_token");
  };
}

const instance = new JwtService();

export default instance;
