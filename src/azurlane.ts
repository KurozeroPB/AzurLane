import axios, { AxiosRequestConfig } from "axios";
import { ApiError } from "./interfaces/base";
import { IConstruction, IBuildResponse } from "./interfaces/build";
import { IShip, IShipResponse } from "./interfaces/ship";
import { IBaseShip, IShipsResponse } from "./interfaces/ships";

export interface IOptions {
    userAgent?: string;
}

export class AzurLane {
    /** @hidden */
    private _axiosOptions: AxiosRequestConfig;
    protected baseUrl = "https://azurlane-api.appspot.com/v1";
    public options: IOptions;

    /**
     *
     * @param {IOptions} options Constructor options
     * @param {string} [options.userAgent] UA to use when making http requests
     */
    public constructor(options?: IOptions) {
        this.options = options ? options : {};
        this.options.userAgent = (options && options.userAgent) ? options.userAgent : `AzurLane/v1.0.0 (https://www.npmjs.com/package/azurlane)`;

        this._axiosOptions = {
            headers: {
                "User-Agent": this.options.userAgent
            }
        };
    }

    /**
     * @since 0.0.1
     * 
     * Get information about a ship by name
     *
     * @param {string} name The name of the ship
     * @returns {Promise<IShip>}
     */
    public async getShipByName(name: string): Promise<IShip> {
        try {
            const response = await axios.get<IShipResponse>(`${this.baseUrl}/ship?name=${name}`, this._axiosOptions);
            return response.data.ship;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            } else {
                throw error;
            }
        }
    }

    /**
     * @since 1.1.0
     * 
     * Get information about a ship by id
     *
     * @param {string} id The id of the ship
     * @returns {Promise<IShip>}
     */
    public async getShipById(id: string): Promise<IShip> {
        try {
            const response = await axios.get<IShipResponse>(`${this.baseUrl}/ship?id=${id}`, this._axiosOptions);
            return response.data.ship;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            } else {
                throw error;
            }
        }
    }

    /**
     * @since 1.2.0
     * 
     * Get a list of ships from the rarity
     * 
     * @param rarity The rarity of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    public async getShipsWithRarity(rarity: string): Promise<IBaseShip[]> {
        try {
            const response = await axios.get<IShipsResponse>(`${this.baseUrl}/ships?orderBy=rarity&rarity${rarity}`, this._axiosOptions);
            return response.data.ships;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            } else {
                throw error;
            }
        }
    }

    /**
     * @since 1.2.0
     * 
     * Get a list of ships from the type
     * 
     * @param type The type of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    public async getShipsWithType(type: string): Promise<IBaseShip[]> {
        try {
            const response = await axios.get<IShipsResponse>(`${this.baseUrl}/ships?orderBy=type&type${type}`, this._axiosOptions);
            return response.data.ships;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            } else {
                throw error;
            }
        }
    }

    /**
     * @since 1.2.0
     * 
     * Get a list of ships from the affiliation
     * 
     * @param affiliation The affiliation of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    public async getShipsWithAffiliation(affiliation: string): Promise<IBaseShip[]> {
        try {
            const response = await axios.get<IShipsResponse>(`${this.baseUrl}/ships?orderBy=affiliation&affiliation${affiliation}`, this._axiosOptions);
            return response.data.ships;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            } else {
                throw error;
            }
        }
    }

    /**
     * @since 0.0.1
     * 
     * Get ship names matching the given construction time
     *
     * @param {string} time The construction time
     * @returns {Promise<IConstruction>}
     */
    public async getBuildInfo(time: string): Promise<IConstruction> {
        try {
            const response = await axios.get<IBuildResponse>(`${this.baseUrl}/build?time=${time}`, this._axiosOptions);
            return response.data.construction;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            } else {
                throw error;
            }
        }
    }
}

export default AzurLane;