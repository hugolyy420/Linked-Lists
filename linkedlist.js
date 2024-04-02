import Node from './node.js';

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let temp = this.head;
      while (temp.nextNode !== null) temp = temp.nextNode;
      temp.nextNode = new Node(value, null);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let size = 0;
    let temp = this.head;
    while (temp !== null) {
      size += 1;
      temp = temp.nextNode;
    }
    return size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head == null) return null;
    let temp = this.head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  at(index) {
    let currentIndex = 0;
    let temp = this.head;
    while (currentIndex !== index && temp !== null) {
      temp = temp.nextNode;
      currentIndex += 1;
    }
    return temp;
  }

  pop() {
    if (this.head == null) throw new Error('Cannot delete');
    if (this.head.nextNode == null) {
      this.head = null;
      return;
    }
    let cur = this.head;
    let prev = null;
    while (cur.nextNode !== null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    if (this.head == null) return false;
    let temp = this.head;
    while (temp.value !== value && temp.nextNode !== null) temp = temp.nextNode;
    if (temp.value === value) return true;
    else if (temp.nextNode == null) return false;
  }

  find(value) {
    if (this.head == null) return null;
    let currentIndex = 0;
    let temp = this.head;
    while (temp.value !== value && temp.nextNode !== null) {
      temp = temp.nextNode;
      currentIndex += 1;
    }
    if (temp.value === value) return currentIndex;
    else if (temp.nextNode == null) return null;
  }

  toString() {
    if (this.head == null) return 'null';
    let temp = this.head;
    let string = '';
    while (temp !== null) {
      string += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    return (string += 'null');
  }

  insertAt(value, index) {
    if (this.head == null) throw new Error('Empty list. Cannot insert');
    if (index == 0) {
      this.head = new Node(value, this.head);
      return;
    }
    let cur = this.head;
    let prev = null;
    let currentIndex = 0;
    while (index !== currentIndex && cur !== null) {
      prev = cur;
      cur = cur.nextNode;
      currentIndex += 1;
    }
    if (index === currentIndex) prev.nextNode = new Node(value, cur);
    else if (cur == null) throw new Error('No such index. Cannot insert.');
  }

  removeAt(index) {
    if (this.head == null) throw new Error('Empty list. Cannot remove');
    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }
    let cur = this.head;
    let prev = null;
    let currentIndex = 0;
    while (index !== currentIndex && cur !== null) {
      prev = cur;
      cur = cur.nextNode;
      currentIndex += 1;
    }
    if (index === currentIndex) prev.nextNode = cur.nextNode;
    else if (cur == null) throw new Error('No such index. Cannot delete.');
  }
}
