document.getElementById("filterContent").style.display = "none";
document.getElementById("newContent").style.display = "none";

function showFilter() {
  let filterForm = document.getElementById("filterContent");
  let addForm = document.getElementById("newContent");

  if (filterForm.style.display == "none") {
    filterForm.style.display = "block";
  } else {
    filterForm.style.display = "none";
  }

  addForm.style.display = "none";
}

function showAddNew() {
  let filterForm = document.getElementById("filterContent");
  let addForm = document.getElementById("newContent");

  if (addForm.style.display == "none") {
    addForm.style.display = "flex";
  } else {
    addForm.style.display = "none";
  }

  filterForm.style.display = "none";
}

function filterArticles() {
  let showOpinion = document.getElementById("opinionCheckbox").checked;
  let showRecipe = document.getElementById("recipeCheckbox").checked;
  let showUpdate = document.getElementById("updateCheckbox").checked;

  let opinionArticles = document.getElementsByClassName("opinion");
  for (let i = 0; i < opinionArticles.length; i++) {
    if (showOpinion) {
      opinionArticles[i].style.display = "block";
    } else {
      opinionArticles[i].style.display = "none";
    }
  }

  let recipeArticles = document.getElementsByClassName("recipe");
  for (let i = 0; i < recipeArticles.length; i++) {
    if (showRecipe) {
      recipeArticles[i].style.display = "block";
    } else {
      recipeArticles[i].style.display = "none";
    }
  }

  let updateArticles = document.getElementsByClassName("update");
  for (let i = 0; i < updateArticles.length; i++) {
    if (showUpdate) {
      updateArticles[i].style.display = "block";
    } else {
      updateArticles[i].style.display = "none";
    }
  }
}

function addNewArticle() {
  let titleText = document.getElementById("inputHeader").value;
  let bodyText = document.getElementById("inputArticle").value;

  if (titleText == "") {
    alert("Please enter a title.");
    return;
  }

  if (bodyText == "") {
    alert("Please enter article text.");
    return;
  }

  let opinionRadio = document.getElementById("opinionRadio");
  let recipeRadio = document.getElementById("recipeRadio");
  let lifeRadio = document.getElementById("lifeRadio");

  let typeClass = "";
  let typeLabel = "";

  if (opinionRadio.checked) {
    typeClass = "opinion";
    typeLabel = "Opinion";
  } else if (recipeRadio.checked) {
    typeClass = "recipe";
    typeLabel = "Recipe";
  } else if (lifeRadio.checked) {
    typeClass = "update";
    typeLabel = "Update";
  } else {
    alert("Please select an article type.");
    return;
  }

  let article = document.createElement("article");
  article.className = typeClass;

  let marker = document.createElement("span");
  marker.className = "marker";
  marker.innerText = typeLabel;

  let h2 = document.createElement("h2");
  h2.innerText = titleText;

  let pText = document.createElement("p");
  pText.innerText = bodyText;

  let pLink = document.createElement("p");
  let link = document.createElement("a");
  link.href = "moreDetails.html";
  link.innerText = "Read more...";
  pLink.appendChild(link);

  article.appendChild(marker);
  article.appendChild(h2);
  article.appendChild(pText);
  article.appendChild(pLink);

  document.getElementById("articleList").appendChild(article);

  document.getElementById("inputHeader").value = "";
  document.getElementById("inputArticle").value = "";
  opinionRadio.checked = false;
  recipeRadio.checked = false;
  lifeRadio.checked = false;

  filterArticles();
}