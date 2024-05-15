import { CollectionNumber } from "./CollectionNumbers";

export class Sorter {
  //   collection:number[];
  constructor(public collection: ISortable) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
            if (this.collection.compare(j,j+1)) {
               this.collection.swap(j,j+1)
              }
      }
    }
  }
}
