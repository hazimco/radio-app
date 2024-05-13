import axios from "axios";
import { BASE_API_URL } from "../utils/config";
import { EpisodesResponse } from "../types/global";

const baseUrl = `${BASE_API_URL}/episodes/index?format=json`;

const getEpisodes = async (programId: string) => {
  const response = await axios.get<EpisodesResponse>(
    `${baseUrl}&programid=${programId}`
  );
  return response.data;
};

export default {
  getEpisodes,
};
