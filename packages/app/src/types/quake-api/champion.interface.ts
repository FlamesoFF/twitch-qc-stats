import { GameModes } from "./game-modes.interface";
import { DamageStatuses } from "./damage-statuses.interface";

export interface Champion {
  gameModes: GameModes;
  damageStatusList: DamageStatuses;
  medals: null;
}
