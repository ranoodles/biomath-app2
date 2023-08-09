// Create a separate file authCheck.js or any other appropriate filename
// Import the necessary dependencies
import axios from "axios";

// Function to check if the user is authenticated (logged in)
const checkAuth = async () => {
  try {
    const response = await axios.get("http://localhost:8800/checkLoggedIn");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default checkAuth;
