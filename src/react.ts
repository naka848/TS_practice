interface Shape{
    readonly name:string;
    getArea: ()=>number
}

interface Quadrangle{
    sideA: number;
    sideB?:number;
    sideC?:number;
    sideD?:number;
}

class Rectangle implements Shape,Quadrangle{
    name= 'rectangle';
    sideA:number;
    sideB:number;

    constructor(sideA:number,sideB:number){
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea = ()=>this.sideA*this.sideB;
    
}

const rectangle = new Rectangle(5,8);
const result = rectangle.getArea();
console.log(rectangle.name +'の面積: '+result)

// class Square extends Rectangle{
//     name = 'square';
//     side: number;

//     constructor(side:number){
//         super(side,side);
//     }
// }


