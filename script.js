$(function() {
  $('#add-item')
    .click(function() {
      console.log(1);
      
      let newItem = $('<div class="item"></div>')
      newItem.innerHTML = '<div class="item-name"></div><div class="item-description"></div>'
      newItem.appendTo($('#left-col'))
    });
});