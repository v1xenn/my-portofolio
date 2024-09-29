const scriptURL = 'https://script.google.com/macros/s/AKfycbyy5QX16J3wtDanhaabciZNaJS40i9718xrvtwpfYAovSweqV60OXxRv2GuLwM0oZKB/exec'
const form = document.forms['contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
