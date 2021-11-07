function navbar(){
   return  `
      <h3><a href="index.html">Home</a></h3>
      <div id="search-container">
        <div id="recipe-search">
           <input  type="text" id="search-box" placeholder="Search Food" >
            <img  id="search-logo" class="cursor search-logos" src="https://github.com/pankaj5417/koovs.com/blob/main/icons/search-icon%20(1).png?raw=true" alt="">
        </div>
         <hr>
         <div  id="search-div1"></div>
      </div>

      <div id="options">
        <h3><a href="receipeofDay.html">receipe of the Day</a></h3>
        <h3><a href="latest.html">Latest Receipe</a></h3>
        <h3><a href="#">Sign In</a></h3>
        <h3><a href="#">Sign Up</a></h3>
      
      </div>`
}
export default navbar