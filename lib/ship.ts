import { BaseResponse } from "./base";

export interface Names {
    full: string | null;
    en: string | null;
    cn: string | null;
    jp: string | null;
}

export interface Skins {
    title: string | null;
    image: string | null;
}

export interface Stars {
    value: string | null;
    count: number;
}

export interface Ship {
    id: string | null;
    names: Names;
    thumbnail: string;
    skins: Skins;
    buildTime: string | null;
    rarity: string | null;
    stars: Stars;
    class: string | null;
    nationality: string | null;
    hullType: string | null;
}

export interface ShipResponse extends BaseResponse {
    ship: Ship;
}