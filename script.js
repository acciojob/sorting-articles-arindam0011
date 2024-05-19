//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 
			   'Pierce the Veil', 'Norma Jean', 'The Bled', 
			   'Say Anything', 'The Midway State', 
			   'We Came as Romans', 'Counterparts', 
			   'Oh, Sleeper', 'A Skylit Drive', 
			   'Anywhere But Here', 'An Old Dog'];

function stripArticle(bands) {
    return bands.replace(/^(a |an |the )/i, '').trim();
}
bands.sort(stripArticle());
function displayBands() {
    const bandList = document.getElementById('brand');
    bands.forEach(brand => {
        const li = document.createElement('li');
        li.textContent = band;
        bands.appendChild(li);
    });