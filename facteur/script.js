function habitation (adresse) {

    this.adresse = adresse;

      this.bal = {

        courriers: [],
        
        deposerCourrier: function(courrier){
          this.courriers.push(courrier);
        },

        retirerCourrier: function(){
          var letter = this.courriers.shift();
          console.log('Votre courrier : ' + letter);
        }
      };

}


var village = [];
village.push(new habitation("Rue 1"));
village.push(new habitation("Rue 66"));
village.push(new habitation("Rue 3"));
village.push(new habitation("Rue 2"));
village.push(new habitation("La jonquiera"));

function facteur(){

    this.aLaPoste = function() {
      poste.bal.retirerCourrier();
    }

    this.auCafeDeLaPoste = function() {
      poste.pause_cafe();
    }

    this.depot = function(){
      for(i=0;i<village.length;i++){
        village[i].bal.deposerCourrier('hello');
      }
    }

    this.retrait = function(){
      for(i=0;i<village.length;i++){
        village[i].bal.retirerCourrier();
      }
    }

  }





var poste = {

    bal : {
      courriers : [],

      retirerCourrier : function () {
          thomas.courriers += this.courriers;
          console.log("thomas a bien récupéré le courrier : " + thomas.courriers);
      }
    },

    pause_cafe : function () {
        console.log ("Il faut travailler pour se reposer!! \n Fonctionnaire va!");
    }
}

poste.bal.courriers.push(new courrier("Rue 1","hello"));
poste.bal.courriers.push(new courrier("Rue 2","bonjour"));
poste.bal.courriers.push(new courrier("Rue 3","facture !!!"));
poste.bal.courriers.push(new courrier("Rue 66","guten morgen"));
poste.bal.courriers.push(new courrier("Rue 1","Anthraxx"));
poste.bal.courriers.push(new courrier("Rue 2","Je suis le corbeau..."));
poste.bal.courriers.push(new courrier("La jonquiera","Bande de **$£@@"));

function courrier (destinataire, contenu) {
  this.destinataire = destinataire;
  this.contenu = contenu;
}



var thomas = new facteur();
console.log(village);
