export default function getPlanet(planets, path) {
  const planet = planets.find((planet) => planet.name.toLowerCase() === path);

  return planet;
}
