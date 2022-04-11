export class Quote {
    showDescription:boolean;
    constructor(public id:number, public quote: string, public author: string, public name:string, public publishDate: Date){
        this.showDescription=false;
    }

}
