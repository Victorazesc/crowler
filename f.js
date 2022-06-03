const axios = require('axios')
const FormData = require('form-data');

const form = new FormData();
form.append('entry.366340186', 'Opção 9');
// form.append('entry.359651686', 'Opção 3');

const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe0PbHNk7nCs7NqTAzGh81fP1C2sCpJ1X3Nj-3-IREsbP6KGw/formResponse'
// const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSezWD7axjx0gXieO6sElLGx-82YOQKh990y1piUkwHKlmihhQ/formResponse'



axios.post(url, form, { headers: form.getHeaders() })

