function initClock() {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let hands = [
    {
      hand: "hours",
      angle: hours * 30 + minutes / 2
    },
    {
      hand: "minutes",
      angle: minutes * 6
    },
    {
      hand: "seconds",
      angle: seconds * 6
    }
  ];

  for (var j = 0; j < hands.length; j++) {
    let elements = document.querySelectorAll("." + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
      elements[k].style.webkitTransform = "rotateZ(" + hands[j].angle + "deg)";
      elements[k].style.transform = "rotateZ(" + hands[j].angle + "deg)";
      // If this is a minute hand, note the seconds position (to calculate minute position later)
      if (hands[j].hand === "minutes") {
        elements[k].parentNode.setAttribute(
          "data-second-angle",
          hands[j + 1].angle
        );
      }
    }
  }
}
initClock();