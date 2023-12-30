import axios from "axios";
import { toast } from "react-hot-toast";

export const api_url = import.meta.env.VITE_APP_API_URL;

//login api
export const loginApi = async (path, data) => {
  try{
    const res = await axios.post(api_url + path,data)
    return res
  } catch (err){
    toast.error(err.response.data.error, {duration: 1500})
    // setShowLoading(false)
  }
}

