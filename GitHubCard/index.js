/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


function gitHubComponent (gitData) {
  
  const cardContainerDiv = document.createElement("div");
  cardContainerDiv.classList.add('card');

  const avatarImg = document.createElement('img');
  avatarImg.src= gitData.data.avatar_url;
  cardContainerDiv.appendChild(avatarImg);
      
  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');

  cardContainerDiv.appendChild(cardInfoDiv);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = gitData.data.name;
      
  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = gitData.data.login;

  const location = document.createElement('p');
  location.textContent = "Location: " + gitData.data.location;

  const profileURLContainer = document.createElement('p');
  profileURLContainer.textContent = "Profile: ";
      
  const profileURLAnchor = document.createElement('a');
  profileURLAnchor.href= gitData.data.html_url;
  profileURLAnchor.textContent = gitData.data.html_url;
      
  const followers = document.createElement('p');
  followers.textContent = "Followers: " + gitData.data.followers;

  const following = document.createElement('p');
  following.textContent = "Following: " + gitData.data.following;
      
  const bio = document.createElement('bio');
  bio.textContent = gitData.data.bio;
  
  cardInfoDiv.appendChild(name);
  cardInfoDiv.appendChild(username);
  cardInfoDiv.appendChild(location);
  cardInfoDiv.appendChild(profileURLContainer);
  profileURLContainer.appendChild(profileURLAnchor);
  cardInfoDiv.appendChild(followers);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(bio);
  
      
    
  return cardContainerDiv;
};

axios.get(`https://api.github.com/users/austinjhealy`)
  .then(response => {
    
    const cardsDiv = document.querySelector('.cards');
   
    cardsDiv.appendChild(gitHubComponent(response));
   
  })
  .catch(err => {
    return "There was an error";
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["makeTaller", "wmwebb-cf", "weinerjm14", "sarahmlawrence", "dstiles2"];


const url = `https://api.github.com/users/`;

followersArray.forEach((item) => {
   axios.get(url+item)
    .then (response => {
      cardsDiv = document.querySelector('.cards');
      cardsDiv.appendChild(gitHubComponent(response));
    })
   
    .catch(err => {
    return "There was an error";
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
