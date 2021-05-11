import { ScoringEvent } from "./scoring-event.interface";

export interface GameMode {
  won:               number;
  lost:              number;
  tie:               number;
  lifeTime:          number;
  timePlayed:        number;
  kills:             number;
  deaths:            number;
  powerPickups:      number;
  megaHealthPickups: number;
  heavyArmorPickups: number;
  tacticalPickups:   number;
  score:             number;
  captured:          number;
  defended:          number;
  scoringEvents:     ScoringEvent;
  healed:            number;
  smallArmorPickups: number;
  rankedWon:         number;
  rankedLost:        number;
  rankedTied:        number;
  rankedTimePlayed:  number;
}
