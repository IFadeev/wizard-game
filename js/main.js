window.addEventListener('load', function() {
  let userDialog = this.document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  const maxWirads = 4;

  document.querySelector('.setup-similar')
  .classList.remove('hidden');

  let elements = this.document.querySelector('.setup-similar-list');

  let wizardsList = this.document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

  const wizardsName = ['Альфред','Хуан', 'Мария', 'Крайст',
  'Ульрих', 'Йенс', 'Люпин', 'Генрих']; 
  const wizardsSurname = ['Себас', 'Мюллер', 'Шмидт', 

  'Фишер', 'Вальц', 'Кляйн', 'Шульц'];
  const wizardsCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)', 'rgb(255, 255, 255)'];
  const wizardsEyesColor = ['black', 'red', 'blue', 'brown', 'green'];

  const generateRandom = arr => {
    return Math.floor(Math.random()*arr.length);
  }

  const generateWiard = () => {
    return wizard = {
      name: wizardsName[generateRandom(wizardsName)],
      surname: wizardsSurname[generateRandom(wizardsSurname)],
      coatColor: wizardsCoatColor[generateRandom(wizardsCoatColor)],
      eyesColor: wizardsEyesColor[generateRandom(wizardsEyesColor)]
    }
  }

  const renderWizard = (temmplate) => {
    let wizardElement = temmplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label')
    .textContent = `${generateWiard().name} ${generateWiard().surname}`;

    wizardElement.querySelector('.wizard-coat')
    .style.fill = generateWiard().coatColor;

    wizardElement.querySelector('.wizard-eyes')
    .style.fill = generateWiard().eyesColor;

    return wizardElement
  }

  const renderDOM = (wizardsList, maxWirads) => {
    for (let i = 0; i < maxWirads; i++) {
      elements.appendChild(renderWizard(wizardsList));
    }
  }

  renderDOM(wizardsList, maxWirads);  

});
