import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.gulfaarjobs.com";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }

export const ContactUser = async (formData:ContactFormData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/contactus`, 
      { formData}, 
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
