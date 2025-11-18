export interface Beverage {
  getCost(): number;
  getDescription(): string;
}

export class Espresso implements Beverage{

  getCost(): number {
    return 5.0;
  }

  getDescription(): string {
    return `Espresso`
  }
}

// Decorator
export abstract class CondimentDecorator implements Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  abstract getCost(): number;
  abstract getDescription(): string;
}

export class Milk extends CondimentDecorator {
  getCost(): number {
    // suma el costo de la leche al costo de la bebida
    return this.beverage.getCost() + 1.0;
  }

  getDescription(): string {
    return this.beverage.getDescription() + " + Milk";
  }
}

export class Soy extends CondimentDecorator {
  getCost(): number {
    // suma el costo de la soya al costo de la bebida
    return this.beverage.getCost() + 1.5;
  }

  getDescription(): string {
    return this.beverage.getDescription() + " + Soy";
  }
}
