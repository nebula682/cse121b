/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

// Declare a global empty array variable to store a list of temples named templeList
let templeList = [];

const displayTemples = temples => {
    temples.forEach(temple => {
        // Create HTML elements
        const article = document.createElement('article');
        const heading = document.createElement('h3');
        const image = document.createElement('img');

        // Set temple's name to heading
        heading.textContent = temple.templeName;

        // Set temple's image URL to image src and location to alt attribute
        image.src = temple.imageUrl;
        image.alt = temple.location;

        // Append heading and image to article
        article.appendChild(heading);
        article.appendChild(image);

        // Append article to templesElement
        templesElement.appendChild(article);
    });
};


/* async displayTemples Function */

const getTemples = async () => {
    try {
        // Declare a const variable named response that awaits the fetch method
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); // Replace 'https://example.com/templeData' with the actual URL

        // Convert fetch response into a JavaScript object and assign it to templeList global array variable
        templeList = await response.json();

        // Call the displayTemples function and pass it the list of temples
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};



/* async getTemples Function using fetch()*/


/* reset Function */
const reset = () => {
    // Clear all <article> elements from templesElement
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset(); // Clear the output

    const filter = document.getElementById('filtered').value; // Get the value of the dropdown menu

    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter value');
    }
};


getTemples();

/* Event Listener */

document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templeList);
});

