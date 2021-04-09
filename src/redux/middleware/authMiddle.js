import { authActionType } from "../constant/authActionType";
import hitApi from "../../axios/axiosApi";

const SignUp = (action, payload) => async (dispatch, getstate) => {
  let { name, email, phone, password } = payload.user;

  let headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  };

  let Request = { name, email, phone, password };

  await hitApi({
    method: "POST",
    url: `${process.env.REACT_APP_BASE_URL}/user/register`,
    body: Request,
    headers: headers,
  })
    .then((data) => {
      // console.log(data.data, "he");
      let newpayload = {
        name,
        email,
        phone,
        password,
        Response: data.data.msg,
        success: data.data.success,
      };
      dispatch({
        type: authActionType.SIGNUP,
        payload: { ...newpayload },
      });
    })
    .catch((e) => {
      console.log(e);
      return e;
    });

  // await axios
  //   .post(
  //     `${process.env.REACT_APP_BASE_URL}/user/register`,
  //     Request,
  //     axiosConfig
  //   )
  //   .then((data) => {
  //     console.log(data.data);
  // let newpayload = {
  //   name,
  //   email,
  //   phone,
  //   password,
  //   Response: data.data.msg,
  //   success: data.data.success,
  // };
  // dispatch({
  //   type: authActionType.SIGNUP,
  //   payload: { ...newpayload },
  // });
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //     return e;
  //   });
};

const SignUpOtp = (action, payload) => async (dispatch, getstate) => {
  let { name, email, phone, password, Otp } = payload.user;

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  };

  let Request = { name, email, phone, password, otpResponse: Otp };

  await hitApi({
    method: "POST",
    url: `${process.env.REACT_APP_BASE_URL}/user/verifyRegister`,
    body: Request,
    headers: headers,
  })
    .then((data) => {
      console.log(data.data);
      let newpayload = {
        name,
        email,
        phone,
        password,
        Otp,
        response: data.data.msg,
        success: data.data.success,
      };
      dispatch({
        type: authActionType.SIGNUPOTP,
        payload: { ...newpayload },
      });
    })
    .catch((e) => {
      console.log(e);
      return e;
    });

  // await axios
  //   .post(
  //     `${process.env.REACT_APP_BASE_URL}/user/verifyRegister`,
  //     Request,
  //     axiosConfig
  //   )
  //   .then((data) => {
  //     console.log(data.data);
  // let newpayload = {
  //   name,
  //   email,
  //   phone,
  //   password,
  //   Otp,
  //   response: data.data.msg,
  //   success: data.data.success,
  // };
  // dispatch({
  //   type: authActionType.SIGNUPOTP,
  //   payload: { ...newpayload },
  // });
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //     return e;
  //   });
};

const SignIn = (action, payload) => async (dispatch, getstate) => {
  let { email, password } = payload.user;

  let headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  };

  let Request = { email, password };

  await hitApi({
    method: "POST",
    url: `${process.env.REACT_APP_BASE_URL}/user/login`,
    body: Request,
    headers: headers,
  }).then((data) => {
    console.log(data.data);
    if (data.data.success) {
      let newpayload = {
        data: data.data,
        success: data.data.success,
        token: data.data.token,
      };
      dispatch({
        type: authActionType.SIGNIN,
        payload: { ...newpayload },
      });
    } else {
      let newpayload = {
        success: data.data.success,
        response: data.data.msg,
      };
      dispatch({
        type: authActionType.SIGNIN,
        payload: { ...newpayload },
      });
    }
  });

  // await axios
  //   .post(`${process.env.REACT_APP_BASE_URL}/user/login`, Request, axiosConfig)
  //   .then((data) => {
  //     console.log(data.data);

  // if (data.data.success) {
  //   let newpayload = {
  //     data: data.data,
  //     success: data.data.success,
  //   };
  //   dispatch({
  //     type: authActionType.SIGNIN,
  //     payload: { ...newpayload },
  //   });
  // } else {
  //   let newpayload = {
  //     success: data.data.success,
  //     response: data.data.msg,
  //   };
  //   dispatch({
  //     type: authActionType.SIGNIN,
  //     payload: { ...newpayload },
  //   });
  // }
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //     return e;
  //   });
};

const GetUser = (action, payload) => async (dispatch, getstate) => {
  // console.log(payload.token);

  // let url = `${process.env.REACT_APP_BASE_URL}/user`;
  // fetch(url, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + payload.token,
  //   },
  // })
  //   .then((response) => {
  //     console.log(response.json());
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //     return e;
  //   });

  await hitApi({
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/user`,
    headers: {
      authorization: `Bearer ${payload.token}`,
    },
  })
    .then((data) => {
      console.log(data.data);

      let newpayload = {
        success: data.data.success,
        user: data.data.user,
      };

      dispatch({
        type: authActionType.GETUSER,
        payload: { ...newpayload },
      });
    })
    .catch((e) => {
      console.log(e);
    });

  // axios
  //   .get(`${process.env.REACT_APP_BASE_URL}/user`, {
  //     headers: {
  //       authorization: `Bearer ${payload.token}`,
  //     },
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //     return e;
  //   });
};

export { SignUp, SignUpOtp, SignIn, GetUser };
