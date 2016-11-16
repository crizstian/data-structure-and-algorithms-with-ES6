class Vertex {
  constructor(label) {
    this.label = label;
  }
}

class Graph {
  constructor(vertices = []) {
    this.vertices   = vertices;
    this.adjencency = [];
    for (let i = 0; i < this.vertices.length; i++) {
      this.adjencency[i] = [];
      for (let j = 0; j < this.vertices.length; j++) {
        this.adjencency[i].push(0);
      }
    }
  }

  addEdge(v,w) {
    const a = this.vertices.indexOf(v);
    const b = this.vertices.indexOf(w);

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

}

// Implementation
// #############################################
const vertices = ['a','b','c','d','e'];

let g = new Graph(vertices);
g.addEdge('a','b');
g.addEdge('a','c');
g.addEdge('b','d');
g.addEdge('c','e');
g.showGraph();
