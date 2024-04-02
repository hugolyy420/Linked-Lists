import LinkedList from './linkedlist.js';

const testList = new LinkedList();
testList.prepend('B');
testList.prepend('A');
testList.append('C');
testList.append('D');
testList.append('E');
console.log(testList.toString()); // ( A ) -> ( B ) -> ( C ) -> ( D ) -> ( E ) -> null
console.log(testList.size()); // 5
console.log(testList.getHead()); // Node { value: 'A', nextNode: Node { value: 'B', nextNode: Node { value: 'C', nextNode: [Node] } } }
console.log(testList.getTail()); // Node { value: 'E', nextNode: null }
console.log(testList.at(3)); // Node { value: 'D', nextNode: Node { value: 'E', nextNode: null } }
testList.pop();
console.log(testList.toString()); // ( A ) -> ( B ) -> ( C ) -> ( D ) -> null
console.log(testList.contains('B')); // true
console.log(testList.find('C')); // 2
testList.insertAt('Test', 3);
console.log(testList.toString()); // ( A ) -> ( B ) -> ( C ) -> ( Test ) -> ( D ) -> null
testList.insertAt('Test Again', 8); // Error: No such index. Cannot insert.
testList.removeAt(3);
console.log(testList.toString()); // ( A ) -> ( B ) -> ( C ) -> ( D ) -> null
