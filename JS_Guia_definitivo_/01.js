var book = {
    
    topic: "JavaScript",
    
    fat: true  
   
    }
// Estou criando novas propriedades por meio da atribuição dentro objeto que pertence ao variável "book"
book.author = 20 ; 
// Estou criando uma nova variável que vai receber um novo objeto 
var tapona = { 

    prada : 29 
}
console.log ( book.topic , book["fat"],book.author) ; 
console.log ( tapona.prada)