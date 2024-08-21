export function filterDestinations(destinations, searchInput) {
  return destinations.filter(destination => 
      destination.name.toLowerCase().includes(searchInput.toLowerCase()) 
  );
}

export function getRandomDestination(destinations) {
  const randomIndex = Math.floor(Math.random() * destinations.length);
  return destinations[randomIndex];
}

