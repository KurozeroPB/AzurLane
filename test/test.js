const assert = require("assert");
const AzurLane = require("../dist/lib/index");

describe("AzurLane", function() {
    const azurlane = new AzurLane();
    assert(azurlane instanceof AzurLane, "azurlane did not construct properly");

    describe("#ship()", function() {
        it("should resolve to an object", async function() {
            const data = await azurlane.ship("Akagi");
            assert.strictEqual(typeof data, "object", "ship did not resolved to an object");
        });
    });

    describe("#buildInfo()", function() {
        it("should resolve to an object", async function() {
            const data = await azurlane.buildInfo("00:24:00");
            assert.strictEqual(typeof data, "object", "buildInfo did not resolved to an object");
        });
    });
});
