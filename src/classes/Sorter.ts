export class Sorter {
  //   collection:number[];
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //if collection in array of number

        
        if(this.collection instanceof Array){
            if (this.collection[j] > this.collection[j + 1]) {
                let temp = this.collection[j];
                this.collection[j] = this.collection[j + 1];
                this.collection[j + 1] = temp;
              }
        }

        if(typeof this.collection === "string"){

             
        }
     

        // what if it's a string


      }
    }
  }
}
