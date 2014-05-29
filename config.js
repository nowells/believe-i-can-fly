var config = {
        plugins: [
            //"video-png",   // Display the video feed as static pngs (work in every browser)
            "video-stream",  // Display the video as a native h264 stream decoded in JS
            //"hud",         // Display the artificial horizon, altimeter, compass, etc.
            "pilot",         // Pilot the drone with the keyboard
            //"gamepad",
            "tracker",
        ],

        // Config for pilot plugin
        keyboard: 'azerty',
};

module.exports = config;

