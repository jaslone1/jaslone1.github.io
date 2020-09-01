$(() => {
  $('form').on('submit', (event)=>{
      event.preventDefault();

      const userInput = $('input[type="text"]').val()

      let currentImgIndex = 0;
      const numOfImages = $('.albumArt').children().length - 1;
      $('.button-next').on('click', () => {
        $('.albumArt').children().eq(currentImgIndex).hide();
        if (currentImgIndex < numOfImages) {
            currentImgIndex++;
        } else {
          currentImgIndex = 0
        }
        $('.albumArt').children().eq(currentImgIndex).show();
      })
      
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
