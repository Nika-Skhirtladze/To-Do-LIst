const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector(".list");
const todo = document.createElement("div");
const forHover = document.createElement("div");
const check = document.createElement("img");
const border = document.createElement("img");
const text = document.createElement("p");

list.addEventListener("click", deleteDone);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value != "") {
        listCreate();
        input.value = "";
    } else {
        alert("Enter Some Words");
    }
    save();
});

function listCreate() {
    const todo = document.createElement("div");
    list.appendChild(todo);
    todo.classList.add("todo");
    const forHover = document.createElement("div");
    forHover.classList.add("for-hover");
    todo.appendChild(forHover);
    const check = document.createElement("img");
    check.src = "images/Vector.png";
    check.classList.add("check");
    forHover.appendChild(check);
    const border = document.createElement("img");
    border.src = "images/Check.svg";
    border.classList.add("border");
    forHover.appendChild(border);
    const text = document.createElement("p");
    text.classList.add("text");
    text.innerText = input.value;
    todo.appendChild(text);
    const bin = document.createElement("img");
    bin.src = "images/recycle-bin.png";
    bin.classList.add("bin");
    todo.appendChild(bin);
}
function deleteDone(e) {
    console.log(e.target);
    const item = e.target;
    if (item.classList[0] === "bin") {
        item.parentElement.classList.add("remove");
        item.parentElement.addEventListener("transitionend", () => {
            // item.parentElement.classList = "todo";
            item.parentElement.remove();
            console.log("transition end");
            save();
        });
    }

    if (item.classList[0] === "border") {
        item.parentElement.parentElement.classList.toggle("completed");
        save();
    }
}
function save() {
    localStorage.setItem("data", list.innerHTML);
}
function get() {
    list.innerHTML = localStorage.getItem("data");
}
// save();
get();
