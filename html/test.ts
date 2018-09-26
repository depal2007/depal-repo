class Person{
    Id: number
    Name: Name
    constructor(name: string){
        this.Name.FirstName = name
    }
}

interface Name{
    FirstName: string
    LastName: string
    constructor(name: string)
}

var p = new Person("Pasha")
p.Name.LastName = "Deev"
