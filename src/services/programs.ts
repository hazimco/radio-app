import axios from "axios";
import { BASE_API_URL } from "../utils/config";
import { ProgramsResponse } from "../types/global";

const baseUrl = `${BASE_API_URL}/programs/index?format=json&filter=program.haspod&filtervalue=true`;

const getPrograms = async (channelId: string) => {
  const response = await axios.get<ProgramsResponse>(
    `${baseUrl}&channelid=${channelId}`
  );
  return response.data;
};

export default { getPrograms };
