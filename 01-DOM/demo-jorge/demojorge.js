const nuevaLista = document.createElement('ul');
const item =  document.createElement('li');

item.innerHTML = 'Questo e il mio nuovo compito'
item.style.color = 'green';
// appendChild le agrega item como hijo a nuevaLista
//nuevaLista.appendChild(item)

document.body.appendChild(nuevaLista);

nuevaLista.setAttribute('id', 'miLista')

const ul = document.querySelector('ul');
ul.setAttribute('id', 'lePongoUnId');
ul.appendChild(item)