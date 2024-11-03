const loadMoreBtn = document.getElementById('loadMoreButton');
const searchCards = document.getElementById('searchCards');

const listOfCards = Array.from(searchCards.children).map(child => child.cloneNode(true));


function loadMoreSearchItems(){
    // console.log(listOfCards)
    for (const element of listOfCards) {
        // console.log(element);
        const clonedElement = element.cloneNode(true); 
        searchCards.appendChild(clonedElement);
        console.log('adding node');
    }
}




loadMoreBtn.addEventListener('click', loadMoreSearchItems);



