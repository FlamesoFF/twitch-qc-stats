import { DamageStatusList } from "./damage-status-list.interface";
import { GameModes } from "./game.modes.interface";

export interface Clutch {
    gameModes: GameModes;
    damageStatusList: DamageStatusList;
    medals: null;
}
