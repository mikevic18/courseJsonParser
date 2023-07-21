# Project Overview: Study Abroad Course List / JSON Parser

## Design Methodology

The project aims to create a web page that lists various courses available for studying abroad at the University. Each course will be clickable, and upon clicking, it will display a list of partner universities where the course can be studied. The overall design methodology follows these steps:

1. Fetch Course Data:
   - The web page fetches course data from a JSON feed available at the URL: `https://www.liverpool.ac.uk/app-data/study-abroad/courses.json`.
   - The fetched data is processed and organized to create necessary data structures for efficient course and university listings.

2. Data Structures:
   - The project uses several data structures to organize and store course and university information:
     - `const coursesByUniversity = new Map();`: Stores the courses grouped by the partner universities.
     - `const universitiesByCountry = new Map();`: Stores the partner universities grouped by the countries.
     - `const courseLinkMap = new Map();`: Stores the information link for each course, using the course name as the key.

3. Rendering the Web Page:
   - The web page consists of a header, a jumbotron with a brief description, and a button group for choosing different listing views.
   - The course list, country list, and partner university list are contained in separate divs that can be shown or hidden based on the user's selection.
   - Each course name is a clickable link that opens a modal to display the list of partner universities where the course can be studied.
   - The university names are clickable links that open a modal to display the list of courses offered by the selected partner university.
   - The country names are clickable headings that open a modal to display the list of partner universities in the selected country.

4. Modals for Course and University Details:
   - Clicking on a course name or university name opens a Bootstrap modal that displays the relevant details.
   - The modals contain the title (course name or university name) and a list of courses or universities, respectively.
   - The modals also include a link to additional information about the course or the partner university.


# script.js
This code is responsible for creating a web page that lists all the courses available at a university. Each course name is displayed as a link, and when clicked, it provides a list of the names and countries of partner universities where the course can be studied.

### Functionality Overview

1. The code fetches data from a JSON feed that contains information about the courses and their partner universities.
2. It iterates over each course in the data and creates a link for each course.
3. When a course link is clicked, it displays a modal with the names and countries of partner universities where the course can be studied.
4. The code also creates links for each university, which when clicked, display a modal with the courses offered by that university.
5. Additionally, it creates section headings for each country and adds click event listeners to them to display a modal with the universities in that country.

### Key Components

1. `coursesByUniversity`: A `Map` object that stores the courses offered by each university.
2. `universitiesByCountry`: A `Map` object that stores the universities grouped by country.
3. `courseLinkMap`: A `Map` object that stores unique information links for each course.
4. `courseListDiv`, `countryListDiv`, `universityListDiv`: DOM elements representing div containers where the course list, country list, and university list will be displayed respectively.
5. Fetching JSON data: The code fetches data from "https://www.liverpool.ac.uk/app-data/study-abroad/courses.json" using the Fetch API.
6. Iterating over courses: The code iterates over each course in the fetched data using `.forEach()`.
7. Creating course links: For each course, a link element (`<a>`) is created with appropriate attributes and event listeners added to display partner universities when clicked.
8. Storing course information: The code stores the course information in `coursesByUniversity` and `universitiesByCountry` maps for later use.
9. Creating university links: For each university, a link element (`<a>`) is created with appropriate attributes and event listeners added to display courses offered by that university when clicked.
10. Creating country section headings: For each country, a link element (`<a>`) is created with appropriate attributes and event listeners added to display universities in that country when clicked.
11. Displaying partner universities in a modal: The `displayUniversities()` function is responsible for displaying the names and countries of partner universities for a selected course in a modal. It creates the necessary HTML elements and appends them to the modal content.
12. Displaying courses offered by a university in a modal: The `displayCourses()` function is responsible for displaying the courses offered by a selected university in a modal. It creates the necessary HTML elements and appends them to the modal content.
13. Displaying universities in a country in a modal: The `displayUniversitiesModal()` function is responsible for displaying the universities in a selected country in a modal. It creates the necessary HTML elements and appends them to the modal content.
