class Sorter {

  constructor() {
    // your implementation
    this.arr=[];
    this.count=0;
    this.comparator;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
    this.count=this.count+1;
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.count;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    let newArr=[];
    indices.sort(compareNumbers);
    for (let i=0; i<indices.length; i++){
    newArr.push(this.arr[indices[i]])
  }

    if (this.comparator){
  newArr.sort(this.comparator)}
  else {newArr.sort(compareNumbers)
  }
function compareNumbers(a, b) {
  return a - b;
}

    for (let j=0; j<indices.length; j++){
  this.arr[indices[j]] = newArr[j]
  }
  }
  setComparator(compareFunction) {
    // your implementation
    this.comparator=compareFunction;
  }

}

module.exports = Sorter;