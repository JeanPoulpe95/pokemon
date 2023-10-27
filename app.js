class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    let x = Math.random();
    if (x < this.luck) {
      return true;
    } else {
      return false;
    }
  }

  attackPokemon(defenseEnnemi) {
    let y = this.attack - defenseEnnemi;
    return y;
  }
}

let PokemonOnix = new Pokemon("Onix", 23, 21, 53, 0.8);
let PokemonRonflex = new Pokemon("Ronflex", 24, 20, 50, 0.6);

while (PokemonRonflex.hp && PokemonOnix.hp > 0){
    
    if (PokemonOnix.isLucky() === true) {
        let degatPokemon1 = PokemonOnix.attackPokemon(PokemonRonflex.defense);
        PokemonRonflex.hp = PokemonRonflex.hp - degatPokemon1;
        console.log(PokemonRonflex.name + " a subit " + degatPokemon1 + " degat!!");
        console.log("il reste " + PokemonRonflex.hp + " HP à " + PokemonRonflex.name);
    } else{
        console.log(
        PokemonOnix.name + " à manqué son attaque... (J'ai pas toucheww)");
    }
    if (PokemonRonflex.isLucky() === true) {
        let degatPokemon2 = PokemonRonflex.attackPokemon(PokemonOnix.defense);
        PokemonOnix.hp = PokemonOnix.hp - degatPokemon2;
        console.log(PokemonOnix.name + " a subit " + degatPokemon2 + " degat!!");
        console.log("il reste " + PokemonOnix.hp + " HP à " + PokemonOnix.name);
     } else {
        console.log(
        PokemonRonflex.name + " à manqué son attaque... (force mon reuf)"
     );
     }
}

if (PokemonOnix.hp <= 0){
    console.log(PokemonOnix.name + " est K.O !!! ");
}

if (PokemonRonflex.hp <= 0){
    console.log(PokemonRonflex.name + " est K.O !!! ");
}