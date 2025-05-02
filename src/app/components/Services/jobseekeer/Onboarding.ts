import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.gulfaarjobs.com";

// interface OnboardingFormData {

//     username: string; 
//     email: string;
//     phone: string;
//     location: string;
//     skills: string[]; 
//     experience: number; 
//   }

export const updateUserService  = async (userId:string,data:any) => {

    try {
        const response = await axios.post(
            `${API_BASE_URL}/user/update/${userId}`, 
            { data}, 
            {
                withCredentials: true, 
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
        
    } catch (error: any) {
        console.error("Onboarding error:", error.response?.data || error.message);
        return { success: false, message: error.response?.data?.message || "Something went wrong" };
        
    }



}



