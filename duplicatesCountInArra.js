// exple 1================
const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]
const counts = {};
arr.map((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts)





