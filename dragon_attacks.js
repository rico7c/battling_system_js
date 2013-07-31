var fight;
var youHit = Math.floor(Math.random() * 2);
var dragonHit = Math.floor(Math.random() * 2);
var DragonFight = prompt ("Which Dragon do you wish to fight?","red, green, blue or black")

var HP = 100;
var dragon_hp = dragons[DragonFight].HP;
//var flee = Math.floor(Math.random() * 2);  

//Attack or flee check
//The attack
while (HP > 0 && dragon_hp > 0 ){
  var dmg;
    if (youHit == 1) {
      var attack = Math.random()
        if (attack > 0.66) {
            dmg = Math.floor(Math.random() * 25 + 1);
            console.log("You use SWORD SLICE hitting for " + dmg);
        }
        else if (attack < 0.33){
            dmg = Math.floor(Math.random() * 5 + 1);
            console.log("You attack with the BUTT OF SWORD causing " + dmg + " damage");
        }
        else{
            dmg = Math.floor(Math.random() * 15 + 1);
            console.log("You use SHEILD BASH hitting for " + dmg);
        };
      dragon_hp = dragon_hp - dmg
    }
    else{
      console.log ("You're attack missed!")
    };

    if (dragonHit == 1){
      var dmg 
        if (attack > 0.66) {
            dmg = Math.floor(Math.random() * 25 + 1);
            console.log("The Dragon uses FIRE BREATH and scorches you for " + dmg);
        }
        else if (attack < 0.33){
            dmg = Math.floor(Math.random() * 5 + 1);
            console.log("The Dragon uses TAIL WHIP and hits for " + dmg);
        }
        else{
            dmg = Math.floor(Math.random() * 15 + 1);
            console.log("The Dragon uses CLAW and tears you for " + dmg);
        };
      HP = HP - dmg
    }
    else{
      console.log("Dragon attacked missed")
    };
  
  console.log("Players heath: " + HP)
  console.log(DragonFight  + " Dragons health: " + dragon_hp);
  console.log("------------------------");

var youHit = Math.floor(Math.random() * 2);
var dragonHit = Math.floor(Math.random() * 2);
  };