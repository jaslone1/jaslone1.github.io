alert("Search a band to see album art and info")
$(() => {
  $('form').on('submit', event=>{
      event.preventDefault();



      $('.header').hide();
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

        let currentIndex = 0;
        const numOfImages = $('.albumArt').children().length - 1;


          $('.carousel').on('click', () => {
          $('.albumArt').children().eq(currentIndex).hide();
          if (currentIndex < numOfImages) {
            currentIndex++;
          } else {
            currentIndex = 0
          }
            $('.albumArt').children().eq(currentIndex).show();
          })
        })

      $.ajax({
        url: 'https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + userInput
      }).then(
        (data)=>{
          const albumArray = []
          for (var i = 0; i < data.album.length; i++){
            name = data.album[i].strAlbum;
            albumArray.push(name);
          }
              const $modal = $('<div>').addClass('modal').text(albumArray);
              const $discoBtn = '<input type="button" value="discography" id="discoBTN"/>';
              $('#disco').append($discoBtn)
              $('body').append($modal)
        //
          $(discoBTN).on('click', () => {
            $('.modal').css('display','block')
        })
          $('.modal').on('click', () => {
            $modal.css('display', 'none')
          })
        // )
      })
      }
    )
  })
