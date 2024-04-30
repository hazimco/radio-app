import axios from "axios";
import { BASE_API_URL } from "../utils/config";

const baseUrl = `${BASE_API_URL}/programs/index?format=json&filter=program.haspod&filtervalue=true`;

const getPrograms = async (channelId) => {
  const response = await axios.get(`${baseUrl}&channelid=${channelId}`);
  return response.data;
};

export default { getPrograms };
