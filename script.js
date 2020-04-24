$(function() {
  $('#add-item')
    .click(function() {
      $('#list-empty').remove();
      
      let itemName = document.querySelector('.input-name').value;
      let itemDescription = document.querySelector('.input-description').value;
      let newItem = $('<div class="item"></div>');
      newItem.append(
        `<div class="item-name">
          <div>${itemName}</div>
          <div>
            <img class="close-item" src="/resources/img/closeMark.jpg" alt="closeMark">
          </div>
        </div>`
        );
      newItem.append(`<div class="item-description">${itemDescription}</div>`);
      newItem.appendTo($('#left-col'));
      document.querySelector('.input-name').value = '';
      document.querySelector('.input-description').value = '';
    });

    $('.close-item')
      .click(function() {
        $(this).parents('.item').remove();
      });
});


function wait() {
  let closeItem = document.querySelectorAll('.close-item');
  if (closeItem[0] != undefined) {
    console.log(2);
    for (let i = 0; i < closeItem.length; i++) {
      closeItem[i].addEventListener('click', event => event.target.parentNode.parentNode.parentNode.remove());
    }
    
  }  
}
document.addEventListener('click', wait);