var cardTitle = $('.form__input-title');
var cardBody = $('.form__input-body');
var saveButton = $('.form__button');
var deleteButton = $('.article__button-delete');
var upVoteButton = $('.article__button-upvote');
var downVoteButton = $('.article__button-downvote');
var cardSection = $('.section__input');

saveButton.on('click', prependCard);

$(document).ready(pullFromLocal);

function prependCard() {
    event.preventDefault();
    cardSection.prepend(`
        <article>
            <h2 class="article__h2">${cardTitle.value}</h2>
            <button class="article__button-delete"></button>
            <p class="article__p-body">${cardBody.value}</p>
            <button class="article__button article__button-downvote"></button>
            <button class="article__button article__button-upvote"></button>
            <p class="article__p-quality">quality</p>
            <p class="article__p-quality">: swill</p>
            <hr>
        </article>`);
}

