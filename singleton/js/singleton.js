class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        //genera un random para cada instancia
        this.random = Math.random();
        // evalua si existe con el método instance
        if (Singleton.instance) {
            return Singleton.instance;
        }
        //relaciona el instance con la propia instancia
        Singleton.instance = this;
    }
}

let singleton = new Singleton();
let singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();


console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton3 ? singleton3 : "empty");

console.log(singleton === singleton2);

// EJEMPLO práctico --------------------------------------

class WeekDays{
    daysEs = ["Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",   
            "Domingo"];
    daysEn = ["Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"];

    constructor(lang){
        this.lang = lang;

        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;   
    }

    getDays(){
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }
}

const weekDays = new WeekDays("en");
const weekDays2 = new WeekDays("es");
console.log(weekDays.getDays());
console.log(weekDays2.getDays());


