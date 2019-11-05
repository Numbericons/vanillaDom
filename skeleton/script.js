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
    console.log('click!')
    const form = document.querySelector('.photo-form-container');
  }

  const showPupForm = document.querySelector('.photo-show-button');
  showPupForm.addEventListener("click", puppyForm);
});
