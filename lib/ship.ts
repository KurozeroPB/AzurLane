import { IBaseResponse } from "./base";

export interface INames {
    full: string | null;
    en: string | null;
    cn: string | null;
    jp: string | null;
}

export interface ISkins {
    title: string | null;
    image: string | null;
}

export interface IStars {
    value: string | null;
    count: number;
}

export interface IShip {
    id: string | null;
    names: INames;
    thumbnail: string;
    skins: ISkins;
    buildTime: string | null;
    rarity: string | null;
    stars: IStars;
    class: string | null;
    nationality: string | null;
    hullType: string | null;
}

export interface IShipResponse extends IBaseResponse {
    ship: IShip;
}
