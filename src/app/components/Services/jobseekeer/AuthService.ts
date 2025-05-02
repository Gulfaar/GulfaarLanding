import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.gulfaarjobs.com";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/login`, 
      { email, password }, 
      {
        withCredentials: true, 
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Login error:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || "Something went wrong" };
  }
};
