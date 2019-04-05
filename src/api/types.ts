export namespace NQuakeAPI {
    export interface ILeaderboard {
        boardType: string;
        entries: ILeaderboardItem[];
        totalEntries: number;
    }

    export interface ILeaderboardItem {
        userName: string;
        eloRating: number;
        profileIconId: string;
        namePlateId: string;
    }

    export interface IPlayerStats {
        name: string;
        playerRatings: IPlayerRatings;
        playerLoadOut: IPlayerLoadOut;
        playerProfileStats: IPlayerProfileStats;
        playerLevelState: IPlayerLevelState;
        matches: IMatchesItem[];
    }
    export interface IPlayerRatings {
        duel: Duel;
        tdm: Tdm;
    }
    export interface Duel {
        rating: number;
        deviation: number;
        volitility: number;
        lastUpdated: number;
        gamesCount: number;
        lastChange: number;
        history: HistoryItem[];
    }
    export interface HistoryItem {
        gamesPlayed: number;
        eloRating: number;
        time: string;
        result: number;
        sessionId: string;
    }
    export interface Tdm {
        rating: number;
        deviation: number;
        volitility: number;
        lastUpdated: number;
        gamesCount: number;
        lastChange: number;
        history: HistoryItem[];
    }
    export interface IPlayerLoadOut {
        namePlateId: string;
        iconId: string;
    }
    export interface IPlayerProfileStats {
        champions: Champions;
    }
    export interface Champions {
        RANGER: RANGER;
        SCALEBEARER: SCALEBEARER;
        VISOR: VISOR;
        ANARKI: ANARKI;
        NYX: NYX;
        SORLAG: SORLAG;
        CLUTCH: CLUTCH;
        GALENA: GALENA;
        SLASH: SLASH;
        DOOM_SLAYER: DOOM_SLAYER;
        BJ_BLAZKOWICZ: BJ_BLAZKOWICZ;
        KEEL: KEEL;
        STROGG: STROGG;
        DEATH_KNIGHT: DEATH_KNIGHT;
        ATHENA: ATHENA;
        EISEN: EISEN;
    }
    export interface RANGER {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
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
    export interface GameModeFFA {
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
    export interface ScoringEvents {
        SCORING_EVENT_KILL: number;
        SCORING_EVENT_ASSIST: number;
        SCORING_EVENT_HEADSHOT: number;
        SCORING_EVENT_MIDAIRKILL: number;
        SCORING_EVENT_IMPRESSIVE: number;
        SCORING_EVENT_DIEHARD: number;
        SCORING_EVENT_FIRSTBLOOD: number;
        SCORING_EVENT_ABILITYKILL: number;
        SCORING_EVENT_EXCELENT: number;
        SCORING_EVENT_TRIPLEKILL: number;
        SCORING_EVENT_OVERKILL: number;
        SCORING_EVENT_EXTIRPATOR: number;
        SCORING_EVENT_CRUSHER: number;
        SCORING_EVENT_EXTERMINATOR: number;
        SCORING_EVENT_DESTROYER: number;
        SCORING_EVENT_REAPER: number;
        SCORING_EVENT_GOD_OF_DEATH: number;
        SCORING_EVENT_HITMAN: number;
        SCORING_EVENT_GAUNTLET: number;
        SCORING_EVENT_COMBO_KILL: number;
        SCORING_EVENT_RING_OUT: number;
        SCORING_EVENT_PERFORATION: number;
        SCORING_EVENT_SERIAL_KILLER_1: number;
        SCORING_EVENT_SERIAL_KILLER_2: number;
        SCORING_EVENT_SERIAL_KILLER_3: number;
        SCORING_EVENT_SERIAL_KILLER_4: number;
        SCORING_EVENT_SERIAL_KILLER_5: number;
        SCORING_EVENT_SERIAL_KILLER_6: number;
        SCORING_EVENT_SERIAL_KILLER_7: number;
        SCORING_EVENT_SERIAL_KILLER_8: number;
        SCORING_EVENT_SERIAL_KILLER_9: number;
        SCORING_EVENT_SERIAL_KILLER_10: number;
        SCORING_EVENT_LAST_SHOT: number;
        SCORING_EVENT_ASSISTANT: number;
        SCORING_EVENT_STOP: number;
        SCORING_EVENT_GUARDIAN: number;
        SCORING_EVENT_SNIPER: number;
        SCORING_EVENT_REVENGE: number;
        SCORING_EVENT_CLOWN: number;
        SCORING_EVENT_FROM_THE_GRAVE: number;
        SCORING_EVENT_BAD_LUCK: number;
        SCORING_EVENT_COUNTER_ABILITY: number;
        SCORING_EVENT_MELEE_MASTERY: number;
        SCORING_EVENT_MELEE_GOD: number;
        SCORING_EVENT_MACHINEGUN_MASTERY: number;
        SCORING_EVENT_MACHINEGUN_GOD: number;
        SCORING_EVENT_SHOTGUN_MASTERY: number;
        SCORING_EVENT_SHOTGUN_GOD: number;
        SCORING_EVENT_ROCKET_LAUNCHER_MASTERY: number;
        SCORING_EVENT_ROCKET_LAUNCHER_GOD: number;
        SCORING_EVENT_LIGHTNING_GUN_MASTERY: number;
        SCORING_EVENT_LIGHTNING_GUN_GOD: number;
        SCORING_EVENT_RAILGUN_MASTERY: number;
        SCORING_EVENT_RAILGUN_GOD: number;
        SCORING_EVENT_NAILGUN_MASTERY: number;
        SCORING_EVENT_NAILGUN_GOD: number;
        SCORING_EVENT_FIGHTER: number;
        SCORING_EVENT_TERRORIST: number;
        SCORING_EVENT_AVENGER: number;
        SCORING_EVENT_QUAD_KILLER: number;
        SCORING_EVENT_RAGE: number;
        SCORING_EVENT_FLOCK: number;
        SCORING_EVENT_DAMAGE_DEALER: number;
        SCORING_EVENT_TELEFRAG: number;
        SCORING_EVENT_OBELISK_CAPTURE: number;
        SCORING_EVENT_OBELISK_CAPTURE_ASSIST: number;
        SCORING_EVENT_OBELISK_DEFEND: number;
        SCORING_EVENT_POWERUP: number;
        SCORING_EVENT_FFA_PERFECT: number;
        SCORING_EVENT_OBELISK_MASTERY: number;
        SCORING_EVENT_OBELISK_OFFENCE: number;
        SCORING_EVENT_MATCH_WIN: number;
        SCORING_EVENT_MATCH_COMPLETE: number;
        SCORING_EVENT_TEAM_WIN: number;
        SCORING_EVENT_TEAM_TIE: number;
        SCORING_EVENT_1_PLACE: number;
        SCORING_EVENT_2_PLACE: number;
        SCORING_EVENT_3_PLACE: number;
        SCORING_EVENT_MVP: number;
        SCORING_EVENT_DAMAGE: number;
        SCORING_EVENT_ABILITY_HEAL: number;
        SCORING_EVENT_BLOCKING: number;
        SCORING_EVENT_PICKUP_MAJOR: number;
        SCORING_EVENT_PICKUP_WEAPON: number;
        SCORING_EVENT_TOTEM_DESTROY: number;
        SCORING_EVENT_ABILITY_USE_RANGER: number;
        SCORING_EVENT_FIRST_GAME: number;
        SCORING_EVENT_FIRST_WIN: number;
        SCORING_EVENT_ABILITY_USE_VISOR: number;
        SCORING_EVENT_ABILITY_USE_SCALEBEARER: number;
        SCORING_EVENT_ABILITY_USE_NYX: number;
        SCORING_EVENT_ABILITY_USE_GALENA: number;
        SCORING_EVENT_ABILITY_USE_ANARKI: number;
        SCORING_EVENT_ABILITY_USE_CLUTCH: number;
        SCORING_EVENT_ABILITY_USE_SLASH: number;
        SCORING_EVENT_ABILITY_USE_SORLAG: number;
        SCORING_EVENT_ABILITY_USE_KEEL: number;
        SCORING_EVENT_ABILITY_USE_STROGG: number;
        SCORING_EVENT_ABILITY_USE_DOOM: number;
        SCORING_EVENT_ABILITY_USE_BJ: number;
        SCORING_EVENT_HELPING_HAND: number;
        SCORING_EVENT_QUATERBACK: number;
        SCORING_EVENT_DEFENDER: number;
        SCORING_EVENT_SURVIVOR: number;
        SCORING_EVENT_SCAVENGER: number;
        SCORING_EVENT_MOST_DAMAGE: number;
        SCORING_EVENT_MOST_ACCURATE: number;
        SCORING_EVENT_PARTY_BREAKER: number;
        SCORING_EVENT_DENIED: number;
        SCORING_EVENT_POWERUP_MASSACRE: number;
        SCORING_EVENT_POINT_BLANK: number;
        SCORING_EVENT_NET_MASTER: number;
        SCORING_EVENT_TANK: number;
        SCORING_EVENT_SHOWSTOPPER: number;
        SCORING_EVENT_OT: number;
        SCORING_EVENT_COMEBACK: number;
        SCORING_EVENT_PRECISE: number;
        SCORING_EVENT_COLLATERAL_DAMAGE: number;
        SCORING_EVENT_DP: number;
        SCORING_EVENT_STOPWATCH: number;
        SCORING_EVENT_NEMESIS: number;
        SCORING_EVENT_AIRBORNE: number;
        SCORING_EVENT_BRING_EM_DOWN: number;
        SCORING_EVENT_DOMINATING: number;
        SCORING_EVENT_PROVACATEUR: number;
        SCORING_EVENT_KAMIKAZE: number;
        SCORING_EVENT_DISINTEGRATOR: number;
        SCORING_EVENT_SHUB_SLAYER: number;
        SCORING_EVENT_DEADLY_SLIPGATE: number;
        SCORING_EVENT_SHOOTING_RANGE: number;
        SCORING_EVENT_CONTROLLER: number;
        SCORING_EVENT_SEER: number;
        SCORING_EVENT_STOMPER: number;
        SCORING_EVENT_CHOOCHOO: number;
        SCORING_EVENT_ROADKILL: number;
        SCORING_EVENT_EVASIVE: number;
        SCORING_EVENT_INSIDEOUT: number;
        SCORING_EVENT_FROM_THE_SHADOW: number;
        SCORING_EVENT_HOVERTANK: number;
        SCORING_EVENT_REANIMATION: number;
        SCORING_EVENT_JUNKIE: number;
        SCORING_EVENT_PLAGUE: number;
        SCORING_EVENT_MELTDOWN: number;
        SCORING_EVENT_VENOMOUS: number;
        SCORING_EVENT_THEROCK: number;
        SCORING_EVENT_THEDRILL: number;
        SCORING_EVENT_THESHOCKER: number;
        SCORING_EVENT_DAMNED: number;
        SCORING_EVENT_BLESSED: number;
        SCORING_EVENT_CURSED: number;
        SCORING_EVENT_NAZI_SLAYER: number;
        SCORING_EVENT_MEIN_LEBEN: number;
        SCORING_EVENT_GET_PSYCHED: number;
        SCORING_EVENT_SLIDER: number;
        SCORING_EVENT_SLALOM: number;
        SCORING_EVENT_BLACK_SWAN: number;
        SCORING_EVENT_BERSERKER: number;
        SCORING_EVENT_DAISY: number;
        SCORING_EVENT_SLAYER: number;
        SCORING_EVENT_TRIBOLT_GOD: number;
        SCORING_EVENT_PINEAPPLE: number;
        SCORING_EVENT_NADE_SPAM: number;
        SCORING_EVENT_MORTAR: number;
        SCORING_EVENT_BOMBARDMENT: number;
        SCORING_EVENT_PSI_RADAR: number;
        SCORING_EVENT_AIR_ASSAULT: number;
        SPECIAL_DAMAGE_DEALER_EVENT: number;
        SPECIAL_HEALER_EVENT: number;
        SPECIAL_DAMAGE_ABSORBED_EVENT: number;
        CHAMPION_MATCH_WIN: number;
        CHAMPION_MATCH_COMPLETE: number;
        ABILLITY_KILLS_GOLD: number;
        ABILLITY_KILLS_SILVER: number;
        ABILLITY_KILLS_BRONZE: number;
        DAMAGE_DEALT_GOLD: number;
        DAMAGE_DEALT_SILVER: number;
        DAMAGE_DEALT_BRONZE: number;
        ASSIST_GOLD: number;
        ASSIST_SILVER: number;
        ASSIST_BRONZE: number;
        MACHINEGUN_KILLS_GOLD: number;
        MACHINEGUN_KILLS_SILVER: number;
        MACHINEGUN_KILLS_BRONZE: number;
        RAILGUN_KILLS_GOLD: number;
        RAILGUN_KILLS_SILVER: number;
        RAILGUN_KILLS_BRONZE: number;
        ROCKET_KILLS_GOLD: number;
        ROCKET_KILLS_SILVER: number;
        ROCKET_KILLS_BRONZE: number;
        NAILGUN_KILLS_GOLD: number;
        NAILGUN_KILLS_SILVER: number;
        NAILGUN_KILLS_BRONZE: number;
        TRIBOLT_KIILS_GOLD: number;
        TRIBOLT_KIILS_SILVER: number;
        TRIBOLT_KIILS_BRONZE: number;
        SHOTGUN_KILLS_GOLD: number;
        SHOTGUN_KILLS_SILVER: number;
        SHOTGUN_KILLS_BRONZE: number;
        LIGHTNING_GUN_KILLS_GOLD: number;
        LIGHTNING_GUN_KILLS_SILVER: number;
        LIGHTNING_GUN_KILLS_BRONZE: number;
        ACCURACY_GOLD: number;
        ACCURACY_SILVER: number;
        ACCURACY_BRONZE: number;
        GAUNTLET_KILLS_GOLD: number;
        GAUNTLET_KILLS_SILVER: number;
        GAUNTLET_KILLS_BRONZE: number;
        KILLS_BASIC: number;
        DAMAGE_DEALT_BASIC: number;
        ASSIST_BASIC: number;
        HEAL_BASIC: number;
        ARMOR_PICKUP_BASIC: number;
        MEGA_PICKUP_BASIC: number;
        POWER_PICKUP_BASIC: number;
        SCORING_EVENT_INFERNO: number;
        SCORING_EVENT_TRIDENT: number;
        SCORING_EVENT_SMELTER: number;
        SCORING_EVENT_ROPE_TRICK: number;
        SCORING_EVENT_SWINGER: number;
        SCORING_EVENT_FLOOR_IS_LAVA: number;
        SCORING_EVENT_PICKUP_MEGA_HEALTH: number;
        SCORING_EVENT_PICKUP_HEAVY_ARMOR: number;
        SCORING_EVENT_ABILITY_USE_ANY: number;
        SCORING_EVENT_HANDYMAN: number;
        SCORING_EVENT_FORTRESS: number;
        SCORING_EVENT_WEAPONS_FACTORY: number;
    }
    export interface GameModeTeamDeathmatch {
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
    export interface GameModeDuel {
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
    export interface GameModeObelisk {
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
    export interface GameModeObeliskPro {
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
    export interface GameModeTeamDeathmatch2vs2 {
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
    export interface GameModeDuelPro {
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
    export interface GameModeSlipgate {
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
    export interface GameModeCtf {
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
    export interface DamageStatusList {
        UNKNOWN_DAMAGE_TYPE: UNKNOWN_DAMAGE_TYPE;
        GAUNTLET: GAUNTLET;
        MACHINEGUN: MACHINEGUN;
        MACHINEGUN_GRADE1: MACHINEGUN_GRADE1;
        SHOTGUN: SHOTGUN;
        SHOTGUN_GRADE1: SHOTGUN_GRADE1;
        NAILGUN: NAILGUN;
        NAILGUN_GRADE1: NAILGUN_GRADE1;
        ROCKET_LAUNCHER: ROCKET_LAUNCHER;
        LIGHTNING_GUN: LIGHTNING_GUN;
        RAILGUN: RAILGUN;
        LAGBOLT: LAGBOLT;
        ACID_DOMAIN: ACID_DOMAIN;
        DAMAGE_DOMAIN: DAMAGE_DOMAIN;
        KILL_DOMAIN: KILL_DOMAIN;
        DIRE_ORB: DIRE_ORB;
        DIRE_ORB_EXPLOSION: DIRE_ORB_EXPLOSION;
        DIRE_ORB_TELEFRAG: DIRE_ORB_TELEFRAG;
        UNHOLY: UNHOLY;
        TELEFRAG: TELEFRAG;
        FALL_DAMAGE: FALL_DAMAGE;
        PLASMA_TRAIL: PLASMA_TRAIL;
        PLASMA_TRAIL_EXPLOSION: PLASMA_TRAIL_EXPLOSION;
        MINING_LASER: MINING_LASER;
        ABILITY_BERSERK: ABILITY_BERSERK;
        SWARM_GRENADE: SWARM_GRENADE;
        SB_DASH: SB_DASH;
        SB_STOMP: SB_STOMP;
        ACID_SPIT_DIRECT: ACID_SPIT_DIRECT;
        VENDETTA_TELEFRAG: VENDETTA_TELEFRAG;
        ACID_DOT: ACID_DOT;
        FLAME_DOT: FLAME_DOT;
        FLAME: FLAME;
        ACID: ACID;
        DRONE_KAMIKAZE_EXPLOSION: DRONE_KAMIKAZE_EXPLOSION;
        RECON_DRONE: RECON_DRONE;
        RECON_DRONE_EXPLOSION: RECON_DRONE_EXPLOSION;
        ATHENA_HIT: ATHENA_HIT;
        FLAME_MELEE: FLAME_MELEE;
        FLAME_DOMAIN: FLAME_DOMAIN;
        TURRET: TURRET;
        PUSH_TO_SUICIDE: PUSH_TO_SUICIDE;
    }
    export interface UNKNOWN_DAMAGE_TYPE {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface GAUNTLET {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface MACHINEGUN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface MACHINEGUN_GRADE1 {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface SHOTGUN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface SHOTGUN_GRADE1 {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface NAILGUN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface NAILGUN_GRADE1 {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface ROCKET_LAUNCHER {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface LIGHTNING_GUN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface RAILGUN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface LAGBOLT {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface ACID_DOMAIN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface DAMAGE_DOMAIN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface KILL_DOMAIN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface DIRE_ORB {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface DIRE_ORB_EXPLOSION {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface DIRE_ORB_TELEFRAG {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface UNHOLY {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface TELEFRAG {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface FALL_DAMAGE {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface PLASMA_TRAIL {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface PLASMA_TRAIL_EXPLOSION {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface MINING_LASER {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface ABILITY_BERSERK {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface SWARM_GRENADE {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface SB_DASH {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface SB_STOMP {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface ACID_SPIT_DIRECT {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface VENDETTA_TELEFRAG {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface ACID_DOT {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface FLAME_DOT {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface FLAME {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface ACID {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface DRONE_KAMIKAZE_EXPLOSION {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface RECON_DRONE {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface RECON_DRONE_EXPLOSION {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface ATHENA_HIT {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface FLAME_MELEE {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface FLAME_DOMAIN {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface TURRET {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface PUSH_TO_SUICIDE {
        hits: number;
        shots: number;
        kills: number;
        headshots: number;
        damage: number;
    }
    export interface SCALEBEARER {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface VISOR {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface ANARKI {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface NYX {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface SORLAG {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface CLUTCH {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface GALENA {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface SLASH {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface DOOM_SLAYER {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface BJ_BLAZKOWICZ {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface KEEL {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface STROGG {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface DEATH_KNIGHT {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface ATHENA {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface EISEN {
        gameModes: GameModes;
        damageStatusList: DamageStatusList;
        medals: null;
    }
    export interface IPlayerLevelState {
        level: number;
        exp: number;
    }
    export interface IMatchesItem {
        id: string;
        playedDateTime: string;
        gameMode: null;
        map: null;
        score: null;
        scoreLimit: number;
        timeLimit: number;
    }
}