import axios, { AxiosResponse } from "axios";
import { Ship, ShipResponse } from "./lib/ship";
import { Construction, BuildResponse } from "./lib/build";
import { ErrorResponse, ApiError } from "./lib/base";

export interface Options {
    userAgent?: string;
}

export class AzurLane {
    public options: Options;
    protected baseUrl: string = "https://azurlane-api.herokuapp.com/v1";

    constructor(options: Options) {
        this.options = options;
    }

    public async ship(name: string): Promise<Ship> {
        let response: AxiosResponse;
        try {
            response = await axios.get(`${this.baseUrl}/ship?name=${name}`);
        } catch (error) {
            const data: ErrorResponse = error.response.data;
            throw new ApiError(data);
        }

        const data: ShipResponse = response.data;
        return data.ship;
    }

    public async buildInfo(time: string): Promise<Construction> {
        let response: AxiosResponse;
        try {
            response = await axios.get(`${this.baseUrl}/build?time=${time}`);
        } catch (error) {
            const data: ErrorResponse = error.response.data;
            throw new ApiError(data);
        }

        const data: BuildResponse = response.data;
        return data.construction;
    }
}

export { Names, Skins, Stars, Ship, ShipResponse } from "./lib/ship";
export { Construction, BuildResponse } from "./lib/build";
export { BaseResponse, ErrorResponse, ApiError } from "./lib/base";

export default AzurLane;