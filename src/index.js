import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';
import Heading from './Heading';
import App from './Beverages';
import NumberMapsAndFilters from './NumberMapsAndFilters';
import FoodData from './data/food';
import FoodFilter from './FoodFilter';
import UserData from './data/users';
import Gravatars from './Gravatars';

var names = ['Carl', 'Katie', 'Tyler', 'Bob', 'Jane', 'Nick', 'Doug'];

function Beverage(name, category, size, price){
  this.name     = name;
  this.category = category;
  this.size     = size;
  this.price    = price;
};

var g1 = new Beverage("Orange Gatorade", "sports drink", "16 oz", "$2.99");
var g2 = new Beverage("Blue Gatorade", "sports drink", "16 oz", "$2.99");
var g3 = new Beverage("Yellow Gatorade", "sports drink", "16 oz", "$2.99");

var c1 = new Beverage("Latte", "caffeinated", "8 oz", "$3.99");
var c2 = new Beverage("Cappicino", "caffeinated", "6 oz", "$1.99");
var c3 = new Beverage("Espresso", "caffeinated", "2 oz", "$2.50");

var a1 = new Beverage("IPA", "alcoholic", "12 oz", "$4.00");
var a2 = new Beverage("Red Wine", "alcoholic", "12 oz", "$4.00");
var a3 = new Beverage("Whisky", "alcoholic", "4 oz", "$6.00");

var j1 = new Beverage("Grape Juice", "juice", "8 oz", "$4.00");
var j2 = new Beverage("Apple Juice", "juice", "8 oz", "$4.00");
var j3 = new Beverage("Lemonade", "juice", "8 oz", "$6.00");

var allBevs = [g1, g2, g3, c1, c2, c3, a1, a2, a3, j1, j2, j3];

ReactDOM.render(
  <div>
    {/*<Heading /> */}
    {/*<HelloWorld names={names} /> */}
    {/*<App beverages={allBevs} />*/}
    {/*<NumberMapsAndFilters />*/}
    {/*<FoodFilter data={FoodData} />*/}
    <Gravatars data={UserData} />
  </div>,
  document.getElementById('root')
);
