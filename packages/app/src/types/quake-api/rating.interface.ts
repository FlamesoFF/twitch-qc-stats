import { HistoryItem } from "./history-item.interface";

export interface Rating {
    rating: number;
    deviation: number;
    volitility: number;
    lastUpdated: number;
    gamesCount: number;
    lastChange: number;
    history: HistoryItem[];
}
