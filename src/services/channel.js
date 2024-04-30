import axios from "axios";
import { BASE_API_URL } from "../utils/config";

const baseUrl = `${BASE_API_URL}/channels/132?format=json`;

const get = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { get };
