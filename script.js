var ideaTitle = $('.main__input-title');
var ideaBody = $('.main__input-body');
var saveBtn = $('.main__button');
var deleteBtn = $('.article__button-delete');
var upVote = $('.upvote')
var downVote = $('.downvote')
var ideaSection = $('idea-section')

ideaSection.prepend (`<article>
        <h2 class="article__h2">${ideaTitle.val}</h2>
        <button class="article__button-delete"></button>
        <p>${ideaBody}</p>
        <button class="article__button downvote"></button>
        <button class="article__button upvote"></button>
        <p class="article__p-quality">quality  
          </p>
        <p class="article__p-quality">: swill</p>
        <hr>
      </article>`)
