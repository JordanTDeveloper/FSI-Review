let animals = document.querySelectorAll('.animal')
let votingContainer=document.querySelector("#voting-container")

const resetBtn=document.createElement('button')
resetBtn.textContent='Reset Count Total';

// clears local storage when page reloads
resetBtn.addEventListener('click',function(){
localStorage.clear()
window.location.reload();

})


votingContainer.append(resetBtn)


//// Dog code begins 
let dogVoteBtn=document.createElement('button')
animals[0].append(dogVoteBtn)

//isolate the vote count for the dog in the voting table
let dogVotesCell = document.querySelector("#doggo-votes");

dogVoteBtn.textContent = "Vote for Doggo"


//Now, we're adding this event listener
dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;

    localStorage.setItem('dog-votes',dogVotesCount)

})

let dogVotes=localStorage.getItem('dog-votes')

if(dogVotes){
    dogVotesCell.textContent=dogVotes
}
//// Dog code ends 

/* Cat code begins */
let catVoteBtn=document.createElement('button')
catVoteBtn.textContent='Vote for Catto'
animals[1].append(catVoteBtn)

//isolate the vote count for the cat in the voting table\\
let catVotesCell = document.querySelector("#catto-votes");

catVoteBtn.addEventListener('click', function(e) {
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount;
    localStorage.setItem('catto-votes',catVotesCount)

})

let catVotes=localStorage.getItem('catto-votes')
if(catVotes){
    catVotesCell.textContent=catVotes
}
/* Cat code end */

/* Fish code begins */
let fishVoteBtn=document.createElement('button')
fishVoteBtn.textContent='Vote for Fish Gold'
animals[2].append(fishVoteBtn)

//isolate the vote count for the fish in the voting table
let fishVotesCell = document.querySelector("#fish-votes");

//Now, we're adding this event listener


fishVoteBtn.addEventListener('click', function(e) {
    let fishVotesCount = parseInt(fishVotesCell.textContent);
    fishVotesCount = fishVotesCount + 1;
    fishVotesCell.textContent = fishVotesCount;
    localStorage.setItem('fish-votes',fishVotesCount)
    
})

let fishVotes=localStorage.getItem('fish-votes')
if(fishVotes){
    fishVotesCell.textContent=fishVotes
}



/* Fish code ends */


/* Favorite Pet Button */
let favoritePetBtn=document.createElement('button')
favoritePetBtn.textContent='Get Favorite Pet'

favoritePetBtn.addEventListener('click', function() {
    //which votes has most?
    let catVotes = parseInt(catVotesCell.textContent)
 
    
    let dogVotes = parseInt(dogVotesCell.textContent)
    let fishVotes = parseInt(fishVotesCell.textContent)
    let votes = [
        {id: 'doggo', votes: dogVotes}, 
        {id: 'catto', votes: catVotes}, 
        {id: 'fish', votes: fishVotes}
    ]
    let highestVotes = votes[0]
    for (let i = 0; i < votes.length; i++) {
        if(votes[i].votes > highestVotes.votes){
            highestVotes = votes[i]
        }
    }

    //reset all animals so we don't have two favorites
    for (let i = 0; i < animals.length; i++) {
        animals[i].style.backgroundColor = "#8A2BE2"
        
    }

    //add favorite class to pet's section
    let favoriteAnimal = document.querySelector("#"+highestVotes.id)
    favoriteAnimal.style.backgroundColor = "dodgerBlue"


})
votingContainer.append(favoritePetBtn)

