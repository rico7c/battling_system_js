var fight;
var attack = prompt ("Do you wiant to attack the Dragon?", "yes or no").toLowerCase();
var youHit = Math.floor(Math.random() * 2);
var dragonHit = Math.floor(Math.random() * 2);
var dragonDmg = Math.floor(Math.random() * 25 + 1);
var dmg = Math.floor(Math.random() * 25 + 1);
var totalDamage = 0;
var HP = 100;
var dragon_hp = 100;
var flee = Math.floor(Math.random() * 2);  

//Attack or flee check
switch  (attack) {
  case "yes":
    fight = true;
    console.log("You want to attack the Dragon!");
    break;
  case "no":
    fight = false;
    console.log("You try and flee the Dragon");
    break;
  default:
    console.log("Response unknown");
}

if (!fight && flee){
  console.log("You managed to flee the battle!");
}
else if (!fight && !flee){
  console.log("You were unable to flee the battle! The dragon will attack you!");
  fight = true;
  youhit = 0;
  dragonHit = 1;
};

//The attack
while (fight && HP > 0 && dragon_hp > 0 ){
    if (youHit == 1) {
      console.log("You hit the dragon and did " + dmg + " damage!");
      dragon_hp = dragon_hp - dmg
    }
    else{
      console.log ("You're attack missed!")
    };

    if (dragonHit == 1) {
      console.log("The dragon hit you and did " + dragonDmg + " damage!");
      HP = HP - dragonDmg
    }
    else{
      console.log("Dragon attacked missed")
    };
  
  console.log("------------------------");
  console.log("Players heath: " + HP + " Dragons health: " + dragon_hp);
  console.log("------------------------");

  attack = prompt ("Do you wiant to attack the Dragon?", "yes or no").toLowerCase();

  youHit = Math.floor(Math.random() * 2);
  dragonHit = Math.floor(Math.random() * 2);
  dragonDmg = Math.floor(Math.random() * 25 + 1);
  dmg = Math.floor(Math.random() * 25 + 1);
  flee = Math.floor(Math.random() * 2);

};

console.log("Player has " + HP + " left");
console.log("Dragon has " + dragon_hp + " left");