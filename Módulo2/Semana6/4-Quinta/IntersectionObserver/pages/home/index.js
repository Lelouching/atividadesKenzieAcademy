const BaseUrl = 'https://rickandmortyapi.com/api';
const divObservadora = document.querySelector('.observador');
let page = 1;

async function dataAPI(currentPage) {
  const responseJSON = await fetch(`${BaseUrl}/character?page=${currentPage}`);
  const response = await responseJSON.json()

  response.results.map((elem) => {
    divObservadora.insertAdjacentHTML(
      'beforebegin',
      `
          <div class="card">
            <h2>${elem.name}</h2>
            <img src="${elem.image}" alt="${elem.name}" />
          </div>
        `,
    );
  });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            dataAPI(page++);
          }
    })
  }, options);
  
observer.observe(divObservadora);