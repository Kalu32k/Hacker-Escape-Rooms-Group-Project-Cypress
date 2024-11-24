export function filterByLabel() {
    // Find all filter buttons from the dom.
    const filterButtons = document.querySelectorAll(".filter__tag button");
    

    //Array with all active labels that the user has clicked.
    let selectedLabels = [];


    //When the user clicks on our labels, the filter runs.
    filterButtons.forEach(filterButton => {
        filterButton.addEventListener("click", (e) => {
            e.preventDefault();
            

            filterButton.classList.toggle("active");
        })
    })
}