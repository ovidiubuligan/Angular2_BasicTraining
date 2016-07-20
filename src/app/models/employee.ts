   export class Employee 
   {
        ID : Number
        Name : string
      	Department : string
        Salary : Number
        Card : string

        constructor(ID: Number,Name: string, Department : string, Salary: Number, Card: string){
          this.ID = ID
          this.Name =Name
      	  this.Department= Department
          this.Salary = Salary
          this.Card = Card 
        }
   }