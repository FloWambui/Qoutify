export class Quote {
    showDescription:boolean;
    constructor(public id:number, public quote: string, public author: string, public name:string,){
        this.showDescription=false;
    }
    // id!: number;
    // name!: string;
    // author!: string;
    // writer!: string;
}
