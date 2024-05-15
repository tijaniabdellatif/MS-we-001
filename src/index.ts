import { Sorter } from "./classes/Sorter";
import { CollectionNumber } from "./classes/CollectionNumbers";
import { StringCollection } from "./classes/StringCollection";
import { LinkedList } from "./classes/LinkedList";
import { PrettyConsole } from "@tijaniabdellatif/shared";
const logger = new PrettyConsole();
const linkedlist = new LinkedList();
const stringCollection = new StringCollection('tijaniabdellatif');
const numberCollection = new CollectionNumber([1,-5,-10,15-25,100,80])
const sorter = new Sorter(stringCollection);
sorter.sort();
console.log(stringCollection);

