import { IBaseResponse } from "./base";

export interface INames {
    en: string | null;
    cn: string | null;
    jp: string | null;
    kr: string | null;
}

export interface ISkin {
    title: string | null;
    image: string | null;
}

export interface IStars {
    value: string | null;
    count: number;
}

export interface IStatsItem {
    name: string | null;
    image: string | null;
    value: string | null;
}

export interface IStats {
    base?: IStatsItem[];
    100?: IStatsItem[];
    120?: IStatsItem[];
}

export interface IMiscellaneousInfo {
    link: string;
    name: string;
}

export interface IMiscellaneous {
    artist: IMiscellaneousInfo | null;
    web: IMiscellaneousInfo | null;
    pixiv: IMiscellaneousInfo | null;
    twitter: IMiscellaneousInfo | null;
    voiceActress: IMiscellaneousInfo | null;
}

export interface IShip {
    wikiUrl: string;
    id: string | null;
    names: INames;
    thumbnail: string;
    skins: ISkin[];
    buildTime: string | null;
    rarity: string | null;
    stars: IStars;
    class: string | null;
    nationality: string | null;
    nationalityShort: string | null;
    hullType: string | null;
    stats: IStats;
    miscellaneous: IMiscellaneous;
}

export interface IShipResponse extends IBaseResponse {
    ship: IShip;
}
