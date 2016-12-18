class Graph {
  constructor(vertices = [], edges = 0) {
    this.vertices   = vertices;
    this.adjencency = this.fillAdjencencyArray();
    this.edges      = edges;
  }

  fillAdjencencyArray() {
    let arr = [];
    for (let i = 0; i < this.vertices.length; i++) {
      arr[i] = [];
      for (let j = 0; j < this.vertices.length; j++) {
        arr[i].push(0);
      }
    }
    return arr;
  }

  addEdge(v,w) {
    const a = this.vertices.indexOf(v);
    const b = this.vertices.indexOf(w);

    this.edges++;

    if(this.adjencency[a][b] === 1 ) {
      this.adjencency[a][b]++;
      return;
    }

    this.adjencency[a][b] = 1;
    this.adjencency[b][a] = 1;
  }

  showGraph() {
    let val = '  -> ';
    for (const v in this.vertices) {
      val += `${this.vertices[v]} `
    }
    console.log(val);
    for (const v in this.adjencency) {
      let value = `${this.vertices[v]} -> `;
      for (const w in this.adjencency[v]) {
        if (this.adjencency[v][w] !== undefined) {
          value += `${this.adjencency[v][w]} `
        }
      }
      console.log(value);
    }
  }

  getNumOfVertices() {
    return this.vertices.length;
  }

  getNumOfEdges() {
    return this.edges;
  }

  getValancy(vertex) {
    const vIndex = this.vertices.indexOf(vertex);
    let valency  = 0;
    for (var i = 0; i < this.adjencency.length; i++) {
      valency += (this.adjencency[i][vIndex] !== 0) ? this.adjencency[i][vIndex] : 0;
    }
    let valency2  = 0;
    for (var i = 0; i < this.adjencency.length; i++) {
      valency2 += (this.adjencency[vIndex][i] !== 0) ? this.adjencency[vIndex][i] : 0;
    }
    return (valency > valency2) ? valency : valency2;
  }

}

// Implementation
// #############################################
const vertices = ['a','b','c','d'];
const g = new Graph(vertices);
g.addEdge('a','b');
g.addEdge('a','d');
g.addEdge('b','c');
g.addEdge('b','d');
g.addEdge('c','b');
g.addEdge('d','d');
g.showGraph();
console.log();
console.log(`Number of edges: ${g.getNumOfEdges()}`);
console.log();
for (let i = 0; i < vertices.length; i++) {
  console.log(`Valency of ${vertices[i]}: ${g.getValancy(vertices[i])}`);
}
console.log();
