var cardTitle = $(".form__input-title")
var cardBody = $(".form__input-body")

$(".idea-cards").on('click','.article__button-delete', deleteCard);
$('.form__button').on('click', saveButton);
$('.idea-cards').on('click', '.article__button-upvote', upVote);
$('.idea-cards').on('click', '.article__button-downvote', downVote);

function Card(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = id || $.now();
  this.quality = quality || "swill";
}

$(document).ready(pullFromLocal);

function cardPrepend(newCard) {
  $(".idea-cards").prepend(`
    <article id="${newCard.id}">
        <h2 class="article__h2">${newCard.title}</h2>
        <button class="article__button-delete"></button>
        <p class="article__p-body">${newCard.body}</p>
        <button class="article__button article__button-downvote"></button>
        <button class="article__button article__button-upvote"></button>
        <p class="quality">quality:\u00A0</p>
        <p class="quality article__p-quality">${newCard.quality}</p>
        <hr>
      </article>
      `);
}

function deleteCard() {
  var card = this.closest("article").id;
  localStorage.removeItem(card);
  this.closest("article").remove();
}

function saveButton(e) {
  e.preventDefault();
  var newCard = new Card(cardTitle.val(), cardBody.val());
  cardPrepend(newCard);
  addToLocal(newCard);
  clearFields();
}

function clearFields(){
  cardTitle.val("");
  cardBody.val("");
} 

function addToLocal(newCard) {
  var stringifyObj = JSON.stringify(newCard);
  localStorage.setItem(newCard.id, stringifyObj);
}

function pullFromLocal() {
  for(i=0; i < localStorage.length; i++) {
    var getCard = localStorage.getItem(localStorage.key(i));
    var newCard = JSON.parse(getCard);
    cardPrepend(newCard)
  }
}

function upVote(event) {
  var parentId = $(event.target).parent().attr('id'); 
  var currentQuality = $(event.target).siblings(".article__p-quality");
  if (currentQuality.text() === 'swill') {
    $(currentQuality).text('plausible');
  } else if (currentQuality.text() === 'plausible') {
    $(currentQuality).text('GENIUS');
  }
  console.log(currentQuality);
  var parsedCard = JSON.parse(localStorage.getItem(parentId));
  parsedCard.quality = $(currentQuality).text();
  localStorage.setItem(parsedCard.id, JSON.stringify(parsedCard));
}



function downVote(event) {
  var parentId = $(event.target).parent().attr("id");
  var currentQuality = $(event.target).siblings('.article__p-quality');
  if ($(currentQuality).text() === 'GENIUS') {
    $(currentQuality).text('plausible')
  } else if ($(currentQuality).text() === 'plausible') {
    $(currentQuality).text('swill')
  }
  var parsedCard = JSON.parse(localStorage.getItem(parentId))
  parsedCard.quality = $(currentQuality).text()
  localStorage.setItem(parsedCard.id, JSON.stringify(parsedCard))
}



