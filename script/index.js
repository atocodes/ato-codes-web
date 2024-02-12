let isPaused = false;
const CARD = document.getElementById("card");
const CARDTITLE = document.getElementById("card-title");
const CARDDESCRIPTION = document.getElementById("card-description");
let content_index = 0;

const changeCardContent = () => {
  const { title, description } = contents[content_index];
  CARDTITLE.textContent = title;
  CARDDESCRIPTION.textContent = description;
  content_index >= contents.length - 1 ? (content_index = 0) : content_index++;
};

function upadetPauseState(){
    isPaused = !isPaused
    return main()
}

function main() {
  isPaused ? null : setInterval(changeCardContent, 5000);

  CARD.onmouseover = upadetPauseState;
  CARD.onmouseleave = upadetPauseState;
}

main();
