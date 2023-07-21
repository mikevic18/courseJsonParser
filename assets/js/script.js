const coursesByUniversity = new Map();
const universitiesByCountry = new Map();
const courseLinkMap = new Map();
const courseListDiv = document.getElementById("course-list");
const countryListDiv = document.getElementById("countryList");
const universityListDiv = document.getElementById("universityList");
fetch("https://www.liverpool.ac.uk/app-data/study-abroad/courses.json")
    .then((response) => response.json())
    .then((data) => {
    
        // Iterate over each course
        data.forEach((course) => {
            const courseName = course.course;
            const universities = course.universities;
            if (universities != null && universities) {
                const informationLink = course.link;
                //add unique information link to the hashmap, university name as key and link as value
                if (!courseLinkMap.has(courseName)) {
                    courseLinkMap.set(courseName, informationLink);
                }
                // Create course link
                const courseLink = document.createElement("a");
                courseLink.href = "#";
                courseLink.innerText = courseName;
                courseLink.classList.add("d-block", "my-3");
                courseLink.addEventListener("click", () => {
                    displayUniversities(
                        courseName,
                        universities,
                        informationLink
                    );
                });

                // Append course link to the course list div
                courseListDiv.appendChild(courseLink);
                universities.forEach((university) => {
                    const country = university.country;
                    if (universitiesByCountry.has(country)) {
                        const universityName = university.name;

                        const universitiesList =
                            universitiesByCountry.get(country);
                        const universityExists = universitiesList.some(
                            (existingUniversity) =>
                                existingUniversity.name === university.name &&
                                existingUniversity.country ===
                                    university.country
                        );
                        if (!universityExists)
                            universitiesList.push(university);
                        if (coursesByUniversity.has(universityName)) {
                            const coursesList =
                                coursesByUniversity.get(universityName);
                            if (!coursesList.includes(course.course)) {
                                coursesList.push(course.course);
                            }
                        } else {
                            // Create a new ArrayList and add the course as the first element
                            coursesByUniversity.set(universityName, [
                                course.course,
                            ]);
                        }
                    } else {
                        // Create a new ArrayList and add university as the first element
                        universitiesByCountry.set(country, [university]);
                    }
                });
            }
        });
        coursesByUniversity.forEach((courses, universityName) => {
            // Create university link
            const universityLink = document.createElement("a");
            universityLink.href = "#";
            universityLink.innerText = universityName;
            universityLink.classList.add("university-link");
            universityLink.classList.add("d-block", "my-3");
            universityLink.addEventListener("click", () => {
                displayCourses(universityName, courses);
            });
            universityListDiv.appendChild(universityLink);
        });
        universitiesByCountry.forEach((universities, country) => {
            // Create country section heading
            const countryHeading = document.createElement("a");
            countryHeading.innerText = country;
            countryHeading.classList.add('country-heading');
            countryHeading.dataset.country = country;
            countryHeading.classList.add("d-block", "my-3");
            countryListDiv.appendChild(countryHeading);

            // Add click event listener to country heading
            countryHeading.addEventListener("click", () => {
                displayUniversitiesModal(country, universities);
            });
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Display universities for a course in a modal
function displayUniversities(courseName, universities, informationLink) {
    const modalTitle = document.getElementById("courseModalLabel");
    const modalContent = document.getElementById("modalContent");
    if (informationLink == "" || informationLink == null)
        informationLink = "https://www.liverpool.ac.uk/courses/undergraduate";
    // Set modal title
    modalTitle.innerText = courseName;

    // Clear previous modal content
    modalContent.innerHTML = "";

    // Create list of universities

    const universitiesList = document.createElement("ul");
    universitiesList.classList.add("list-group");
    universities.forEach((university) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerText = `${university.name} - ${university.country}`;
        universitiesList.appendChild(listItem);
    });
    const linkText = document.createElement("p");
    linkText.innerHTML = `To find out more, <a href="${informationLink}" target="_blank">click here!</a>.`;
    // Append universities list to modal content
    modalContent.appendChild(universitiesList);
    modalContent.appendChild(linkText);
    // Show the modal
    const courseModal = new bootstrap.Modal(
        document.getElementById("courseModal")
    );
    courseModal.show();
}

function displayCourses(universityName, courses) {
    const modalTitle = document.getElementById("courseModalLabel");
    const modalContent = document.getElementById("modalContent");

    // Set modal title
    modalTitle.innerText = universityName;
    // Clear previous modal content
    modalContent.innerHTML = "";

    // Create list of courses
    const coursesList = document.createElement("ul");
    coursesList.classList.add("list-group");
    courses.forEach((course) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        const courseLink = document.createElement("a");
        courseLink.href = `${courseLinkMap.get(course)}`;
        courseLink.innerText = course;
        listItem.appendChild(courseLink);
        coursesList.appendChild(listItem);
    });

    // Append courses list to modal content
    modalContent.appendChild(coursesList);

    // Show the modal
    const courseModal = new bootstrap.Modal(
        document.getElementById("courseModal")
    );
    courseModal.show();
}

function displayUniversitiesModal(country, universities) {
    const modalTitle = document.getElementById("courseModalLabel");
    const modalContent = document.getElementById("modalContent");

    // Set modal title
    modalTitle.innerText = country;

    // Clear previous modal content
    modalContent.innerHTML = "";

    // Create list of universities
    const universitiesList = document.createElement("ul");
    universitiesList.classList.add("list-group");
    universities.forEach((university) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerText = university.name;

        // Add click event listener to each university
        listItem.addEventListener("click", () => {
            // Add your onClick code here
            console.log("University clicked:", university.name);
        });

        universitiesList.appendChild(listItem);
    });

    // Append universities list to modal content
    modalContent.appendChild(universitiesList);

    // Show the modal
    const courseModal = new bootstrap.Modal(
        document.getElementById("courseModal")
    );
    courseModal.show();
}

