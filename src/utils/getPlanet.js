export default function getPlanet(planets) {
  const path = window.location.hash;
  const planetName = path.substring(2);

  const planet = planets.find(
    (planet) => planet.name.toLowerCase() === planetName
  );

  return planet;
}
