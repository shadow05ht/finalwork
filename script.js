let tasks = document.querySelector(".task");
let addButtonoflist = document.querySelector(".newelementadd");
let containerofTasks = document.querySelector(".containeroftasks");
let imageDelete = document.querySelector(".Xcolor");
let imageSort = document.querySelector(".imagefirstdown");
let deleteSection = document.querySelector(".deletesection");
let sortofImages = true;
const missions = [];
imageSort.addEventListener("mouseover", (a) => {
  a.target.src = "./images/photo2down.svg";
});
imageSort.addEventListener("mouseleave", (a) => {
  a.target.src = "./images/photo2cdown.svg";
});
imageDelete.addEventListener("mouseover", (a) => {
  a.target.src = "./images/photoXcolor.svg";
});
imageDelete.addEventListener("mouseleave", (a) => {
  a.target.src = "./images/photoXsimple.svg";
});
imageDelete.addEventListener("click", () => {
  tasks.value = "";
});
let elements = true;
imageSort.addEventListener("click", () => {
  if (elements == true) {
    imageSort.src = "./images/photo3up.svg";
    imageSort.addEventListener("mouseleave", (a) => {
      a.target.src = "./images/photo3up.svg";
    });
    imageSort.addEventListener("mouseover", (a) => {
      a.target.src = "./images/photo3up.svg";
    });
    elements = !elements;
  } else {
    imageSort.src = "./images/photo2down.svg";
    imageSort.addEventListener("mouseleave", (a) => {
      a.target.src = "./images/photo2cdown.svg";
    });
    imageSort.addEventListener("mouseover", (a) => {
      a.target.src = "./images/photo2down.svg";
    });
    elements = !elements;
  }
});
let elementss = true;
addButtonoflist.addEventListener("click", () => {
  let valueoftasks = tasks.value;
  if (valueoftasks.trim() !== "") {
    const taskofthelist = tasks.value.trim();
    missions.push(taskofthelist);
    tasks.value = "";
    windowdis();
    deleteSection.style.display = "none";
    elementss = !elementss;
  } else {
    deleteSection.style.display = "block";
    elementss = !elementss;
  }
  if (missions.length == 0) {
    containerofTasks.style.display = "none";
  } else {
    containerofTasks.style.display = "block";
  }
});
function windowdis() {
  const addedlist = document.querySelector(".orderedlist");
  addedlist.innerHTML = "";
  let counter = 1;
  for (const task of missions) {
    const listelement = document.createElement("li");
    let imageelement = document.createElement("img");
    imageelement.src = "./images/photoXsimple.svg";
    if (addedlist.childElementCount !== 0) {
      listelement.style.marginTop = "20px";
    }
    imageelement.classList.add("removefromlist");
    listelement.innerHTML = `${counter}.${task}`;
    counter++;
    imageelement.addEventListener("mouseover", (event) => {
      event.target.src = "./images/photoXcolor.svg";
    });
    imageelement.addEventListener("mouseleave", (event) => {
      event.target.src = "./images/photoXsimple.svg";
    });
    imageelement.addEventListener("click", () => {
      deleteFromlist(task);
    });
    addedlist.append(listelement);
    listelement.append(imageelement);
  }
  if (addedlist.childElementCount == 0) {
    containerofTasks.style.display = "none";
  }
}
function deleteFromlist(part1) {
  const indexremoved = missions.indexOf(part1);
  if (indexremoved !== -1) {
    missions.splice(indexremoved, 1);
    windowdis();
  }
  windowdis();
}
imageSort.addEventListener("click", () => {
  if (sortofImages) {
    missions.sort();
  } else {
    missions.sort().reverse();
  }
  sortofImages = !sortofImages;
  windowdis();
});
