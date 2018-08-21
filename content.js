const elements = document.body.querySelectorAll('p, form, button, li, em, a, h1, h2 ,h3, h4, h5, h6, strong, input, label, figcaption');
const elementsArray = Array.from(elementsArray);

const genderNeutralTerms = ['muggles', 'humans', 'people', 'peeps', 'chums', 'pals', 'beings'];

const findRandomTerm = (termArray) =>{
   return termArray[Math.floor(Math.random() * termArray.length)];
}

elementsArray.forEach(element => {
  const currentText = element.innerHTML;
  const replacedText = currentText.replace(/guys/gi, (findRandomTerm(genderNeutralTerms)));
  element.innerHTML = replacedText;
})






