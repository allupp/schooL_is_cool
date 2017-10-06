
jQuery(document).ready(function(){


$( "#submit" ).click(function() {
   
  $( "ul" ).append("<li>" + $("#text").val() + "</li>");
  $("#text").val('');
  $("li").click(function(){
$(this).fadeOut();
}); 
  
});

 });

