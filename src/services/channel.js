import axios from "axios";
const baseUrl = "https://api.sr.se/api/v2/channels/132?format=json";

const get = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { get };
