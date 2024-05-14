import { Sorter } from "./classes/Sorter";
import { CollectionNumber } from "./classes/CollectionNumbers";

const collection = new CollectionNumber([1,-5,-2,10,5,80,70])
const sorter = new Sorter(collection);
sorter.sort();
console.log(collection.data);

