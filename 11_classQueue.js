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
// =============================================================================
// структура данных HashTable

class Queue {
  #storage = {};
  #last = 0;
  #first = 0;
  enqueue(item) {
    this.#storage[this.#last] = item;
    this.#last++;
  }
  dequeue() {
    if (this.size === 0) {
      return;
    }
    const value = this.#storage[this.#first];
    delete this.#storage[this.#first];
    this.#first++;
    return value;
  }
  get size() {
    return this.#last - this.#first;
  }
  print() {
    console.log(this.#storage);
  }
}

const table = new Queue();
table.enqueue(1);
table.enqueue(2);
table.enqueue(3);
console.log(table.size); // 3
table.print(); // { '0': 1, '1': 2, '2': 3 }
table.dequeue();
table.dequeue();
table.dequeue();
console.log(table.size); // 0
table.print(); // {}
