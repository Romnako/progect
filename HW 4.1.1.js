

'use strict';

function Products(name) {
    this.name = name;
}

Products.prototype.show = function () {
    alert(this.name);
};

function Discounter(price, discount_price) {
    Products.call(this, price);
    this.discount_price = discount_price;
    this.price.make25PercentDiscount == 0.25 * this.price == discount_price;
}

Discounter.prototype = Object.create(Products.prototype);
Discounter.prototype.constructor = Discounter;

Discounter.prototype.show2 = function () {
    console.log(this.discount_price);
};


show();
show2();