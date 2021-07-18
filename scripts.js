(function(){
  const formNewsletterElement = document.querySelector('#newsletter-form');
  const inputNewsletterElement = document.querySelector('#newsletter-input-email');
  const buttonNewsletterElement = document.querySelector('.newsletter-button');
  const errorsNewsletter = document.querySelector('.newsletter-errors');
  const messageNewsletter = document.querySelector('.newsletter-message');

  let errors = [];

  formNewsletterElement.addEventListener('submit', function(e) {
    e.preventDefault();
    messageNewsletter.innerHTML = '';
    errorsNewsletter.innerHTML = '';

    if(!isValidEmail(inputNewsletterElement.value)){
      errors.forEach(function(error){
        errorsNewsletter.innerHTML = `<li>${error.name}</li>`;
      })
      return;
    }

    saveEmail(inputNewsletterElement.value);

    messageNewsletter.innerHTML = `Obrigado por assinar a nossa newsletter! <span class="newsletter-new-email">Cadastrar outro e-mail</span>`;

    const newEmailNewsletter = document.querySelector('.newsletter-new-email');

    newEmailNewsletter.addEventListener('click', function(e) {
      inputNewsletterElement.value = '';
      messageNewsletter.innerHTML = '';
      inputNewsletterElement.focus();
    })
  });



  function isValidEmail(email) {
    errors = [];

    if(!email) {
      errors.push({ name: 'O campo e-mail não pode estar em branco.'})
      return false;
    }

    const emailSaved = getEmail();

    if(emailSaved && emailSaved === email) {
      errors.push({name: 'O e-mail inserido já foi cadastrado.'});
      return false;
    }

    return true;
  }

  function saveEmail(email) {
    window.localStorage.setItem('newsletter-subscriber', email);
  }

  function getEmail(email) {
    return window.localStorage.getItem('newsletter-subscriber');
  }

})();