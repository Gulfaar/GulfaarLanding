import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.gulfaarjobs.com";


export const registerEmployeer = async (username:string, email: string, phone:number, company:string, industry:string, address:string, password: string , confirmPassword: string ) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/employeer/signup`, 
      { username, email,phone, company, address,industry, password, confirmPassword }, 
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