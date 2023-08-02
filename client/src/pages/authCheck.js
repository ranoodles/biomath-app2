import axios from "axios";
const checkLoginStatus = async () => {
  try {
    const res = await axios.get("http://localhost:8800/check-login-status");
    console.log(res.data);
    return res.data.loggedIn;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default checkLoginStatus;
