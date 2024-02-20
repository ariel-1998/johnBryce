class Speaker {
    constructor(
    private color: string,
    private volume: number
    ) {
        if (this.color !== `black` && this.color !== `white` && this.color !== `gray`) {
            throw new Error("color is not recognized.");
        }
        if (this.volume < 0 || this.volume > 10) {
            throw new Error("volume is not defined.");
        }
    }

    getColor() {
        return this.color
    }

    getVolume() {
        return this.volume
    }

    setColor(col: string) {
        this.color = col
    }

    setVolume(vol: number) {
        this.volume = vol
    }

    turnLightsOn() {
        return `the lights have turned on!`
    }    

    turnLightsOff() {
        return `the lights have turned off!`
    }    

    turnVolumeOn() {
        return `the volume has turned on!`
    }    

    turnVolumeOff() {
        return `the volume has turned off!`
    }    

    speakerStatus() {
        return `volume is: ${this.volume},  color is: ${this.color}`
    }
}

const speaker1 = new Speaker(`black`, 5);
const speaker2 = new Speaker(`white`, 1);


console.log(speaker1.getColor());
console.log(speaker1.getVolume());

speaker1.setColor(`yellow`);
console.log(speaker1.getColor());

speaker1.setVolume(7);
console.log(speaker1.getVolume());

console.log(speaker1.turnLightsOn());
console.log(speaker1.turnLightsOff());
console.log(speaker1.turnVolumeOn());
console.log(speaker1.turnVolumeOff());
console.log(speaker1.speakerStatus());
    

console.log(speaker2.getColor());
console.log(speaker2.getVolume());

speaker2.setColor(`yellow`);
console.log(speaker2.getColor());

speaker2.setVolume(7);
console.log(speaker2.getVolume());

console.log(speaker2.turnLightsOn());
console.log(speaker2.turnLightsOff());
console.log(speaker2.turnVolumeOn());
console.log(speaker2.turnVolumeOff());
console.log(speaker2.speakerStatus());

//2

class Flashlight {
    constructor(
        private color: string,
        private length: number,
        private brightness: number,
        private batteriesNeeded: number,
    ) {
        if(this.length < 0 || this.length > 50) {
            throw new Error("legth is not valid!");
        }

        if(this.brightness < 0 || this.brightness > 10) {
            throw new Error("brightness is invalid!");
        }

        if(this.batteriesNeeded < 1 || this.batteriesNeeded > 5) {
            throw new Error("number of batteris is invalid!");
        }
    }

    getColor() {
        return this.color
    }

    getLength() {
        return this.length
    }

    getBrightness() {
        return this.brightness
    }

    getNumOfatteriesRequired(){
        return this.batteriesNeeded
    }

    setColor(col: string) {
        return this.color = col
    }

    setLength(length: number) {
        return this.length = length
    }

    setBrightness(brightness: number) {
        return this.brightness = brightness
    }

    setNumOfatteriesRequired(batteriesNeeded: number){
        return this.batteriesNeeded = batteriesNeeded
    }

    turnOn() {
        return `flashlight is on!`
    }

    turnOff() {
        return `flashlight is off!`
    }

    chaneBatteries() {
        return `batteries are out, please replace them!`
    }

    flashlightDetails() {
        return `flashlight details: color: ${this.color}, length: ${this.length}, brightness: ${this.brightness}, batteries required: ${this.batteriesNeeded}.`
    }
}

const flashlight1 = new Flashlight(`black`, 12, 5, 3);
const flashlight2 = new Flashlight(`white`, 19, 2, 5);

console.log(flashlight1);
console.log(flashlight1.getColor());
console.log(flashlight1.getLength());
console.log(flashlight1.getBrightness());
console.log(flashlight1.getNumOfatteriesRequired());

console.log(flashlight1.setColor(`green`));
console.log(flashlight1.setLength(6));
console.log(flashlight1.setBrightness(54));
console.log(flashlight1.setNumOfatteriesRequired(6));
console.log(flashlight1);

console.log(flashlight1.turnOn());
console.log(flashlight1.turnOff());
console.log(flashlight1.chaneBatteries());
console.log(flashlight1.flashlightDetails());


console.log(flashlight2);
console.log(flashlight2.getColor());
console.log(flashlight2.getLength());
console.log(flashlight2.getBrightness());
console.log(flashlight2.getNumOfatteriesRequired());

console.log(flashlight2.setColor(`green`));
console.log(flashlight2.setLength(6));
console.log(flashlight2.setBrightness(54));
console.log(flashlight2.setNumOfatteriesRequired(6));
console.log(flashlight2);

console.log(flashlight2.turnOn());
console.log(flashlight2.turnOff());
console.log(flashlight2.chaneBatteries());
console.log(flashlight2.flashlightDetails());

//3
class Car {
    constructor(
    protected manufacturer: string,
    protected model: number,
    protected color: string,
    protected engineCapacity: number
    ) {
        if(this.engineCapacity < 0 ||this.engineCapacity > 4000) {
            throw new Error("engine capacity is invalid!");
        }
    }

    getManufacturer() {
        return this.manufacturer;
    }

    getModel() {
        return this.model;
    }

    getColor() {
        return this.color;
    }

    getEngineCapacity() {
        return this.engineCapacity;
    }

    setManufacturer(manufacturer: string) {
    this.manufacturer = manufacturer;
    }

    setModel(model: number) {
    this.model = model;
    }

    setColor(color: string) {
    this.color = color;
    }

    setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
    }

    presentCar() {
        return `car details: manufacturer: ${this.manufacturer}, model: ${this.model}, color: ${this.color}, engine capacity: ${this.engineCapacity}`
    }
}

class SportsCar extends Car{
    constructor(
        manufacturer: string,
        model: number,
        color: string,
        engineCapacity: number,
        private maxSpeed: number,
        private racesParticipated: number
    ) {
        super(manufacturer, model, color, engineCapacity)
        if(this.maxSpeed < 200 || this.maxSpeed > 500) {
            throw new Error("max speed is invalid!");
        }

        if(this.racesParticipated < 0 || this.racesParticipated > 100) {
            throw new Error("races participated is invalid!");
        }
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    getRacesParticipated() {
        return this.racesParticipated;
    }

    setMaxSpeed(maxSpeed: number) {
        return this.maxSpeed = maxSpeed;
    }

    setRacesParticipated(racesParticipated: number) {
        return this.racesParticipated = racesParticipated;
    }

    presentCar() {
        return `${super.presentCar()}, max speed: ${this.maxSpeed}, races participated: ${this.racesParticipated}.`
    }

}

const car1 = new Car(`mazerati`, 2009, `white`, 2000);
console.log(car1);
console.log(car1.getManufacturer());
console.log(car1.getModel());
console.log(car1.getColor());
console.log(car1.getEngineCapacity());

car1.setManufacturer(`skoda`);
car1.setModel(2003);
car1.setColor(`blue`);
car1.setEngineCapacity(1900);
console.log(car1);
console.log(car1.presentCar());







const car = new SportsCar(`mazda`, 2020, `black`, 2000, 300, 5);
console.log(car);
console.log(car.getManufacturer());
console.log(car.getModel());
console.log(car.getColor());
console.log(car.getEngineCapacity());

car.setManufacturer(`mitzubishi`);
car.setModel(2006);
car.setColor(`green`);
car.setEngineCapacity(4000);
console.log(car);
console.log(car.presentCar());


console.log(car.presentCar());

//4
interface instruments {
    type: string,
    manufacturer: string,
    color: string
}
 
abstract class MusicalInstruments {
    constructor(
        protected musicalInstrument: instruments,
    ) {}

    getMusicalInstrument() {
        return `type: ${this.musicalInstrument.type}, manufacturer: ${this.musicalInstrument.manufacturer}, color: ${this.musicalInstrument.color}.`
    }
    
    setMusicalInstrumentType(type: string) {
        this.musicalInstrument.type = type
    }

    setMusicalInstrumentManufacturer(manufacturer: string) {
        this.musicalInstrument.manufacturer = manufacturer
    }

    setMusicalInstrumentColor(color: string) {
        this.musicalInstrument.color = color
    }

    display() {
        return `musical instrument details: type: ${this.musicalInstrument.type}, manufacturer: ${this.musicalInstrument.manufacturer}, color: ${this.musicalInstrument.color}`    }
}



class Guitar extends MusicalInstruments{
    constructor(
         musicalInstrument: instruments,
        protected guitarStrings: number
    ) {
        super(musicalInstrument)
        if(this.guitarStrings < 4 || this.guitarStrings > 8) {
            throw new Error("the amount of guitar strings is invalid!");
        }
    }
    
    getGuitarString() {
        return this.guitarStrings;
    }

    setGuitarString(guitarStrings) {
         this.guitarStrings = guitarStrings;
    }

    makeSound() {
        return `making guitar sound.`
    }

    display() {
        return `${super.display()}, guitar strings: ${this.guitarStrings}.`
    }
}

class Drum extends MusicalInstruments{
    constructor(
        musicalInstrument: instruments,
        private diameter: number
    ) {
        super(musicalInstrument)
        if(diameter < 0){
            throw new Error("diameter is invalid!");
        }
    }

    getDiameter() {
        return this.diameter;
    }

    setDiameter(diameter: number) {
        this.diameter = diameter
    }

    makeSound() {
        return `making drum sound.`
    }

    display() {
        return `${super.display()}, diameter: ${this.diameter}`
    }
}

class Piano extends MusicalInstruments {
    constructor(
        musicalInstrument: instruments,
        private numberOfKeys: number
    ) {
        super(musicalInstrument);
        if(this.numberOfKeys < 20 || this.numberOfKeys > 150) {
            throw new Error(`number of keys is invalid!`)
        }
    }

    getNumberOfKeys() {
        return this.numberOfKeys
    }

    setNumberOfKeys(numberOfKeys: number) {
        this.numberOfKeys = numberOfKeys
    }

    makeSound() {
        return `making a piano sound.`
    }

    display() {
        return `${super.display()}, number of keys: ${this.numberOfKeys}.`
    }
}

class GrandPiano extends MusicalInstruments{
    constructor(
        musicalInstrument: instruments,
        private numberOfKeys: number,
        private length: number
    ) {
        super(musicalInstrument);
        if(this.numberOfKeys < 20 || this.numberOfKeys > 150) {
            throw new Error(`number of keys is invalid!`)
        }

        if(this.length < 0){
            throw new Error("length is invalid!");
        }
    }

    getNumberOfKeys() {
        return this.numberOfKeys
    }

    setNumberOfKeys(numberOfKeys: number) {
        this.numberOfKeys = numberOfKeys
    }

    getLength() {
        return this.length;
    }

    setLength(length: number) {
        this.length = length;
    }

    makeSound() {
        return `making a grand piano sound.`
    }

    display() {
        return `${super.display()}, number of keys: ${this.numberOfKeys}, length: ${this.length}.`
    }
}


const guitarinstruments: instruments = {
    type: `guitar`,
    manufacturer: `ariel`,
    color: `grey`
}

const guitar = new Guitar(guitarinstruments, 5,);
console.log(guitar);
console.log(guitar.getGuitarString());
guitar.setGuitarString(12);
console.log(guitar.getGuitarString())
console.log(guitar);
console.log(guitar.makeSound());
console.log(guitar.getMusicalInstrument());
guitar.setMusicalInstrumentType(`not guitar`)
guitar.setMusicalInstrumentManufacturer(`not ariel`);
guitar.setMusicalInstrumentColor(`not grey`)
console.log(guitar.display());
console.log(guitar);



const druminstruments: instruments = {
    type: `drum`,
    manufacturer: `danel`,
    color: `yellow`
}

let drum = new Drum(druminstruments, 10);
console.log(drum);
console.log(drum.getDiameter());
drum.setDiameter(555);
console.log(drum);
console.log(drum.makeSound());
console.log(drum.display());


console.log(drum.getMusicalInstrument());
drum.setMusicalInstrumentType(`not drum`)
drum.setMusicalInstrumentManufacturer(`not danel`);
drum.setMusicalInstrumentColor(`not yellow`)
console.log(drum.display());
console.log(drum);


const pianoinstruments: instruments = {
    type: `piano`,
    manufacturer: `asaf`,
    color: `blue`
}

let piano = new Piano(druminstruments, 77);
console.log(piano);
console.log(piano.getNumberOfKeys());
piano.setNumberOfKeys(555);
console.log(piano);
console.log(piano.makeSound());
console.log(piano.display());


console.log(piano.getMusicalInstrument());
piano.setMusicalInstrumentType(`not piano`)
piano.setMusicalInstrumentManufacturer(`not danel`);
piano.setMusicalInstrumentColor(`not yellow`)
console.log(piano.display());
console.log(piano);

const grandPianoinstruments: instruments = {
    type: `grand piano`,
    manufacturer: `raziel`,
    color: `purple`
}

let grandPiano = new GrandPiano(grandPianoinstruments, 50, 12);
console.log(grandPiano);
console.log(grandPiano.getLength());
grandPiano.setLength(65);
console.log(grandPiano.getNumberOfKeys());
grandPiano.setNumberOfKeys(555);
console.log(grandPiano);
console.log(grandPiano.makeSound());
console.log(grandPiano.display());


console.log(grandPiano.getMusicalInstrument());
grandPiano.setMusicalInstrumentType(`not grand piano`)
grandPiano.setMusicalInstrumentManufacturer(`not raziel`);
grandPiano.setMusicalInstrumentColor(`not purple`)
console.log(grandPiano.display());
console.log(grandPiano);