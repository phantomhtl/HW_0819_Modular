import { getRandomDestination } from './utility.mjs';

export function renderDestinations(destinations) {
    const destinationList = document.getElementById('destinationList');
    destinationList.innerHTML = '';

    destinations.forEach(destination => {
        const destinationCard = document.createElement('div');
        destinationCard.className = 'destination-card';
        destinationCard.innerHTML = `
            <h2>${destination.name}</h2>
            <p>Must see locations: ${destination.mustSee.join(', ')}</p>
        `;
        destinationList.appendChild(destinationCard);
    });
}

export function showRandomDestination(destinations) {
    const randomDestination = getRandomDestination(destinations);
    renderDestinations([randomDestination]);
}


