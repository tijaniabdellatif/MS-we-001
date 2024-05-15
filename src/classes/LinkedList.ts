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

  atPosition(index: number): NodeElement {
    if (!this.head) {
      throw new Error("index is out of scoope");
    }

    let counter = 0;
    let node = this.head as NodeElement;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next as NodeElement;
    }

    throw new Error("Index is out of the scoope");
  }

  compare(left: number, right: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.atPosition(left).data > this.atPosition(right).data;
  }

  swap(left: number, right: number): void {
    let leftTemp = this.atPosition(left);
    let rightTemp = this.atPosition(right);
    let temp = leftTemp.data;
    leftTemp.data = rightTemp.data;
    rightTemp.data = temp;
  }

  print():void{

     if(!this.head){
        console.log('No list')
        return;
     }

     let node = this.head as NodeElement | null;
     while(node){

        console.log(node.data);
        node = node.next;
     }
  }
}
