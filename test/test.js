const assert = require("assert");
const AzurLane = require("../dist/lib/index");

const Akagi = {   
    id: "224",
    names: {
        full: "IJN Akagi (cn: 凰; jp: 赤城)",
        en: "IJN Akagi",
        cn: "凰",
        jp: "赤城"
    },
    thumbnail: "https://azurlane.koumakan.jp/w/images/3/3f/AkagiIcon.png",
    skins:
    [
        { 
            title: "Default",
            image: "https://azurlane.koumakan.jp/w/images/thumb/0/06/Akagi.png/600px-Akagi.png"
        },
        {
            title: "Paradise Amaryllis",
            image: "https://azurlane.koumakan.jp/w/images/thumb/3/39/AkagiSummer.png/600px-AkagiSummer.png"
        },
        {
            title: "Plum and Snow",
            image: "https://azurlane.koumakan.jp/w/images/thumb/d/d0/AkagiNew_Year.png/533px-AkagiNew_Year.png"
        },
        {
            title: "Deep Crimson Poppy",
            image: "https://azurlane.koumakan.jp/w/images/thumb/6/65/AkagiPledge.png/505px-AkagiPledge.png"
        } 
    ],
    buildTime: "Drop Only",
    rarity: "Super Rare",
    stars: {
        value: "★★★☆☆☆",
        count: 3
    },
    class: "Akagi",
    nationality: "Sakura Empire",
    hullType: "Aircraft Carrier"
};

const BuiltTest = {
    time: "00:24:00",
    ships: [
        "Foxhound",
        "Fortune",
        "Dace",
        "Albacore"
    ]
};

describe("AzurLane", function() {
    const azurlane = new AzurLane();

    describe("#ship()", function() {
        it("should be equal to Akagi", async function() {
            const data = await azurlane.ship("Akagi");
            assert.deepEqual(data, Akagi);
        });
    });

    describe("#buildInfo()", function() {
        it("should be equal to BuiltTest", async function() {
            const data = await azurlane.buildInfo("00:24:00");
            assert.deepEqual(data, BuiltTest);
        });
    });
});