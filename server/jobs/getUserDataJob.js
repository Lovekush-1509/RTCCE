const cron = require("node-cron");
const User = require("../modes/User");

const startGetFilesJob = () => {

    cron.schedule("0 * * * *", async () => {
        try {
            console.log("🔥 Get Files Cron Started");

            const allFiles = await User.find({})
                .populate("Programmes");

            console.log("All Files:", allFiles);

        } catch (error) {
            console.error("❌ Get Files Cron Error:", error.message);
        }
    });

};

module.exports = startGetFilesJob;