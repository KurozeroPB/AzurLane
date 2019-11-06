# AzurLane
Api wrapper for my azur lane api

## Example
```js
const { AzurLane, Order } = require("azurlane");
const azurlane = new AzurLane();

async function main() {
    // Get specific ship by name, in this case "Akagi"
    const ship = await azurlane.getShipByName("Akagi");
    console.log(`${ship.names.en}'s rarity is ${ship.rarity}`); // IJN Akagi's rarity is Super Rare

    // Get an array of ships with rarity "Super Rare"
    const ships = await azurlane.getShips(Order.RARITY, "Super Rare");
    for (let i = 0; i < ships.length; i++) {
        console.log(`[${ships[i].id}] = ${ships[i].name}`); // [036] = San Diego
    }
}

// Also catches any api errors that might occur like 400, 429, 500 http errors
// Api errors extend the default error class, have a look at https://kurozeropb.github.io/AzurLane/classes/apierror.html for information
main().catch(console.error);
```

## Ship Data
```json
{   
    "id": "224",
    "names": {
        "full": "IJN Akagi (cn: 凰; jp: 赤城)",
        "en": "IJN Akagi",
        "cn": "凰",
        "jp": "赤城"
    },
    "thumbnail": "https://azurlane.koumakan.jp/w/images/3/3f/AkagiIcon.png",
    "skins": [
        { 
            "title": "Default",
            "image": "https://azurlane.koumakan.jp/w/images/thumb/0/06/Akagi.png/600px-Akagi.png"
        },
        {
            "title": "Paradise Amaryllis",
            "image": "https://azurlane.koumakan.jp/w/images/thumb/3/39/AkagiSummer.png/600px-AkagiSummer.png"
        },
        {
            "title": "Plum and Snow",
            "image": "https://azurlane.koumakan.jp/w/images/thumb/d/d0/AkagiNew_Year.png/533px-AkagiNew_Year.png"
        },
        {
            "title": "Deep Crimson Poppy",
            "image": "https://azurlane.koumakan.jp/w/images/thumb/6/65/AkagiPledge.png/505px-AkagiPledge.png"
        } 
    ],
    "buildTime": "Drop Only",
    "rarity": "Super Rare",
    "stars": {
        "value": "★★★☆☆☆",
        "count": 3
    },
    "class": "Akagi",
    "nationality": "Sakura Empire",
    "hullType": "Aircraft Carrier"
}
```

## Build Time Data
```json
{
    "time": "00:24:00",
    "ships": [
        "Foxhound",
        "Fortune",
        "Dace",
        "Albacore"
    ]
}
```