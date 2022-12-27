import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css'; 
import cinema from './img/cinema.jpg';
import ticket from './img/ticket.jpg';

const Films = [
    {
      id: 1,
      title: 'img cinema',
      content: 'ceci est une img de cinema',
      image: cinema
    },
    {
        id: 2,
        title: 'img ticket',
        content: 'ceci est une img de ticket',
        image: ticket
    }
]

const imgFilms = [
    {
        cinema
    },
    {
        ticket
    }
]

console.log("cinema chemin vrai : ");
console.log(cinema);
console.log("cinema chemin faux : ");
console.log(imgFilms[0].cinema);




renderMenuFromString(Films);

function renderImage(imageUrl) {
  const image = document.createElement('img');
  image.src = imageUrl;
  image.height = 50;
  const main = document.querySelector('main');
  main.appendChild(image);
}


function renderMenuFromString(strings) {
    const menuTableAsString = getMenuTableAsString(strings);
  
    const main = document.querySelector('main');
  
    main.innerHTML += menuTableAsString;
  }
  
  function addLinesToTableHeadersAndGet(tableLines) {
    const menuTable = `
    <div class="table-responsive pt-5">
      <table class="table table-danger">
        <tr>
          <th>Films name: </th>
          <th>Description</th>
        </tr>
        ${tableLines}    
      </table>
    </div>
    `;
    return menuTable;
  }
  
  function getMenuTableAsString(menu) {
    const menuTableLines = getAllTableLinesAsString(menu);
    const menuTable = addLinesToTableHeadersAndGet(menuTableLines);
    return menuTable;
  }

  function getAllTableLinesAsString(menu) {
    let pizzaTableLines = '';
    let index = 0;
  
    menu?.forEach((pizza) => {
        // eslint-disable-next-line no-plusplus
        index++;
      pizzaTableLines += `<tr>
        <td>${pizza.title}</td>
        <td>${pizza.content}</td>
        <td>${renderImage(imgFilms[index])} </td>
      </tr>`;
    });
  
    return pizzaTableLines;
  }
  
