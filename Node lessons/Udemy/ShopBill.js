/* Best color "\x1b[32m" */
console.log("\x1b[32m" ," Mağazamıza hoşgeldiniz , aldığınız ürün listesi aşağıda listelenmiştir . Güle Güle kullanmanız dileğiyle");

let trousers_price = 198.99;
let trousers_piece = 3;

let shirt_price =75;
let shirt_piece = 3

let socks_price = 11.99;
let socks_piece = 3;

let sum= (trousers_piece* trousers_price) +(shirt_piece *shirt_price) + (socks_piece* socks_price );

console.log("__________________________________")

console.log("Pantolon adeti : " , trousers_piece);
console.log("Pantolon fiyatı : " , trousers_price);
console.log("Tişört adeti : " , shirt_piece);
console.log("Tişört fiyatı : " , shirt_price);
console.log("Çorap adeti : " , socks_piece);
console.log("Çorap fiyatı : " , socks_price);
console.log("Toplam borç : " , sum);