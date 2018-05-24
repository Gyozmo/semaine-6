

// function Panier(ajouter,retirer,totalHT,totalTTC){

//     fondDuPanier = [];
//     var aliment;
//     var paniervider;

//     this.ajouter = function(aliment){
//         fondDuPanier.push(aliment)
//         console.log(fondDuPanier);
        
//     }

//     this.retirer = function(aliment){
//         var paniervider = fondDuPanier.filter(word => aliment !== fondDuPanier)
//         console.log(paniervider);
        
//     }

// }

// panier = new Panier;
// panier.ajouter('sucre');
// panier.ajouter('carotte');
// panier.ajouter('choux');
// panier.retirer('choux');







function Produit(name,price){

    this.name = name;
    this.price = price;

}

function Panier(){

    this.fondDuPanier = []
    this.totalHT = 0
    this.totalTTC = 0

    this.ajoute = function(name) {
        this.fondDuPanier.push(name);
        // this.totalHT = (this.totalHT*100);
        // name.price = (name.price*100);
        
        this.totalHT += name.price

        this.totalTTC += this.totalHT
    }

    this.retirer = function(name){
        let productToRemove = this.fondDuPanier.indexOf(name)
        this.fondDuPanier.splice(productToRemove,1)
        
        
    }

    

}

var baguette = new Produit( 'Baguette', 0.85); // prix HT
var croissant = new Produit( 'Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

// console.log(panier.totalHT);
// console.log(panier.totalTTC);
console.log(JSON.parse(JSON.stringify(panier.fondDuPanier)));
console.log();

console.log(panier.fondDuPanier);
// console.log(panier.retirer(baguette));
console.log(panier.totalHT);
console.log (panier.totalTTC);

