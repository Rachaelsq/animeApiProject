
/* 
==========
SEARCH
==========
*/
const searchBar = document.getElementById('searchBar');
const charactersList = document.getElementById('charactersList');

searchBar.addEventListener('keyup', (e) =>{
  const searchString = e.target.value.toLowerCase();
  console.log(searchString)
  
//filter
  const filteredCharacters = hpCharacters.top.filter((character) => {
    return (
    character.title.toLowerCase().includes(searchString) ||
    character.type.toLowerCase().includes(searchString) 
    );
  });
  displayCharacters(filteredCharacters);
});


/* 
==========
API
==========
*/
const getCharacters = async () => {
  try {
    const res = await fetch(`
https://api.jikan.moe/v3/top/anime/1/upcoming
`);
    hpCharacters = await res.json();
    console.log(hpCharacters); 
    displayCharacters(hpCharacters.top);
  } catch(err) {
    console.error(err);
  }
};


/* 
============
RENDER TO DOM
============
*/const displayCharacters = (characters) => {
  const htmlString = characters
  .map((character) => {
    return `
    <li class="character">
      <div class="">
        <h2>${character.title}</h2>
        <a class="" href="${character.url}"><img class="" src="${character.image_url}"></a>
      </div>
    </li>
    `
  })
  .join('');
  charactersList.innerHTML = htmlString;
};

//calling function
getCharacters();