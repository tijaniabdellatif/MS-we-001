import { Sorter } from "./classes/Sorter";
import { CollectionNumber } from "./classes/CollectionNumbers";
import { StringCollection } from "./classes/StringCollection";
const collection = new CollectionNumber([1,-5,-2,10,5,80,70]);
const stringCollection = new StringCollection('abdellatif tijani');
const sorterString = new Sorter(stringCollection);
const sorter = new Sorter(collection);
sorter.sort();
sorterString.sort();
console.log(stringCollection.data);
console.log(collection.data);

