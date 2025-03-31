let toolbarHTML = "";
let minWidth992 = false;
let minWidth768 = false;
let minWidth576 = false;
function addToolbar () {
    toolbarHTML += "<div class = \"" + "page-article-toolbar" + "\">";
    if (window.matchMedia("(min-width: 992px)").matches) {
        toolbarHTML += "992";
        minWidth992 = true;
        minWidth768 = false;
        minWidth576 = false;
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        toolbarHTML += "768";
        minWidth992 = false;
        minWidth768 = true;
        minWidth576 = false;
    } else if (window.matchMedia("(min-width: 576px)").matches) {
       toolbarHTML += "576";
        minWidth992 = false;
        minWidth768 = false;
        minWidth576 = true;
    } else { // if (!window.matchMedia("(min-width: 576px)")
       toolbarHTML += "else";
        minWidth992 = false;
        minWidth768 = false;
        minWidth576 = false;
    }
    toolbarHTML += "</div>";
    // output HTML
    document.querySelector(".page-article-header").insertAdjacentHTML("afterend",toolbarHTML);
    toolbarHTML = "";
}
function updateToolbar() {
    let pageArticleToolbar = document.querySelector(".page-article-toolbar");
    if (window.matchMedia("(min-width: 992px)").matches) {
        if (minWidth992 === false) {
            if (pageArticleToolbar) {
                pageArticleToolbar.remove();
                toolbarHTML += "<div class = \"" + "page-article-toolbar" + "\">";
                toolbarHTML += "992";
                toolbarHTML += "</div>";
                document.querySelector(".page-article-header").insertAdjacentHTML("afterend",toolbarHTML);
                minWidth992 = true;
                minWidth768 = false;
                minWidth576 = false;
                toolbarHTML = "";
            }
        }
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        if (minWidth768 === false) {
            if (pageArticleToolbar) {
                pageArticleToolbar.remove();
                toolbarHTML += "<div class = \"" + "page-article-toolbar" + "\">";
                toolbarHTML += "768";
                toolbarHTML += "</div>";
                document.querySelector(".page-article-header").insertAdjacentHTML("afterend",toolbarHTML);
                minWidth992 = false;
                minWidth768 = true;
                minWidth576 = false;
                toolbarHTML = "";
            }
        }
    } else if (window.matchMedia("(min-width: 576px)").matches) {
        if (minWidth576 === false) {
            if (pageArticleToolbar) {
                pageArticleToolbar.remove();
                toolbarHTML += "<div class = \"" + "page-article-toolbar" + "\">";
                toolbarHTML += "576";
                toolbarHTML += "</div>";
                document.querySelector(".page-article-header").insertAdjacentHTML("afterend",toolbarHTML);
                minWidth992 = false;
                minWidth768 = false;
                minWidth576 = true;
                toolbarHTML = "";
            }
        }
    } else { // if (!window.matchMedia("(min-width: 576px)")
        if (pageArticleToolbar) {
            if (minWidth576 === true) {
                pageArticleToolbar.remove();
                toolbarHTML += "<div class = \"" + "page-article-toolbar" + "\">";
                toolbarHTML += "else";
                toolbarHTML += "</div>";
                document.querySelector(".page-article-header").insertAdjacentHTML("afterend",toolbarHTML);
                minWidth992 = false;
                minWidth768 = false;
                minWidth576 = false;
                toolbarHTML = "";
            }
        }
    }
}
addToolbar();
window.addEventListener("resize", () => {
    updateToolbar();
});
