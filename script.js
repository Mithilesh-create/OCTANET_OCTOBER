const getUrlFunc = (arr) => {
  const getUrl = arr.map((e, i) => {
    return `<div class="item" draggable="true" ondragstart="drag(event)" key="${i}">
            <h4>${e}</h4>
            <div>
            </div>
        </div>`;
  });
  return getUrl;
};
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(event) {
  console.log(event.srcElement.innerText ,"-"+event.srcElement.offsetParent.className);
  event.dataTransfer.setData(
    "text",
    `${event.srcElement.innerText} -${event.srcElement.offsetParent.className}`
  );
}
function firstArrFetch() {
  var storedNewTasks = JSON.parse(localStorage.getItem("new")) || [];
  const first = document.getElementById("first");
  const getUrl = getUrlFunc(storedNewTasks);
  first.innerHTML = getUrl.join("");
}
function secondArrFetch() {
  var storedInProgressTasks =
    JSON.parse(localStorage.getItem("inprogress")) || [];
  const second = document.getElementById("second");
  const getUrl = getUrlFunc(storedInProgressTasks);
  second.innerHTML = getUrl.join("");
}
function thirdArrFetch() {
  var storedCompletedTasks =
    JSON.parse(localStorage.getItem("completed")) || [];
  const third = document.getElementById("third");
  const getUrl = getUrlFunc(storedCompletedTasks);
  third.innerHTML = getUrl.join("");
}

firstArrFetch();
secondArrFetch();
thirdArrFetch();
