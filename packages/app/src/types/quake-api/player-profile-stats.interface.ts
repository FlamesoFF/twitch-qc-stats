import { Champion } from "./champion.interface";

export interface PlayerProfileStats {
    champions: { [key: string]: Champion };
}
