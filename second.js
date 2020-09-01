$(() => {
  $('form').on('submit', (event)=>{
      event.preventDefault();

      const userInput = $('input[type="text"]').val()

    $.ajax({
  	   url: 'https://www.theaudiodb.com/api/v1/json/1/search.php?s=' + userInput
    }).then(
      (data)=>{
        console.log(data.artists[0]);
        $('#title').html(data.artists[0].strArtist);
        $('#extra').html(data.artists[0].strBiographyEN);
        $('.pic1').attr('src', data.artists[0].strArtistFanart);
        $('.pic2').attr('src', data.artists[0].strArtistFanart2);
        $('.banner').attr('src', data.artists[0].strArtistBanner);
        $('#estab').html("est. " + data.artists[0].intFormedYear)
        const artistID = data.artists[0].idArtist
        console.log(artistID);
        $.ajax({
           url: 'https://www.mvid.php?i=(artistid}=' + artistID
        }).then(
          (videos)=>{
            console.log(videos);
    },

    () => {
      console.log('badrequest');
      }
    );
  })
  })
})
