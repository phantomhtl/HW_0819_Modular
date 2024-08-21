import { getDestinations } from './data.mjs';
import { renderDestinations, showRandomDestination } from './ui.mjs';
import { filterDestinations } from './utility.mjs';

document.getElementById('searchBtn').addEventListener('click', async () => {
    const searchInput = document.getElementById('destinationInput').value.trim();
    if (searchInput) {
        const destinations = await getDestinations();
        const filteredDestinations = filterDestinations(destinations, searchInput);
        renderDestinations(filteredDestinations);
    }
});

document.getElementById('randomBtn').addEventListener('click', async () => {
    const destinations = await getDestinations();
    showRandomDestination(destinations);
});


