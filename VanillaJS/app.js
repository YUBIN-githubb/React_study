const title =document.querySelector(".hello:nth-child(2)");

function handleTitleClick() {
    console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);