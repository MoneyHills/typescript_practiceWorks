// 1. Interface for Magical Item
interface IMagicalItem {
    name: string
    type: string
    powerLevel: number
    isRare: boolean
}

// 2. Class implementing IMagicalItem
class MagicalItem implements IMagicalItem {
    name: string
    type: string
    powerLevel: number
    isRare: boolean

    constructor (name: string, type: string, powerLevel: number, isRare: boolean) {
        this.name = name
        this.type = type
        this.powerLevel = powerLevel
        this.isRare = isRare
    }

    displayInfo(){
        const message = `${this.name} is a ${this.isRare ? 'rare' : 'common'} ${this.type} with ${this.powerLevel} power.`
        console.log(message);
    }
}

// Function to compare power levels of two items
function comparePower(item1: MagicalItem, item2: MagicalItem){
    if (item1.powerLevel > item2.powerLevel){
        return item1.name
    } else {
        return item2.name
    }
}

// Generic class for inventory


// Example items

const bootsOfSpeed = new MagicalItem('Boots of Speed', 'armor', 900, true)
const helmetOfWisdom = new MagicalItem('Helmet of Wisdom', 'armor', 890, false)



// Create inventory and add items

// Display all item info


// Compare power levels
const powerfulName = comparePower(bootsOfSpeed, helmetOfWisdom)
console.log('powerful Name is: ', powerfulName);


// Access property using keyof

