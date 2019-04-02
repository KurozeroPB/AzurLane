const AzurLane = require("../dist/lib/index");
const azurlane = new AzurLane();

async function main() {
    const data = await azurlane.ship("Akagi");
    console.log(data);
}

main().catch(console.error);