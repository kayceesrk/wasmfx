// Node class
class Node
{
    constructor(data, left, right)
    {
        this.data = data;
        this.left = left;
        this.right = left;
    }
}

function mkBinaryTree(depth) {
  var prev = null;
  for (let i = 0; i < depth; i++) {
    prev = new Node(i,prev,prev);
  }
  return prev;
}


function iterator(t, f) {
  if (t == null) return;
  f(t.data);
  iterator(t.left, f);
  iterator(t.right, f);
}

function* tree_gen(t) {
  if (t == null) return;
  yield t.data;
  yield* tree_gen(t.left);
  yield* tree_gen(t.right);
}

function generator(t, f) {
  const g = tree_gen(t);
  while (true) {
    var v = g.next();
    if (v.done) break;
    f (v.value);
  }
}

const {performance} = require('perf_hooks');

function run(n, f, t) {
  for (let i  = 0; i < n; i++) f(t, (e) => e)
}

let t = mkBinaryTree(25)

// Warm up
const W = 3
run(W, iterator, t)
run(W, generator, t)

// Measuree
const M = 5

let t0 = performance.now()
run(M, iterator, t)
console.log("Iterator: " + (performance.now() - t0)/M + " ms")

t0 = performance.now()
run(M, generator, t)
console.log("Generator: " + (performance.now() - t0)/M + " ms")
