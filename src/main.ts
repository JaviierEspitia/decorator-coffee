import { COLORS } from "../helpers/colors.ts";
import { Beverage, Espresso, Milk, Soy } from "./beverage.ts";

let coffee: Beverage = new Espresso();

coffee = new Milk(coffee);
coffee = new Soy(coffee);

console.log(`%cDescripción: %c${coffee.getDescription()}`, COLORS.cyan, COLORS.white);
console.log(`%cCosto: %c${coffee.getCost()}`, COLORS.green, COLORS.white);
