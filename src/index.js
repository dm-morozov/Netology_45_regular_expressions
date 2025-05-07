// index.js
import "./css/style.css";
import Bowman from "./js/Bowman.js";
import Character from "./js/Character.js";
import Daemon from "./js/Daemon.js";
import Magician from "./js/Magician.js";
import Swordsman from "./js/Swordsman.js";
import Undead from "./js/Undead.js";
import Zombie from "./js/Zombie.js";

// Для тестирования в консоли добавим классы в глобальную область видимости
window.Character = Character;
window.Bowman = Bowman;
window.Swordsman = Swordsman;
window.Magician = Magician;
window.Daemon = Daemon;
window.Undead = Undead;
window.Zombie = Zombie;

console.log("index worked");

const order = ["name", "level"];
const character = new Character("Лучник", "Bowman");
console.log(character.orderByProps(order));

character.special = [
  {
    id: 8,
    name: "Двойной выстрел",
    icon: "http://...",
    description: "Двойной выстрел наносит двойной урон",
  },
  {
    id: 9,
    name: "Нокаутирующий удар",
    icon: "http://...",
  },
];
console.log(character.getSpecialAttack());
