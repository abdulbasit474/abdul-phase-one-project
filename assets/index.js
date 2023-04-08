 //implement getBeer
 const getBeer = () => {
    //fetch data from PUNK API
 fetch ('https://api.punkapi.com/v2/beers?per_page=6')  
 //then grb the response and convert to JSON
 .then(resp =>resp.json())
 //then render the berr data
 .then (renderBeer)
 }

 //implement renderBeer
 const renderBeer = beerArray => {
   //for each beer from fetch
   beerArray.forEach(beer => {
    const {image_url,name} = beer;
   
    //creat an image element
    const img = document.createElement('img');
     //assign the image url to be the image source
     img.src = image_url;

   //creat a heading element
   const beerName = document.createElement('h3');
    //assign the text content to be the name of the beer
    beerName.textContent = name;

   //creat a container to hold the image and name
   const card = document.createElement('div');
   card.className = 'card';
   card.append(img,beerName);
   //append the container to item container
   document.querySelector('.item-container').appendChild(card);
   })
 } 
//When the html page loads to the DOM
document.addEventListener('DOMContentLoaded', () => {
    //invoke getBeer
    getBeer();
})