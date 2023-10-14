const getUrlFunc = (arr, name) => {
  const getUrl = arr.map((e, i) => {
    return `<div class="item" draggable="true" ondragstart="drag(event)" key="${i}">
            <h4>${e}</h4>
            <div>
            <i class="fa-solid fa-trash-can" onclick="deleteEvent('${e}','${name}')"></i>
            </div>
        </div>`;
  });
  return getUrl;
};
document
  .getElementById("taskAdder")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
      document.getElementById("addNewTask").click();
    }
  });

function allowDrop(ev) {
  ev.preventDefault();
}
function deleteEvent(e, list) {
  var arr;
  if (list == "first") {
    arr = JSON.parse(localStorage.getItem("new")) || [];
    arr = arr.filter((text) => text != e);
    localStorage.setItem("new", JSON.stringify(arr));
    firstArrFetch();
  } else if (list == "second") {
    arr = JSON.parse(localStorage.getItem("inprogress")) || [];
    arr = arr.filter((text) => text != e);
    localStorage.setItem("inprogress", JSON.stringify(arr));
    secondArrFetch();
  } else {
    arr = JSON.parse(localStorage.getItem("completed")) || [];
    arr = arr.filter((text) => text != e);
    localStorage.setItem("completed", JSON.stringify(arr));
    thirdArrFetch();
  }
}
function drag(event) {
  event.dataTransfer.setData(
    "text",
    `${event.srcElement.innerText} -${event.srcElement.offsetParent.className}`
  );
}
function firstArrFetch() {
  var storedNewTasks = JSON.parse(localStorage.getItem("new")) || [];
  const first = document.getElementById("first");
  const getUrl = getUrlFunc(storedNewTasks, "first");
  first.innerHTML = getUrl.join("");
}
function secondArrFetch() {
  var storedInProgressTasks =
    JSON.parse(localStorage.getItem("inprogress")) || [];
  const second = document.getElementById("second");
  const getUrl = getUrlFunc(storedInProgressTasks, "second");
  second.innerHTML = getUrl.join("");
}
function thirdArrFetch() {
  var storedCompletedTasks =
    JSON.parse(localStorage.getItem("completed")) || [];
  const third = document.getElementById("third");
  const getUrl = getUrlFunc(storedCompletedTasks, "third");
  third.innerHTML = getUrl.join("");
}

firstArrFetch();
secondArrFetch();
thirdArrFetch();
