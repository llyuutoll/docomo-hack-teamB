var getUrl = '';
var res;
//let test = [["",""],[""]]
/*
function dispLoading(msg) {
  //引数なし（メッセージなし）を許容
  if (msg == undefined) {
    msg = '';
  }
  //画面表示メッセージ
  var dispMsg = "<div class='loadingMsg'>" + msg + '</div>';
  // ローディング画像が表示されていない場合のみ出力
  if ($('#loading').length == 0) {
    $('body').append("<div id='loading'>" + dispMsg + '</div>');
  }
}

function removeLoading() {
  $('#loading').remove();
  $('#notice').fadeIn(500);
}

$(function() {
  dispLoading('Now Loading...');
  $.ajax({
    url: getUrl + '/notifications',
    type: 'GET',
    dataType: 'json'
  })
    .done(response => {
      console.log(response.notifications);
      res = response.notifications;
      for (var i = 0; i < res.Some quick example text to build on the card title and make up the bulk of the card's content.length; i++) {
        var date = new Date(res[i].released_at);
        var month = date.getMonth();
        if (month == 0) {
          month = 1;
        } else {
          month = month + 1;
        }
        // console.log(date);
        // console.log(date.getDate());
        // console.log(date.getMonth());

        $('#notice').append('<div class=toggle></div>');
        $('.toggle')
          .eq(i)
          .append('<p id=theme></p>');

        if (i === 0) {
          $('.toggle')
            .eq(i)
            .append(
              "<div id=content style='display: block'><p id=in></p><div id=date></div></div>"
            );
        } else {
          $('.toggle')
            .eq(i)
            .append('<div id=content><p id=in></p><div id=date></div></div>');
        }
        $('.toggle #date')
          .eq(i)
          .append('<p id=year></p><p id=month></p><p id=day></p>');
        $('#notice #theme')
          .eq(i)
          .text(res[i].title);
        $('#notice #content #in')
          .eq(i)
          .text(res[i].body);
        $('#notice #content #date #year')
          .eq(i)
          .text(date.getFullYear() + '年');
        $('#notice #content #date #month')
          .eq(i)
          .text(month + '月');
        $('#notice #content #date #day')
          .eq(i)
          .text(date.getDate() + '日');
      }

      $(function() {
        $('#notice #theme').click(function() {
          $(this)
            .next('#content')
            .slideToggle();
        });
        $('#notice #content').click(function() {
          $(this).slideToggle();
        });
      });
    })
    .fail(response => {
      console.log('Fail..');
      console.log(response);
    })
    .always(function() {
      removeLoading();
    });
});
*/

<<<<<<< HEAD
$('#solve').on('click', function() {
  $("this").text("解決済み");
  alert(1)
=======
$(function() {
  $('.btn btn-success center-block').click(function(e) {
    $(".btn btn-success center-block").text("解決済み");
  });
});

$('#solve').on('click', function() {
  $("#solve").text("解決済み");
>>>>>>> 3b9c1cbcf30c4fee8fa90cf60884c7a5a47c3650
});