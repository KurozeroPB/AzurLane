import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { version } from "../package.json";
import { IErrorResponse, ApiError } from "./base";
import { IConstruction, IBuildResponse } from "./build";
import { IShip, IShipResponse } from "./ship";


export interface IOptions {
    userAgent?: string;
}

export class AzurLane {
    /** @hidden */
    private _axiosOptions: AxiosRequestConfig;
    protected baseUrl: string = "https://api.kurozeropb.info/v1/azurlane";
    public options: IOptions;

    /**
     *
     * @param {IOptions} options Constructor options
     * @param {string} [options.userAgent] UA to use when making http requests
     */
    public constructor(options?: IOptions) {
        this.options = options ? options : {};
        this.options.userAgent = (options && options.userAgent) ? options.userAgent : `AzurLane/v${version} (https://www.npmjs.com/package/azurlane)`

        this._axiosOptions = {
            headers: {
                "User-Agent": this.options.userAgent
            }
        }
    }

    /**
     * Get information about a ship by name
     *
     * @param {string} name The name of the ship
     * @returns {Promise<IShip>}
     */
    public async ship(name: string): Promise<IShip> {
        let response: AxiosResponse;
        try {
            response = await axios.get(`${this.baseUrl}/ship?name=${name}`, this._axiosOptions);
        } catch (error) {
            if (error.response && error.response.data) {
                const data: IErrorResponse = error.response.data;
                throw new ApiError(data);
            } else {
                throw error;
            }
        }

        const data: IShipResponse = response.data;
        return data.ship;
    }

    /**
     * Get ship names matching the given construction time
     *
     * @param {string} time The construction time
     * @returns {Promise<IConstruction>}
     */
    public async buildInfo(time: string): Promise<IConstruction> {
        let response: AxiosResponse;
        try {
            response = await axios.get(`${this.baseUrl}/build?time=${time}`, this._axiosOptions);
        } catch (error) {
            if (error.response && error.response.data) {
                const data: IErrorResponse = error.response.data;
                throw new ApiError(data);
            } else {
                throw error;
            }
        }

        const data: IBuildResponse = response.data;
        return data.construction;
    }
}

export { IBaseResponse, IErrorResponse, ApiError } from "./base";
export { IConstruction, IBuildResponse } from "./build";
export { INames, ISkins, IStars, IShip, IShipResponse } from "./ship";

// @ts-ignore
export = AzurLane;
