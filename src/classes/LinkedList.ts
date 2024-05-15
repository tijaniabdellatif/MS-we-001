class NodeElement {
  next: NodeElement | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: NodeElement | null = null;

  add(data: number): void {
    const node = new NodeElement(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }
}
