//#region ESERCIZIO 1
/* Creare una classe Animale. La classe avrà le proprietà nome, età, colore, zampe e creerà diversi metodi. */
class Animal {
    constructor(name,age,color,paws){
        this.name = name
        this.age = age
        this.color = color
        this.paws = paws
    }
    animalInfo(){
        const info= `${this.name} is ${this.age} years old, its color is ${this.color} and it has ${this.paws} paws`
        return info
    }
    getAnimalAge(){

    }
    getAnimalColor(){

    }
}
//#endregion
//#region ESERCIZIO 1 e 2 
// Creare una classe figlio Cane e Gatto dalla classe Animale
class Dog extends Animal {
    constructor(name,age,color,paws,breed){
    super(name,age,color,paws)
    this.breed = breed    
    }
    animalInfo(){
        const dogInfo = super.animalInfo()
        return `${dogInfo} and it's a ${this.breed}`
    }
}
class Cat extends Animal {
}
//#endregion