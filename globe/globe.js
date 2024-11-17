import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const visitedCountries = ["Philippines"];
const plannedCountries = ["Japan", "Canada", "Australia", "Netherlands"];

async function loadData() {
  const response = await fetch("./world.json");
  console.log(response)
  const data = await response.json();
  return data;
}

onload = async () => {
  const mapContainer = document.getElementById("globe");
  const width = mapContainer.clientWidth;
  const height = 500;
  const sensitivity = 75;

  const worldData = await loadData();

  let projection = d3
    .geoOrthographic()
    .scale(250)
    .center([0, 0])
    .rotate([0, -30])
    .translate([width / 2, height / 2]);

  const initialScale = projection.scale();
  let pathGenerator = d3.geoPath().projection(projection);

  let svg = d3
    .select(mapContainer)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .append("circle")
    .attr("fill", "#EEE")
    .attr("stroke", "#000")
    .attr("stroke-width", "0.2")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", initialScale);

  let map = svg.append("g");
  map
    .append("g")
    .attr("class", "countries")
    .selectAll("path")
    .data(worldData.features)
    .enter()
    .append("path")
    .attr("d", (d) => pathGenerator(d))
    .attr("fill", (d) =>
      visitedCountries.includes(d.properties.name)
        ? "#E63946"
        : plannedCountries.includes(d.properties.name)
        ? "#34883a"
        : "white"
    )
    .style("stroke", "black")
    .style("stroke-width", 0.3)
    .style("opacity", 0.8);

  const drag = d3.drag().on("drag", (event) => {
    const rotate = projection.rotate();
    const k = sensitivity / projection.scale();
    projection.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k]);
    svg.selectAll("path").attr("d", (d) => pathGenerator(d));
  });

  svg.call(drag);

  d3.timer(() => {
    const rotate = projection.rotate();
    const k = sensitivity / projection.scale();
    projection.rotate([rotate[0] - 1 * k, rotate[1]]);
    svg.selectAll("path").attr("d", (d) => pathGenerator(d));
  }, 200);
};
