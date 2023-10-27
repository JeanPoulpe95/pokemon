class Personnage {
  constructor(name, santeMentale) {
    this.name = name;
    this.santeMentale = santeMentale;
  }
}

let personnage1 = new Personnage("Pascal", 10);

let musiques = ["Bruno Mars", "Musique du Roi Lion", "PNL - Au DD", "OnePiece", "Anissa - Wejdene"];

let trajet = {
  radio: musiques[Math.floor(Math.random() * 5)],
  feuxRouges: 30,
  changementsDeTaxi: 0
};

while (trajet.feuxRouges > 0) {
  console.log("Musique : " + trajet.radio + " - Feux restants : " + trajet.feuxRouges);

  if (trajet.radio === "Anissa - Wejdene") {
    personnage1.santeMentale -= 1; 
    trajet.changementsDeTaxi += 1; 
    console.log("Changement de taxi. Santé mentale : " + personnage1.santeMentale);
  }

  trajet.feuxRouges -= 1; 
  trajet.radio = musiques[Math.floor(Math.random() * 5)]
}



if (personnage1.santeMentale <= 0) {
  console.log("Explosion !");
} else {
  console.log("Arrivé à destination avec " + trajet.changementsDeTaxi + " changements de taxi.");
  }