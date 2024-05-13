import axios from "axios";
import { BASE_API_URL } from "../utils/config";
import { ChannelResponse } from "../types/global";

const baseUrl = `${BASE_API_URL}/channels/132?format=json`;

const get = async () => {
  const response = await axios.get<ChannelResponse>(baseUrl);
  return response.data;
};

export default { get };
