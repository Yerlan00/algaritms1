// Очередь с О(1) сложностью операций
// Создайте очередь, в которой будут реализованы операции на
// добавление элементов в конец очереди, удаление первого
// элемента из очереди и вычисление размера очереди с сложностью
// алгаритма О(1)
// class Queue {
// 	constructor() {
// todo
// }
// enqueue(item) {
// todo: добавить элемент в конец очереди
// }
// dequeue() {
// todo: удалить первый элемент из очереди
// }
// get size() {
// todo: возвращает размер списка
// нельзя использовать геттер
// }
// }
// ============================================================
// структура данных linkedList:

class LinkedList {
  #length = 0;
  #head;
  #tail;
  addToTail(value) {
    const node = {
      value,
      next: null,
    };
    if (this.#length === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail = node;
    }
    this.#length++;
  }
  removeFromHead() {
    if (this.#length === 0) {
      return;
    }
    const value = this.#head.value;
    this.#length--;
    return value;
  }
  size() {
    return this.#length;
  }
}

class Queue extends LinkedList {
  constructor() {
    super();
    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }
  get size() {
    return super.size();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size); // 3
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.size); // 0
