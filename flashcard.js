//Basic card constructor
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

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

//export both constructors. use variable.baic to use basic constructor & variable.cloze to use cloze constructor
module.exports = {
    basic: BasicCard,
    cloze: ClozeCard
};