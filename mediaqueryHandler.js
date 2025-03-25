// First load
if (window.matchMedia("(min-width: 768px)").matches) {
   console.log("not within 768px");
} else {
    console.log("within 768px");
}
// refer this docs: https://developer.mozilla.org/ko/docs/Web/API/Window/resize_event
(function () {
    var throttle = function (type,name,obj) {
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
          return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
      obj.addEventListener(type,func);
    };
    /* init - you can init any event */
  throttle("resize","optimizedResize");
})();
// handle event
window.addEventListener("optimizedResize", function () {
  console.log("fuck it");
});
