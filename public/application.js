$(document).ready(function(){
	// $("#player_hit").click(function(event){
  $(document).on("click","#player_hit",function(event){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/game",
      data: {
        turn: "player_turn",
        hit_or_stay: "h"
      }
    }).done(function(data){
      console.log(data);
      $("#game").replaceWith(data);
    });
	});

  $(document).on("click","#player_stay",function(event){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/game",
      data: {
        turn: "player_turn",
        hit_or_stay: "s"
      }
    }).done(function(data){
      $("#game").replaceWith(data);
    });
	});


  $(document).on("click","#dealer_turn",function(event){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/game",
      data: {
        turn: "dealer_turn",
      }
    }).done(function(data){
      $("#game").replaceWith(data);
    });
	});
});
