# Graph Data Structure

### Code Examples
- [Graph Data Structure](./graph.module.js)
- [Graph Search Algorithms](./graph.search.js)
- [Import Module](./index.js)

### Description

There are two main parts of a graph:

- The **vertices** (nodes) where the data is stored i.e. the numbers in the image
- The **edges** (connections) which connect the nodes i.e. the lines between the numbers in the image

![](https://cdn-images-1.medium.com/max/600/0*cqxOTC4NOK62xow1.png)

Graphs can be **undirected** or **directed**

- Undirected graph: The relationship exists in both directions.
- Directed graph: The relationships are based on the direction of the edges. It can be a one way relationship or a two-way relationship, but it must be explicitly stated.

common operations you can perform on graphs:

**Additions**

- `addNode`: adds vertices to your graph
- `addEdge`: creates edges between two given vertices in your graph

**Removals**

- `removeNode`: removes vertices from your graph
- `removeEdge`: removes edges between two given vertices in your graph

**Search**

- `contains`: checks if your graph contains a given value
- `hasEdge`: checks if a connection exists between two given nodes in your graph
- `dfs`: Depth First Search (DFS) algorithm traverses a graph in a depthward motion and uses a stack to remember to get the next vertex to start a search, when a dead end occurs in any iteration.
- `bfs`: Breadth First Search (BFS) algorithm traverses a graph in a breadthward motion and uses a queue to remember to get the next vertex to start a search, when a dead end occurs in any iteration.

![](https://i2.wp.com/codingsec.net/wp-content/uploads/2016/03/dfs-bfs-codingsec.gif)


**Display**

- `showGraph`: displays the complete graph
- `showVertex`: displays one vertex
- `showVertexs`: displays all the vertexs in the graph

In addition to this, graphs can be weighted or unweighted. All this means is that there is some value or cost associated with the edges between the vertices.

### Example Use Cases:

- Electrical Engineering − The concepts of graph theory is used extensively in designing circuit connections. The types or organization of connections are named as topologies. Some examples for topologies are star, bridge, series, and parallel topologies.

- Computer Science − Graph theory is used for the study of algorithms. For example,

- Kruskal's Algorithm
- Prim's Algorithm
- Dijkstra's Algorithm

- Computer Network − The relationships among interconnected computers in the network follows the principles of graph theory.

- Science − The molecular structure and chemical structure of a substance, the DNA structure of an organism, etc., are represented by graphs.

- Linguistics − The parsing tree of a language and grammar of a language uses graphs.

- General − Routes between the cities can be represented using graphs. Depicting hierarchical ordered information such as family tree can be used as a special type of graph called tree.
Graphs are used to model many different types of real-world systems.

Another example of a real word system that can be modeled by a graph is a consumer market, where vertices represent both institutions (vendors) and consumers.

### References

- [A Gentle Introduction to Data Structures: How Graphs Work](https://medium.freecodecamp.com/a-gentle-introduction-to-data-structures-how-graphs-work-a223d9ef8837#.ojpoqfcxa)
- [Data Structure - Graph Data Structure](https://www.tutorialspoint.com/data_structures_algorithms/graph_data_structure.htm)
