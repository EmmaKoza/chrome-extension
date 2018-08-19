const elements = document.body.getElementsByTagName("*");
const elementsArray = [...elements];

const updateWebPageText = (elementsArray) => {
  elementsArray.forEach(element => {
    const currentText = element.innerHTML;
    const replacedText = currentText.replace(/guys/gi, 'muggles');
    element.innerHTML = replacedText;
  }); 
};

updateWebPageText(elementsArray);






