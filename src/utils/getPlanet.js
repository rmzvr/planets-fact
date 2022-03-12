export default function getPlanet(planets) {
  const path = window.location.pathname;
  const planetName = path.substring(1);

  const planet = planets.find(
    (planet) => planet.name.toLowerCase() === planetName
  );

  return planet;
}
