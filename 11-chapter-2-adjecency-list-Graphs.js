class Graph {
  constructor(vertices = [], edges = 0) {
    this.vertices   = vertices;
    this.adjencency = this.fillAdjencencyList();
    this.edges      = edges;
    this.marked     = new Array(vertices).fill(false);
  }

  fillAdjencencyList() {
    let arr = [];
    for (let i = 0; i < this.vertices; i++) {
      arr[i] = [];
    }
    return arr;
  }

  addEdge(v,w) {
    if (this.adjencency[v].indexOf(w) === -1 && this.adjencency[w].indexOf(v) === -1) {
      this.adjencency[v].push(w);
      this.adjencency[w].push(v);
      this.edges++;
    }
  }

  showGraph() {
    let val = '';
    for (const v in this.adjencency) {
      let value = `${v} -> `;
      for (const w in this.adjencency[v]) {
        if (this.adjencency[v][w] !== undefined) {
          value += `${this.adjencency[v][w]} `
        }
      }
      console.log(value);
    }
  }

  dfs(node) {
    if (this.marked[node]) {
      return;
    }
    console.log(`visited node at: ${node}`);
    this.marked[node] = true;
    if (this.adjencency[node] !== undefined) {
      for (const w in this.adjencency[node]) {
         this.dfs(this.adjencency[node][w]);
      }
    }
  }

  bfs(node) {
    let queue = [node];
    while (queue.length > 0) {
      let v = queue.shift();
      this.marked[v] = true;
      console.log(`visited node at: ${v}`);
      for (const w in this.adjencency[v]) {
        let n = this.adjencency[v][w];
        if (!this.marked[n]) {
          queue.push(this.adjencency[v][w]);
        }
      }
    }
  }
}

// Implementation
// #############################################
const g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
let t0 = new Date().getTime();
g.dfs(0);
let t1 = new Date().getTime();
console.log("Call to dfs took " + (t1 - t0) + " milliseconds.")

g.marked = new Array(g.vertices).fill(false);
console.log();
let t2 = new Date().getTime();
g.bfs(0);
let t3 = new Date().getTime();
console.log("Call to bfs took " + (t3 - t2) + " milliseconds.")
