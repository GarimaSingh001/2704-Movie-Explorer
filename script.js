const BASE_URL="https://api.themoviedb.org/3/movie/popular";
const IMAGE = "https://image.tmdb.org/t/p/w500";
const API_KEY = "54d93d159214be0454ee455afa93365b";
const movieContainer=document.getElementById("movieContainer");
getMovies(); 
async function getMovies(){
    try{
        const response=await fetch(`${BASE_URL}?api_key=${API_KEY}`);
   const data=await response.json();
   console.log(data.results);
   displayMovie(data.results);
    }
    catch(error){
        console.log(error);
    }

   
} 
function displayMovie(movies){
    movieContainer.innerHTML="";
    movies.forEach(movie=>{
        const card=document.createElement("div");
        const poster=IMAGE+movie.poster_path;
        card.innerHTML=`
        <img src="${poster}"/>
        `;
        card.innerHTML=`
        <img src=${poster}/>
        <h3> "${movie.title}"</h3>
        <p class="rating">${movie.vote_average}</p>`;

        movieContainer.appendChild(card);
    });
}
