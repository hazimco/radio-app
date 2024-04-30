import axios from "axios";
const baseUrl =
  "https://api.sr.se/api/v2/programs/index?format=json&filter=program.haspod&filtervalue=true";

const getPrograms = async (channelId) => {
  const response = await axios.get(`${baseUrl}&channelid=${channelId}`);
  return response.data;
};

export default { getPrograms };
