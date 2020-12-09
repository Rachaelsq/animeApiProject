const searchBar = document.getElementById('searchBar');
const charactersList = document.getElementById('charactersList');

//what is this?? why is this a variable?
const trying = "one piece bleach"

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


//api call
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


// showing api on the dom
const displayCharacters = (characters) => {
  const htmlString = characters
  .map((character) => {
    return `
    <li class="character">
      <div>
        <h2>${character.title}</h2>
        <a class="float_right" href="${character.url}"><img src="${character.image_url}"></a>
      </div>
     </li>
    `
  })
  .join('');
  charactersList.innerHTML = htmlString;
};

//calling function
getCharacters();