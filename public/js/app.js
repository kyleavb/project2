
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
  console.log($(this).find('input[name="deckAddCardName"]').val())
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
