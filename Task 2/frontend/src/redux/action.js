import axios from "axios";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};
const getToken = () => {
  return localStorage.getItem("token");
};
export const register = (name, email) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    console.log("before post");
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/register",
      { name, email },
      config
    );
    console.log("After post");
    storeToken(data.token);

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};
