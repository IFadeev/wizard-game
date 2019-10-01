window.addEventListener('load', function() {
  // 
  const setupOpen = this.document.querySelector('.setup-open');
  const setupClose = this.document.querySelector('.setup-close');
  const userSettings = this.document.querySelector('.setup');
  const userNameInput = this.document.querySelector('.setup-user-name');
  const dialogHendler = this.document.querySelector('.setup-user-pic');
  
  const openPopup = () => {
    userSettings.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  const closePopup = () => {
    userSettings.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  const onClickCoat = (evt) => {
    if (evt.target.className.baseVal == 'wizard-coat') {
      let newColor = generateWiard().coatColor;
      evt.target.style.fill = newColor;
    }
  }

  const onPopupEscPress = () => {
    window.addEventListener('keydown', function(e) {
      if (e.key == 'Escape') {
        e.preventDefault();
        if (!userSettings.classList.contains('hidden')) {
          userSettings.classList.add('hidden');
        }
      }
    });
  }

  setupOpen.addEventListener('click', openPopup);

  setupClose.addEventListener('click', closePopup);

  document.querySelector('.wizard').addEventListener('click', onClickCoat)
  
  

  dialogHendler.addEventListener('mousedown', function(evt) {
    evt.preventDefault();
    
    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    this.document.addEventListener('mousedown', function(evt) {
      evt.preventDefault();
  
      let shift = {
        x: startCoords.x - evt.clientX,
        y: startCoords.y - evt.clientY
      };

      startCoords = {
        x: evt.clientX,
        y: evt.clientY
      }; 

      setupClose.style.top
    });
    this.document.addEventListener('mouseup', onMouseUp);
  
    const onMouseMove = evt => {
  
    }
  
  });

  






  const maxWirads = 4;

  document.querySelector('.setup-similar').classList.remove('hidden');

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
