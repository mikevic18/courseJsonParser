const btnCourses = document.getElementById("btnCourses");
const btnCountry = document.getElementById("btnCountry");
const btnUniversity = document.getElementById("btnUniversity");
const courseList = document.getElementById("courseList");
const countryList = document.getElementById("countryList");
const universityList = document.getElementById("universityList");

// Button click event listeners
btnCourses.addEventListener("click", () => {
    showList("courses");
});

btnCountry.addEventListener("click", () => {
    showList("country");
});

btnUniversity.addEventListener("click", () => {
    showList("university");
});

// Function to show the selected list
function showList(list) {
    // Reset active classes and hide all lists
    btnCourses.classList.remove("active");
    btnCountry.classList.remove("active");
    btnUniversity.classList.remove("active");
    courseList.classList.add("d-none");
    countryList.classList.add("d-none");
    universityList.classList.add("d-none");

    // Show the selected list and set active class for the clicked button
    if (list === "courses") {
        btnCourses.classList.add("active");
        courseList.classList.remove("d-none");
    } else if (list === "country") {
        btnCountry.classList.add("active");
        countryList.classList.remove("d-none");
    } else if (list === "university") {
        btnUniversity.classList.add("active");
        universityList.classList.remove("d-none");
    }
}
