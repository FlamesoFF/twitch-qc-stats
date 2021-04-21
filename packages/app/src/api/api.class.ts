import axios from "axios";
import { TermSearchResult } from "../types/api/term-search-result.interface";
import { IGamesSummary } from "../types/quake-api/i-games.summary.interface";
import { ILeaderboard } from "../types/quake-api/leaderboard.interface";
import { IPlayerStats } from "../types/quake-api/player-stats.interface";

export const statsApi = new class {
  private baseUrl = "https://stats.quake.com/api/v2";

  async getLeaders(from = 0): Promise<ILeaderboard> {
    const url = `${this.baseUrl}/Leaderboard`;

    return await axios.get(url, {
      params: {
        from,
        board: 'duel',
        season: 'current'
      }
    });
  }

  async searchTerm(name: string): Promise<TermSearchResult> {
    const url = `${this.baseUrl}/Player/Search`;

    return await axios.get(url, {
      params: {
        term: encodeURIComponent(name)
      }
    });
  }

  async getPlayerStats(name: string): Promise<IPlayerStats> {
    const url = `${this.baseUrl}/Player/Stats`;

    return await axios.get(url, {
      params: { name: encodeURIComponent(name) }
    });
  }

  async getGamesSummary(name: string): Promise<IGamesSummary> {
    const url = `${this.baseUrl}/Player/GamesSummary`;

    return await axios.get(url, {
      params: { name }
    });
  }
}();
