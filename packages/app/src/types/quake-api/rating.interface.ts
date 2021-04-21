import { HistoryItem } from "./history-item.interface";

export interface IRating {
    rating: number;
    deviation: number;
    volitility: number;
    lastUpdated: number;
    gamesCount: number;
    lastChange: number;
    history: HistoryItem[];
}
