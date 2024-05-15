export class StringCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return (
      this.data[left].toLocaleLowerCase() > this.data[right].toLocaleLowerCase()
    );
  }

  swap(left: number, right: number): void {
    const caractere = this.data.split("");
    let temp = caractere[left];
    caractere[left] = caractere[right];
    caractere[right] = temp;
    this.data = caractere.join("");
  }
}
