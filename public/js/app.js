
$(".fav-delete").click(function(e){
  e.preventDefault();
  $.ajax({
    method: "DELETE",
    url: $(this).attr('href')
  }).done(function(data){
    location.reload();
  })
})

$(".addCard").submit(function(e){
  e.preventDefault();
  $.ajax({
    method: "PUT",
    url: $(this).attr("action")
  }).done(function(data){
    location.reload();
  })
})
