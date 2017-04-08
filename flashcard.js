//Basic card constructor
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

// console.log('========================');
// var firstPresident = new BasicCard('Who was the first president of the United States?', 'George Washington'); 
// console.log('Front: ' + firstPresident.front);
// console.log('Back: ' + firstPresident.back);
// console.log('========================');

//Cloze card constructor
function ClozeCard(fullText, cloze) {
    if (fullText.includes(cloze)) {
        this.fullText = fullText;
        this.cloze = cloze;
        ClozeCard.prototype.generatePartial = function() {
            var clozeQuestion = this.fullText.replace(this.cloze, '...');
            return clozeQuestion;
        }
        ClozeCard.prototype.partial = this.generatePartial();
    } else {
        console.log('Cloze not contained in the full text provided.');
    }   
}

// var newFirstPres = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');
// console.log('========================');
// console.log('FullText: ' + newFirstPres.fullText);
// console.log('Cloze: ' + newFirstPres.cloze);
// newFirstPres.generatePartial();
// console.log('Cloze: ' + newFirstPres.partial);
// console.log('========================');
// newFirstPres.partial();

//export both constructors. use variable.baic to use basic constructor & variable.cloze to use cloze constructor
module.exports = {
    basic: BasicCard,
    cloze: ClozeCard
};