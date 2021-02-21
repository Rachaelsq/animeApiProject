
/* 
==========
SEARCH
==========
*/
const searchBar = document.getElementById('searchBar');
const animesList = document.getElementById('animesList');

searchBar.addEventListener('keyup', (e) =>{
  const searchString = e.target.value.toLowerCase();
  console.log(searchString)
  
//filter
  const filteredAnimes = animeTitles.top.filter((anime) => {
    return (
    anime.title.toLowerCase().includes(searchString) ||
    anime.type.toLowerCase().includes(searchString) 
    );
  });
  displayAnimes(filteredAnimes);
});


/* 
==========
API
==========
*/
const getAnimes = async () => {
  try {
    const res = await fetch(`
https://api.jikan.moe/v3/top/anime/1/upcoming
`);
    animeTitles = await res.json();
    console.log(animeTitles); 
    displayAnimes(animeTitles.top);
  } catch(err) {
    console.error(err);
  }
};


/* 
============
RENDER TO DOM
============
*/
const displayAnimes = (animes) => {
  const htmlString = animes
  .map((anime) => {
    return `
    <li class="anime">
      <div class="">
        <h2>${anime.title}</h2>
        <a class="" href="${anime.url}"><img class="" src="${anime.image_url}"></a>
      </div>
    </li>
    `
  })
  .join('');
  animesList.innerHTML = htmlString;
};

//calling function
getAnimes();