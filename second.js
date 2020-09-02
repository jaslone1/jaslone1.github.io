$(() => {
  $('form').on('submit', (event)=>{
      event.preventDefault();
      const userInput = $('input[type="text"]').val()
    $.ajax({
  	   url: 'https://www.theaudiodb.com/api/v1/json/1/search.php?s=' + userInput
    }).then(
      (data)=>{

        $('.title').html(data.artists[0].strArtist);
        $('.bio').html(data.artists[0].strBiographyEN);
        $('.banner').attr('src', data.artists[0].strArtistBanner);
        $('#estab').html("est. " + data.artists[0].intFormedYear);
        $('.pic1').attr('src', data.artists[0].strArtistFanart);
        $('.pic2').attr('src', data.artists[0].strArtistFanart2);

        $('#buttonPic1').on('click', () => {
          $('.albumArt').children().hide();
          $('.pic1').show();
        })
        $('#buttonPic2').on('click', () => {
          $('.albumArt').children().hide();
          $('.pic2').show();
        })
        $('#bio').on('click', () => {
          $('.albumArt').children().hide();
          $('.bio').show();
        })
        console.log(data);


      })

    //   () => {
    //   console.log('badrequest');
    }
    );

  })
