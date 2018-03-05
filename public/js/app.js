$(".addPost").click(function(e){
  console.log("redirect")
  e.preventDefault();
  $.ajax({
    method: "POST",
    url:$(this).attr('href'),
    data: {
      deckId: $(this).attr('data-deck')
    }
  }).done(function(data){
    location.reload();
  })
})
$(".fav-delete").click(function(e){
  e.preventDefault();
  $.ajax({
    method: "DELETE",
    url: $(this).attr('href')
  }).done(function(data){
    location.reload();
  })
})

$(".removeCardFromDeck").click(function(e){
  e.preventDefault();
  $.ajax({
    method:"PUT",
    url:$(this).attr("href")
  }).done(function(data){
    try{
      location.reload();
    }
    catch(err){
      window.history.back()
    }
  })
})

$(".deleteDeck").click(function(e){
  e.preventDefault();
  $.ajax({
    method:"DELETE",
    url: $(this).attr("href")
  }).done(function(data){
    location.reload();
  })
})

$(".addCard").submit(function(e){
  e.preventDefault();
  $.ajax({
    method: "PUT",
    url: $(this).attr("action"),
    data: {
      deckAddCardName: $(this).find('input[name="deckAddCardName"]').val(),
      deckAddCardImg: $(this).find('input[name="deckAddCardImg"]').val()
    }
  }).done(function(data){
    console.log("added")
    location.reload();
  })
})
