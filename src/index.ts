import { Sorter } from "./classes/Sorter";
import { CollectionNumber } from "./classes/CollectionNumbers";
import { StringCollection } from "./classes/StringCollection";
import { LinkedList } from "./classes/LinkedList";
import { PrettyConsole } from "@tijaniabdellatif/shared";

const logger = new PrettyConsole();

const linkedlist = new LinkedList();

linkedlist.add(4);
linkedlist.add(-2);
linkedlist.add(6);
linkedlist.add(-10);
linkedlist.add(50);
logger.success('Everything is okey');
logger.print('black','green','------------------------')
logger.print('black','green','let see our  linked list ');
linkedlist.print();
const LinkedListSorter = new Sorter(linkedlist);
LinkedListSorter.sort();
logger.success('Everything is okey');
logger.print('black','green','------------------------')
logger.print('black','green','let see our linked sorted linked list');
linkedlist.print();

logger.clear();
logger.warn('Your about to have another statement');




// const collection = new CollectionNumber([1,-5,-2,10,5,80,70]);
// const stringCollection = new StringCollection('abdellatif tijani');
// const sorterString = new Sorter(stringCollection);
// const sorter = new Sorter(collection);
// sorter.sort();
// sorterString.sort();
// console.log(stringCollection.data);
// console.log(collection.data);

