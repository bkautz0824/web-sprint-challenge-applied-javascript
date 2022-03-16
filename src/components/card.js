import axios from "axios";

const Card = (article) => {

const articleCard = document.createElement('div');
articleCard.classList.add('card');

  const headline = document.createElement('div');
  const author =  document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const articleSpan = document.createElement('span');
  
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');


  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  articleSpan.textContent = `By ${article.authorName}`;
  
  articleCard.appendChild(headline);
  articleCard.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  author.appendChild(articleSpan);
  

  
  articleCard.addEventListener("click", () =>{
    console.log(elem.headline);
    })
  


return articleCard;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  // TASK 6
const entryPoint = document.querySelector(selector);
axios.get(`http://localhost:5000/api/articles`)
.then(res => {
  console.log('articles', res.data.articles);
  console.log('1', Object.keys(res.data.articles));
  const entries = Object.entries(res.data.articles).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log(entries);
})
.catch(err => {
  console.error(err)
})
.finally(() =>{
  console.log("It's Working");
})



  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

// cardAppender('card-container');

export { Card, cardAppender }
