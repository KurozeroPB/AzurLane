'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));
var deprecated = _interopDefault(require('deprecated-decorator'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

class ApiError extends Error {
    constructor(response) {
        super(response.message);
        this.statusCode = response.statusCode;
        this.statusMessage = response.statusMessage;
        this.message = response.message;
        this.error = response.error;
    }
}

(function (Category) {
    Category["RARITY"] = "rarity";
    Category["TYPE"] = "type";
    Category["AFFILIATION"] = "affiliation";
})(exports.Category || (exports.Category = {}));
class AzurLane {
    /**
     *
     * @param {IOptions} options Constructor options
     * @param {string} [options.userAgent] UA to use when making http requests
     */
    constructor(options) {
        this.baseUrl = "https://azurlane-api.herokuapp.com/v2";
        this.options = options;
        this.options.userAgent = options.userAgent ? options.userAgent : "AzurLane/v1.6.0 (https://www.npmjs.com/package/azurlane)";
        this._axiosOptions = {
            headers: {
                "Authorization": this.options.token,
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
     * @param {Order} category The category
     * @param {string} value Value depends on what category is used, e.g. if `Category.RARITY` is used value can be `Super Rare`
     * @returns {Promise<IBaseShip[]>}
     */
    async getShips(category, value) {
        try {
            const response = await axios.get(`${this.baseUrl}/ships?category=${category}&${category}=${value}`, this._axiosOptions);
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
     * @deprecated Deprecated since 1.3.0 use getShips() instead, this method will be remove in 2.0.0
     * @since 1.2.0
     *
     * Get a list of ships from the rarity
     *
     * @param rarity The rarity of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    async getShipsWithRarity(rarity) {
        return await this.getShips(exports.Category.RARITY, rarity);
    }
    /**
     * @deprecated Deprecated since 1.3.0 use getShips() instead, this method will be remove in 2.0.0
     * @since 1.2.0
     *
     * Get a list of ships from the type
     *
     * @param type The type of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    async getShipsWithType(type) {
        return await this.getShips(exports.Category.TYPE, type);
    }
    /**
     * @deprecated Deprecated since 1.3.0 use getShips() instead, this method will be remove in 2.0.0
     * @since 1.2.0
     *
     * Get a list of ships from the affiliation
     *
     * @param affiliation The affiliation of the ships
     * @returns {Promise<IBaseShip[]>}
     */
    async getShipsWithAffiliation(affiliation) {
        return await this.getShips(exports.Category.AFFILIATION, affiliation);
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
__decorate([
    deprecated("getShips", "1.3.0"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AzurLane.prototype, "getShipsWithRarity", null);
__decorate([
    deprecated("getShips", "1.3.0"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AzurLane.prototype, "getShipsWithType", null);
__decorate([
    deprecated("getShips", "1.3.0"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AzurLane.prototype, "getShipsWithAffiliation", null);

exports.ApiError = ApiError;
exports.AzurLane = AzurLane;
exports.default = AzurLane;
