import { BaseResponse } from "./base";

export interface Construction {
    time: string;
    ships: string[];
}

export interface BuildResponse extends BaseResponse {
    construction: Construction;
}