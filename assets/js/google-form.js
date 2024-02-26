const scriptURL_ebru = 'https://script.google.com/macros/s/AKfycbzJc-PqzhQSugL99QdkqR5Uh5N8xfmRgUpWJ7tOiAGSB1xMAt_UUeDRzEjwiY_PCld_/exec'

const form_ebru = document.forms['contact-form']

form_ebru.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL_ebru, { method: 'POST', body: new FormData(form_ebru) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})