function showMenu(){
    $('#navegacion').show();
    $('.boton').css('background-color', 'red');
    $('.boton').text('Click here to read more');
}




function init(){
   /*Jquery selector
   '3id' Selects an element by id
   '.class' Selects all elements that belong to that class
   'tag' Selects all elements of this type of tag
   */
    $('#navegacion').hide();
}
window.onload = init;