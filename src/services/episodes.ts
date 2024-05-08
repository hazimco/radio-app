import axios from "axios";
import { BASE_API_URL } from "../utils/config";

const baseUrl = `${BASE_API_URL}/episodes/index?format=json`;

const getEpisodes = async (programId) => {
  const response = await axios.get(`${baseUrl}&programid=${programId}`);
  return response.data;
};

export default {
  getEpisodes,
};
