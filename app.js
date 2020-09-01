$(() => {
  $('form').on('submit', (event)=>{
      event.preventDefault();

      const userInput = $('input[type="text"]').val()

    $.ajax({
  	   url: 'https://www.theaudiodb.com/api/v1/json/1/search.php?s=' + userInput
    }).then(
      (data)=>{
        $('#title').html(data.artists[0].strArtist);
        $('#extra').html(data.artists[0].strBiographyEN);
        $('.pic').attr('src', data.artists[0].strArtistFanart);
        console.log(data.artists[0]);
    },
    () => {
      console.log('badrequest');
      }
    );
  })
})
