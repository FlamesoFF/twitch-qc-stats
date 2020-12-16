export const RANKS = [
    "Bronze_01.png",
    "Bronze_02.png",
    "Bronze_03.png",
    "Bronze_04.png",
    "Bronze_05.png",
    "Silver_01.png",
    "Silver_02.png",
    "Silver_03.png",
    "Silver_04.png",
    "Silver_05.png",
    "Gold_01.png",
    "Gold_02.png",
    "Gold_03.png",
    "Gold_04.png",
    "Gold_05.png",
    "Diamond_01.png",
    "Diamond_02.png",
    "Diamond_03.png",
    "Diamond_04.png",
    "Diamond_05.png",
    "Elite_01.png"
];


// const ranges = [0, 775, 850, 925, 1000,];

export const getRankIcon = (rating: number): string => {
    const min = 700;
    const max = 2200;
    const step = 75;

    const rank = Math.round( ((rating - min) - ((rating - min) % step)) / step );

    if (rank <= 21) {
        return RANKS[rank];
    } else {
        return RANKS[RANKS.length - 1];
    }
};


export const setDefaultAvatar = ($event: any) => {
    $event.target.src = "./assets/images/profile_icon_01.png";
}

export const setDefaultPlate = ($event: any) => {
    $event.target.src =
        "./assets/images/nameplate_default.png";
}

