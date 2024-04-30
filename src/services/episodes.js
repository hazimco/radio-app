import axios from "axios";
const baseUrl = "https://api.sr.se/api/v2/episodes/index?format=json";

const getEpisodes = async (programId) => {
  const response = await axios.get(`${baseUrl}&programid=${programId}`);
  return response.data;
};

export default {
  getEpisodes,
};
