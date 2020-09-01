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
        $('.banner').attr('src', data.artists[0].strArtistBanner);
        $('#estab').html("est. " + data.artists[0].intFormedYear);

        $('$buttonPic1').on('click', () => {
        $('.pic1').attr('src', data.artists[0].strArtistFanart);
      })
        // $('$buttonPic2').on('click', () => {
        // $('.pic2').attr('src', data.artists[0].strArtistFanart2);
        // $('$bio').on('click', () => {

      })

    //   () => {
    //   console.log('badrequest');
    }
    );

  })

// $('.button-next').on('click', () => {
//   $('.albumArt').children().eq(currentImgIndex).css('display', 'none');
//   if (currentImgIndex < numOfImages) {
//       currentImgIndex++;
//   } else {
//     currentImgIndex = 0
//   }
//   $('.albumArt').children().eq(currentImgIndex).show();
// })
