(function () {
    const loader = document.getElementById("page-loader");
    const progressBar = document.getElementById("loaderProgressBar");
    const percentText = document.getElementById("loaderPercent");

    if (!loader || !progressBar || !percentText) return;

    const isPageTransition = sessionStorage.getItem("olkPageTransition") === "true";

    if (isPageTransition) {
        loader.remove();
        return;
    }

    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const navigationType = navigationEntry ? navigationEntry.type : "navigate";

    const hasSeenPreloader = sessionStorage.getItem("olkPreloaderSeen") === "true";
    const shouldShowPreloader = !hasSeenPreloader || navigationType === "reload";

    if (!shouldShowPreloader) {
        loader.remove();
        return;
    }

    sessionStorage.setItem("olkPreloaderSeen", "true");

    loader.classList.add("is-active");
    document.body.classList.add("is-loading");

    let progress = 0;
    let pageLoaded = false;
    const startTime = Date.now();
    const minimumDuration = 2400;

    function updateLoader(value) {
        progressBar.style.width = `${value}%`;
        percentText.textContent = `${value}%`;
    }

    const progressInterval = setInterval(() => {
        if (pageLoaded) return;

        const increment = Math.floor(Math.random() * 4) + 2;
        progress = Math.min(progress + increment, 88);

        updateLoader(progress);
    }, 150);

    function finishLoader() {
        clearInterval(progressInterval);

        const finishInterval = setInterval(() => {
            progress = Math.min(progress + 3, 100);
            updateLoader(progress);

            if (progress >= 100) {
                clearInterval(finishInterval);

                setTimeout(() => {
                    loader.classList.add("is-hidden");
                    document.body.classList.remove("is-loading");

                    setTimeout(() => {
                        loader.remove();
                    }, 700);
                }, 220);
            }
        }, 55);
    }

    function handleLoad() {
        pageLoaded = true;

        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumDuration - elapsedTime);

        setTimeout(finishLoader, remainingTime);
    }

    if (document.readyState === "complete") {
        handleLoad();
    } else {
        window.addEventListener("load", handleLoad, { once: true });
    }
})();