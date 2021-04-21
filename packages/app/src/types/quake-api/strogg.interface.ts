import { DamageStatusList } from "./damage-status-list.interface";
import { GameModes } from "./game.modes.interface";

export interface Strogg {
    gameModes: GameModes;
    damageStatusList: DamageStatusList;
    medals: null;
}
