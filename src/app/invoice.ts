export class Invoice {
    constructor(
        public index: number,
        public type: string,
        public from: string,
        public to: string,
        public price: number,
        public pricePerDay: number) { }
}