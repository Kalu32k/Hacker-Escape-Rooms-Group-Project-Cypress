import { applyFilters } from "./allFilter.js";

export function filterByText(data) {
  //Find the user search field in the filter modal.
  const searchInput = document.querySelector("#filter__text");
  //Check to see if the the searchfield is on the webpage.
  if (searchInput) {
    //eventlistners that runs everytime the user writes in the search field.
    searchInput.addEventListener("input", () => {
      //Makes the users input values to lowercase.
      const searchText = searchInput.value.toLowerCase();
      //Updated the data object with the users search text.
      data.text = searchText;
      //calls applyFilters with the new updated data-object.
      applyFilters(data);
    });
  }
}
