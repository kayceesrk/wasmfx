// Node class
class Node
{
    constructor(data,left,right)
    {
        this.data = data;
        this.left = left;
        this.right = left;
    }
}

function mkBinaryTree(depth) {
  var prev = null;
  for (i = 0; i < depth; i++) {
    prev = new Node(i,prev,prev);
  }
  return prev;
}


function iterator (t, f) {
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

function generator (t, f) {
  const g = tree_gen(t);
  while (true) {
    var v = g.next();
    if (v.done) break;
    f (v.value);
  }
}

const {performance} = require('perf_hooks');

//DEBUG
var t = mkBinaryTree(3);
iterator (t, (e) => console.log(e));
generator (t, (e) => console.log(e));

//PERF
var t = mkBinaryTree(25);

var t0 = performance.now()
iterator (t, (e) => e);
console.log("Iterator:" + (performance.now() - t0) + " ms")

var t0 = performance.now()
generator (t, (e) => e);
console.log("Generator:" + (performance.now() - t0) + " ms")
