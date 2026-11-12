var cooknumb = 0;
var x = 1;
function addCookie() {
    cooknumb = cooknumb + x;
    document.getElementById("number").textContent = cooknumb;
}
function upgCookie() {
    x = x * 3;
}
function resCookie() {
    x = 1;
}
function subCookie() {
    cooknumb = cooknumb - x;
    document.getElementById("number").textContent = cooknumb;
}