import { ScoringEvents } from "./scoring-events.interface";

export interface GameModeInstagib {
    won: number;
    lost: number;
    tie: number;
    lifeTime: number;
    timePlayed: number;
    kills: number;
    deaths: number;
    powerPickups: number;
    megaHealthPickups: number;
    heavyArmorPickups: number;
    tacticalPickups: number;
    score: number;
    captured: number;
    defended: number;
    scoringEvents: ScoringEvents;
    healed: number;
    smallArmorPickups: number;
    rankedWon: number;
    rankedLost: number;
    rankedTied: number;
    rankedTimePlayed: number;
}
