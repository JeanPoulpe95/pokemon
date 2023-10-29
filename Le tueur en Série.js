// let jason = {
//   nom: "Jason",
//   pv: 100,
//  }


// let nom = ["Alcia", "Jean", "Paul", "Julie", "Pascal"]

// let caracteristique = ["nerd", "sportif", "blonde", "aveugle", "ancien militaire"]




// // vous aviez dis de laisser des commentaires lorsque on bloque et la je commence a bloquer
// // je sais que je dois créé l'aléa vers l'étape ou je me situe. Mais je sais pas comment m'y prendre je vais essayer de me renseigner sur
// //internet car la je suis bloqué.


// for (let i = 0; i < 5; i++) {  //finalement j'ai juste eu a retourner dans les premiere choses qu'on avait vu
//   let aleanom = nom[Math.floor(Math.random() * nom.length)];  //length trouvé sur internet 16h15
//   let aleacaracteristique = caracteristique[Math.floor(Math.random() * nom.length)]
// }

// let survivant = {
//   nom: aleanom,
//   caracteristique: aleacaracteristique
//   pv: 1,
//  }


// // grosse galère à trouver et comprendre comment executer ma fonction ppur les esquives, attaque... 



//  while(jason.pv > à && survivants.some(s => s.hp > 0)) {
//   if (Math.random()>= 30) {
//     let degat = Math.floor(Math.random() * 20)+10;
//     survivant.pv -=degat
//     if(survivant.pv < 0){
//     console.log("Jason a tué  " + aleanom + aleacaracteristique)
//    }if(Math.random()>=20) {
//     console.log(aleanom + aleacaracteristique+ " a mit 15 dégats mais c'est fait tuer pas Jason")
//    }if(Math.random() <= 50){
//     console.log(aleanom +aleacaracteristique+ " a esquivé et infligé 15 dégats")
//    }
//    }
//  }





//  if (jason.pv > 0){
//  console.log("Jason est mort, c'est l'equipe des survivants qui ont gagné");
//  } else {
//   console.log("Jason a tué tout le monde")
//  }


 let jason = {
  nom: "Jason",
  pv: 100,
}

let nom = ["Alcia", "Jean", "Paul", "Julie", "Pascal"]
let caracteristique = [" nerd", " sportif", "la blonde", " l'aveugle", " l' ancien militaire"]

let aleanom = nom[Math.floor(Math.random() * nom.length)]
let aleacaracteristique = caracteristique[Math.floor(Math.random() * caracteristique.length)]

let survivant = {
  nom: aleanom,
  caracteristique: aleacaracteristique,
  pv: 1,
 
}

while (jason.pv > 0 && survivant.pv > 0) {
  if (Math.random() >= 0.3) {
    let degat = Math.floor(Math.random() * 20) + 10;
    survivant.pv -= degat;
    if (survivant.pv <= 0) {
      console.log("Jason a tué " + aleanom + aleacaracteristique)
    }
    if (Math.random() >= 0.2) {
      console.log(aleanom + aleacaracteristique + " a infligé 15 dégats mais s'est fait tuer par Jason")
    }
    if (Math.random() <= 0.5) {
      console.log(aleanom + aleacaracteristique + " a esquivé et infligé 15 dégats")
    }
  }
}

if (jason.pv > 0) {
  console.log("Jason est mort, c'est l'équipe des survivants qui a gagné");
} else {
  let mort = survivant.filter(s=> s.pv <0).map(s=> s.nom); // formule trouvée sur chatGPT
  console.log("Jason a tué tout le monde")
}


//j'ai remodifié les différentes erreurs mais je me retrouve sur un problème auquel je ne m'attendais pas. 
// c'est toujours le meme personnage qui sort aléatoirement!

// bon je reviens sur mon commentaire précédent, je n'arrive pas à faire en sorte que lorsque
// lorsque 1 survivant meurt celui ci soit remplacé par un autre jusqu' a ce que 5 survivants y soient passé.
// En tout cas pour quelqu'un qui n'avait jamais touché au code sa vie et qui n'y connaissait rien je suis fière de moi pour cette premiere semaine!!
// Merci à vous pour cette semaine et je vaiz continuer de m'entrainer chez moi a coder car je dois avouer que j'aime bien ça.




