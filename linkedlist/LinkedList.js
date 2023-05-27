"use strict";
class Link {
    constructor(d) {
        this.d = d;
        this.data = d;
        this.next = null;
    }
    set setNext(link) {
        this.next = link;
    }
    get getNext() {
        return this.next;
    }
    get getData() {
        return this.data;
    }
    set setData(data) {
        this.data = data;
    }
}
class LinkedList {
    constructor(head) {
        this.head = head;
    }
    addNext(node) {
        if (!node)
            return;
        if (!head) {
            this.head = node;
            return;
        }
        else {
            let temp = this.head;
            while (temp && temp.getNext != null) {
                temp = temp.getNext;
            }
            temp.setNext = node;
        }
    }
    printList() {
        if (this.head == null) {
            console.log("Nothing to print");
        }
        else {
            let temp = this.head;
            while (temp) {
                console.log(temp.getData);
                temp = temp.getNext;
            }
        }
    }
}
let head = new Link(5);
let list = new LinkedList(head);
list.addNext(new Link(4));
list.addNext(new Link(3));
list.addNext(new Link(4));
list.addNext(new Link(5));
list.printList();
