class Link<N> {
  private next: Link<N> | null;
  private data: N;
  constructor(private d: N) {
    this.data = d;
    this.next = null;
  }

  set setNext(link: Link<N>) {
    this.next = link;
  }

  get getNext() {
    return this.next;
  }

  get getData() {
    return this.data;
  }

  set setData(data: N) {
    this.data = data;
  }
}

class LinkedList<U> {
  constructor(private head: Link<U> | null) {}

  addNext(node: Link<U> | null): void {
    if (!node) return;
    if (!head) {
      this.head = node;
      return;
    } else {
      let temp = this.head;
      while (temp && temp.getNext != null) {
        temp = temp.getNext;
      }
      temp!.setNext = node;
    }
  }
  printList(): void {
    if (this.head == null) {
      console.log("Nothing to print");
    } else {
      let temp: Link<U> | null = this.head;
      while (temp) {
        console.log(temp.getData);
        temp = temp.getNext;
      }
    }
  }
}
let head: Link<number> = new Link(5);
let list = new LinkedList<number>(head);
list.addNext(new Link(4));
list.addNext(new Link(3));
list.addNext(new Link(4));
list.addNext(new Link(5));
list.printList();
