document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  // const catFormEl = document.getElementById("cat-form");
  
  // document.addEventListener('submit', )
  // favSub.addEventListener("submit", event => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const input = document.getElementsByClassName("favorite-input")[0];
    const place = input.value;
    input.value = "";
    
    const newLi = document.createElement("li");
    newLi.textContent = place;

    const ul = document.getElementById('sf-places');
    ul.appendChild(newLi);
  }
  
  const favSub = document.getElementsByClassName("favorite-submit")[0];
  favSub.addEventListener("click", handleSubmit);


  // adding new photos

  // --- your code here!

  const puppyForm = (event) => {
    const form = document.querySelector('.photo-form-container');
    form.className = "photo-form-container";
  }

  const showPupForm = document.querySelector('.photo-show-button');
  showPupForm.addEventListener("click", puppyForm);

  const addPhoto = (event) => {
    event.preventDefault();

    const urlInput = document.querySelector('.photo-url-input');
    const url = urlInput.value;
    urlInput.value = "";

    const newImg = document.createElement('img');
    newImg.src = url;

    const ul = document.querySelector('.dog-photos');
    ul.appendChild(newImg);
  }

  const photoSub = document.querySelector('.photo-url-submit');
  photoSub.addEventListener("click", addPhoto);
});
