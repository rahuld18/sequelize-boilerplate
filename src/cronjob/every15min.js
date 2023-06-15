var cron = require("node-cron");

function cronJobs() {
  console.log("Initiating Cron Jobs...");
  cron.schedule("*/1 * * * *", async () => {
    const response = await fetch(
      "https://shop-backend-tuv2.onrender.com/pub/alive"
    );
    console.log("running every minute 5", await response.json());
  });
}

module.exports = cronJobs;
