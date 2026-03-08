(() => {
    let ytControls, ytPlayer;
    let currentVideo = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {type, value, videoId} = obj;

        if (type == "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        };
    });

    const newVideoLoaded = () => {
        const controlButtonExists = document.getElementsByClassName("control-btn")[0];
        
        if (!controlButtonExists) {
            const controlBtn = document.createElement("img");
            controlBtn.src = chrome.runtime.getURL("assets/t-logo.png");
            controlBtn.className = "ytp-button " + "control-btn";
            controlBtn.title = "Click to translate";

            ytControls = document.getElementsByClassName("ytp-left-controls")[0];
            ytPlayer = document.getElementsByClassName("video-stream")[0];

            ytControls.appendChild(controlBtn);
            //controlBtn.addEventListener("click", translateEventHandler);
            console.log("Created button");
        };
        console.log("Didnt create button");
    };

    newVideoLoaded();

    const translateEventHandler = () => {

        // TODO
    };
})();