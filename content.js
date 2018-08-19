const elements = document.body.querySelectorAll('p,form, button, li, em, a, h1, h2 ,h3, h4, h5, h6, strong, input, label, figcaption');
const elementsArray = [...elements];

const genderNeutralTerms = ['muggles', 'humans', 'people', 'peeps', 'chums', 'pals', 'beings'];

const randomize = (array) =>{
   return array[Math.floor(Math.random() * array.length)];
}
const updateWebPageText = (elementsArray) => {
  elementsArray.forEach(element => {
    const currentText = element.innerHTML;
    const replacedText = currentText.replace(/guys/gi, (randomize(genderNeutralTerms)));
    element.innerHTML = replacedText;
  }); 
};

updateWebPageText(elementsArray);






