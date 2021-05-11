import { IGamesSummaryWeaponAccuracy } from "../../types/quake-api/games-summary-weapon.accuracy.interface";

export class WeaponsAccuracy implements IGamesSummaryWeaponAccuracy {
    GAUNTLET: number = 0;
    LAGBOLT: number = 0;
    LIGHTNING_GUN: number = 0;
    MACHINEGUN: number = 0;
    MACHINEGUN_GRADE1: number = 0;
    NAILGUN: number = 0;
    NAILGUN_GRADE1: number = 0;
    RAILGUN: number = 0;
    ROCKET_LAUNCHER: number = 0;
    SHOTGUN: number = 0;
    SHOTGUN_GRADE1: number = 0;

    constructor(accuracy?: IGamesSummaryWeaponAccuracy) {
        if (accuracy) {
            ({
                GAUNTLET: this.GAUNTLET,
                LAGBOLT: this.LAGBOLT,
                LIGHTNING_GUN: this.LIGHTNING_GUN,
                MACHINEGUN: this.MACHINEGUN,
                MACHINEGUN_GRADE1: this.MACHINEGUN_GRADE1,
                NAILGUN: this.NAILGUN,
                NAILGUN_GRADE1: this.NAILGUN_GRADE1,
                RAILGUN: this.RAILGUN,
                ROCKET_LAUNCHER: this.ROCKET_LAUNCHER,
                SHOTGUN: this.SHOTGUN,
                SHOTGUN_GRADE1: this.SHOTGUN_GRADE1
            } = accuracy);
        }
    }
}
