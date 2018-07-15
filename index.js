console.log("Water Please.")
let filenames = [
  "cup-water.jpg",
  "3-cups.jpg",
  "jug-water.jpg"
];

function randomNumGen() {
  let rndNum = Math.floor(Math.random() * (filenames.length - 0) + 0);
  return rndNum
}

function hydrate() {}
var imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  var img = imgs[i];
  img.src = chrome.extension.getURL("water/" + filenames[randomNumGen()]);
}

var anchors = document.getElementsByTagName("a");
for (let i = 0; i < anchors.length; i++) {
  var anchor = anchors[i];
  anchor.src = "https://www.businessmodulehub.com/wp-content/uploads/2018/07/170802120652_1_900x600.jpg";
}

randomNumGen()