import axios from 'axios';

class ApiError extends Error {
    constructor(response) {
        super(response.message);
        this.statusCode = response.statusCode;
        this.statusMessage = response.statusMessage;
        this.message = response.message;
        this.error = response.error;
    }
}

var Order;
(function (Order) {
    Order["RARITY"] = "rarity";
    Order["TYPE"] = "type";
    Order["AFFILIATION"] = "affiliation";
})(Order || (Order = {}));
class AzurLane {
    /**
     *
     * @param {IOptions} options Constructor options
     * @param {string} [options.userAgent] UA to use when making http requests
     */
    constructor(options) {
        this.baseUrl = "https://azurlane-api.appspot.com/v1";
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
    async getShipByName(name) {
        try {
            const response = await axios.get(`${this.baseUrl}/ship?name=${name}`, this._axiosOptions);
            return response.data.ship;
        }
        catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            }
            else {
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
    async getShipById(id) {
        try {
            const response = await axios.get(`${this.baseUrl}/ship?id=${id}`, this._axiosOptions);
            return response.data.ship;
        }
        catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            }
            else {
                throw error;
            }
        }
    }
    /**
     * @since 1.3.0
     *
     * Get a list of ships from rarity, type or affiliation
     *
     * @param {Order} orderBy The order
     * @param {string} value Value depends on what order is used, e.g. if `Order.RARITY` is used value can be `Super Rare`
     * @returns {Promise<IBaseShip[]>}
     */
    async getShips(orderBy, value) {
        try {
            const response = await axios.get(`${this.baseUrl}/ships?orderBy=${orderBy}&${orderBy}=${value}`, this._axiosOptions);
            return response.data.ships;
        }
        catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            }
            else {
                throw error;
            }
        }
    }
    /**
     * @deprecated
     * @since 1.2.0
     *
     * Get a list of ships from the rarity
     *
     * @param rarity The rarity of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    async getShipsWithRarity(rarity) {
        throw new Error("getShipsWithRarity() is deprecated, use getShips(orderBy: Order, value: string) instead");
    }
    /**
     * @deprecated
     * @since 1.2.0
     *
     * Get a list of ships from the type
     *
     * @param type The type of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    async getShipsWithType(type) {
        throw new Error("getShipsWithType() is deprecated, use getShips(orderBy: Order, value: string) instead");
    }
    /**
     * @deprecated
     * @since 1.2.0
     *
     * Get a list of ships from the affiliation
     *
     * @param affiliation The affiliation of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    async getShipsWithAffiliation(affiliation) {
        throw new Error("getShipsWithAffiliation() is deprecated, use getShips(orderBy: Order, value: string) instead");
    }
    /**
     * @since 0.0.1
     *
     * Get ship names matching the given construction time
     *
     * @param {string} time The construction time
     * @returns {Promise<IConstruction>}
     */
    async getBuildInfo(time) {
        try {
            const response = await axios.get(`${this.baseUrl}/build?time=${time}`, this._axiosOptions);
            return response.data.construction;
        }
        catch (error) {
            if (error.response && error.response.data) {
                throw new ApiError(error.response.data);
            }
            else {
                throw error;
            }
        }
    }
}

export default AzurLane;
export { ApiError, AzurLane, Order };
