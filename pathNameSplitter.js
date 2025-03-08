var pathName = location.pathname.split("/")[1];
if (pathName === "directoryName" || pathName === "directoryNameSecondary") {
  var html = "<p>This is a paragraph.</p>";
  document.getElementsByClassName("output").insertAdjacentHTML("afterend",html);
  // To insert the HTML into the document rather than replace the contents of an element, use the method insertAdjacentHTML()
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  // You use the following parameters: "afterbegin", "beforeend", "beforebegin", "afterend"
}
