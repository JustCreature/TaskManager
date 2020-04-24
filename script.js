$(function() {
  $('#add-item')
    .click(function() {
      $('#list-empty').remove();
      
      let itemName = document.querySelector('.input-name').value;
      let itemDescription = document.querySelector('.input-description').value;
      let newItem = $('<div class="item"></div>');
      newItem.append(`<div class="item-name">${itemName}</div>`);
      newItem.append(`<div class="item-description">${itemDescription}</div>`);
      newItem.appendTo($('#left-col'));
      document.querySelector('.input-name').value = '';
      document.querySelector('.input-description').value = '';
    });
});