import axios, { AxiosPromise } from "axios";
import { NQuakeAPI } from "./api.types";

export abstract class API {
  static baseUrl = "https://stats.quake.com/api/v2";

  static async getLeaders() {
    const url = `${API.baseUrl}/Leaderboard?from=0&board=duel&season=current`;

    return axios.get<NQuakeAPI.ILeaderboard>(url);
  }

  static async getUserInfo(name: string) {
    const url = `${API.baseUrl}/Player/Stats?name=${name}`;

    return axios.get<NQuakeAPI.IPlayerStats>(url);
  }
}
