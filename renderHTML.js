  var toolbarHTML = "";
  toolbarHTML += "<p>First: Everything you want to do</p>" + "\n";
  toolbarHTML += "<p>Second: Everything you want to do</p>" + "\n";
  toolbarHTML += "<p>Third: Everything you want to do</p>" + "\n";
  if (document.getElementsByClassName("your-class-tag-name")[0]) {
    document.getElementsByClassName("your-class-tag-name")[0].insertAdjacentHTML("afterend", toolbarHTML);
