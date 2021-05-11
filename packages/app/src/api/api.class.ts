import axios from "axios";
import { TermSearchResult } from "../types/api/term-search-result.interface";
import { GamesSummary } from "../types/quake-api/games.summary.interface";
import { Leaderboard } from "../types/quake-api/leaderboard.interface";
import { PlayerStats } from "../types/quake-api/player-stats.interface";
import { OFFICIAL_STATS_URL } from "../constants";

export const statsApi = new class {
  private baseUrl = `${OFFICIAL_STATS_URL}/api/v2`;

  async getLeaders(from = 0): Promise<Leaderboard> {
    const url = `${this.baseUrl}/Leaderboard`;

    return await axios.get(url, {
      params: {
        board: 'duel',
        from,
        season: 'current'
      }
    }).then(response => response.data);
  }

  async searchTerm(name: string): Promise<TermSearchResult> {
    const url = `${this.baseUrl}/Player/Search`;

    return await axios.get(url, {
      params: {
        term: encodeURIComponent(name)
      }
    }).then(response => response.data);
  }

  async getPlayerStats(name: string): Promise<PlayerStats> {
    const url = `${this.baseUrl}/Player/Stats`;

    return await axios.get(url, {
      params: { name: encodeURIComponent(name) }
    }).then(response => response.data);
  }

  async getGamesSummary(name: string): Promise<GamesSummary> {
    const url = `${this.baseUrl}/Player/GamesSummary`;

    return await axios.get(url, {
      params: { name }
    }).then(response => response.data);
  }
}();
