import { GameModeCtf } from "./game-mode-ctf.interface";
import { GameModeDuelPro } from "./game-mode-duel-pro.interface";
import { GameModeFFA } from "./game-mode-ffa.interface";
import { GameModeInstagib } from "./game-mode-instagib.interface";
import { GameModeObeliskPro } from "./game-mode-obelisk-pro.interface";
import { GameModeObelisk } from "./game-mode-obelisk.interface";
import { GameModeSlipgate } from "./game-mode-slipgate.interface";
import { GameModeTeamDeathmatch } from "./game-mode-tdm.interface";
import { GameModeTeamDeathmatch2vs2 } from "./game-mode-team-deathmatch-2vs2.interface";
import { GameModeDuel } from "./game-mode.duel.interface";

export interface GameModes {
    GameModeFFA: GameModeFFA;
    GameModeTeamDeathmatch: GameModeTeamDeathmatch;
    GameModeDuel: GameModeDuel;
    GameModeObelisk: GameModeObelisk;
    GameModeObeliskPro: GameModeObeliskPro;
    GameModeTeamDeathmatch2vs2: GameModeTeamDeathmatch2vs2;
    GameModeInstagib: GameModeInstagib;
    GameModeDuelPro: GameModeDuelPro;
    GameModeSlipgate: GameModeSlipgate;
    GameModeCtf: GameModeCtf;
}
