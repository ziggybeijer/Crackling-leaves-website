var smoothScroll = function(elementId) {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 90;
    var target = document.getElementById(elementId);
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
        console.log("loop 1");
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
        console.log("loop 2");
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
                                 (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function() {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);
        console.log(scrollContainer.scrollTop + ", " + targetY);

        if (scrollContainer.scrollTop + 10 >= targetY) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
        console.log("recursive");
    };

    window.requestAnimationFrame(stepFunc);
}
