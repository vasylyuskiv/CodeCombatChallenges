// Help peasants to escape.

function onSpawn(e) {
    // We need to save three peasants.
    var remainingPeasants = 3;
    while (remainingPeasants > 0) {
        // Take a good position.
        pet.moveXY(40, 55);
        var peasant = pet.findNearestByType("peasant");
        if (peasant) {
            // Carry the peasant to the center passage.
            pet.carryUnit(peasant, 40, 34);
            remainingPeasants -= 1;
        }
    }
    var munchkin = pet.findNearestByType("munchkin");
    // Carry a munchkin to the fire traps:
    if (munchkin){
        pet.carryUnit(munchkin,36,20);
    }
}

pet.on("spawn", onSpawn);


// Fight!
while(true) {
    var i;
    var enemies = hero.findEnemies();
// i = 1 not 0 coz i need 1 munchkin to nuke the mine :)
    for (i = 1; i < enemies.length; i++){
        var enemy = enemies[i];
        if (enemy){
            hero.attack(enemy);
        }

    }
}
