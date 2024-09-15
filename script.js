const nodes = [
  { id: "Análisis Matemático I", x: 100, y: 50 },
  { id: "Lógica y Metodología de las Ciencias", x: 100, y: 100 },
  { id: "Fundamentos de Informática", x: 100, y: 150 },
  { id: "Matemática Discreta", x: 100, y: 200 },
  { id: "Álgebra", x: 100, y: 250 },
  // Agrega el resto de las materias con sus posiciones
];

const links = [
  { source: "Análisis Matemático I", target: "Programación I" },
  { source: "Matemática Discreta", target: "Programación II" },
  // Agrega las relaciones entre materias
];

// Configura el diagrama SVG
const svg = d3.select("#diagram");

// Crea líneas para las conexiones
const link = svg.selectAll(".link")
  .data(links)
  .enter()
  .append("line")
  .attr("class", "link")
  .attr("x1", d => nodes.find(n => n.id === d.source).x)
  .attr("y1", d => nodes.find(n => n.id === d.source).y)
  .attr("x2", d => nodes.find(n => n.id === d.target).x)
  .attr("y2", d => nodes.find(n => n.id === d.target).y);

// Crea nodos para las materias
const node = svg.selectAll(".node")
  .data(nodes)
  .enter()
  .append("g")
  .attr("class", "node")
  .attr("transform", d => `translate(${d.x}, ${d.y})`)
  .on("click", (event, d) => highlightConnections(d.id));

// Dibuja círculos para las materias
node.append("circle")
  .attr("r", 20);

// Añade texto con el nombre de las materias
node.append("text")
  .attr("dx", -30)
  .attr("dy", 4)
  .text(d => d.id);

// Función para resaltar conexiones
function highlightConnections(selectedNode) {
  svg.selectAll("circle").classed("dimmed", true);
  svg.selectAll("text").classed("dimmed", true);
  svg.selectAll(".link").classed("dimmed", true);

  svg.selectAll("circle").filter(d => d.id === selectedNode)
      .classed("dimmed", false)
      .classed("highlighted", true);

  svg.selectAll(".link").filter(d => d.source === selectedNode || d.target === selectedNode)
      .classed("dimmed", false);

  svg.selectAll("circle").filter(d => {
      return links.some(l => l.source === selectedNode && l.target === d.id) ||
             links.some(l => l.target === selectedNode && l.source === d.id);
  }).classed("dimmed", false);
}

// Función para restaurar el diagrama
svg.on("click", () => {
  svg.selectAll("circle").classed("dimmed", false).classed("highlighted", false);
  svg.selectAll("text").classed("dimmed", false);
  svg.selectAll(".link").classed("dimmed", false);
});
