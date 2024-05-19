//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 
			   'Pierce the Veil', 'Norma Jean', 'The Bled', 
			   'Say Anything', 'The Midway State', 
			   'We Came as Romans', 'Counterparts', 
			   'Oh, Sleeper', 'A Skylit Drive', 
			   'Anywhere But Here', 'An Old Dog'];

function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands ignoring articles
const sortedBands = bands.slice().sort((a, b) => stripArticle(a).toLowerCase().localeCompare(stripArticle(b).toLowerCase()));

// Function to display the sorted bands on the webpage
function displayBands() {
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
