window.addEventListener('load', function() {
  let userDialog = this.document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar')
  .classList.remove('hidden');

  let elements = this.document.querySelector('.setup-similar-list');

  let wizardsList = this.document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

  for (let i = 0; i < 4; i++) {
    let wizardElement = wizardsList.cloneNode(true); 
    
    elements.appendChild(wizardElement);
  }


  let wizarads = [
    {
      name: 'Сарумян',
      coatColor: 'red',
  },
  {
    name: 'Пендаль Белый',
    coatColor: 'white'
  }, 
  {
    name: 'Дамболдор',
    coatColor: 'blue'
  }
  ];





});


