var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("prueba");
// clases y objetos
var Drink = /** @class */ (function () {
    function Drink(name) {
        this.name = name;
    }
    Drink.prototype.info = function () {
        return this.name;
    };
    return Drink;
}());
var drink = new Drink("agua");
console.log(drink.info());
// herencia e implementación de interface
var Beer = /** @class */ (function (_super) {
    __extends(Beer, _super);
    function Beer(name, alcohol, price) {
        var _this = _super.call(this, name) || this;
        _this.alcohol = alcohol;
        _this.price = price;
        return _this;
    }
    Beer.prototype.info = function () {
        return _super.prototype.info.call(this) + " " + this.alcohol;
    };
    Beer.prototype.getPrice = function () {
        return "$ " + this.price;
    };
    return Beer;
}(Drink));
// implementación de interface
var Snack = /** @class */ (function () {
    function Snack(name, price) {
        this.name = name;
        this.price = price;
    }
    Snack.prototype.getPrice = function () {
        return "El precio es: $ " + this.price;
    };
    return Snack;
}());
var beer = new Beer("erdinger", 8.5, 5);
console.log(beer.info());
var products = [
    new Beer("corona", 4.5, 1),
    new Snack("papas", 0.5),
    new Beer("heineken", 5, 1.2),
];
function getPrices(items) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item.getPrice());
    }
}
getPrices(products);
