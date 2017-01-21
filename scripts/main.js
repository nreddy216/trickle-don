$( document ).ready(function(){

  console.log("Pls don't look at my bad code");

  var $face = $('.face img');


  function goldenShower(timeToDrip){
    var $drops = $(),
        quantity = 15;

    for (var i = 0; i < quantity; ++i) {
      // Create drop
      var $drop = $("<div class='drop'><img src='./assets/drop_small.svg' alt='drop'></div>");

      // Update css
      $drop.css({
        'margin-left': (Math.random() * $('.shower').width()) + 'px',
        'margin-top': (- Math.random() * $('.shower').height() + $('.shower').height()/2.5) + 'px'
      });
      // add this drop to the set of drops
      $drops = $drops.add($drop);
    }

    $('.drop-zone').prepend($drops);

    $drops.animate({
        'margin-top': "80%",
        'opacity' : "0",
    }, Math.random() + 2000, function(){
        $(this).remove();
        $face.attr('src', './assets/faces/face_smug.png');
    });

  }

  var $showerhead = $('.showerhead');

  $showerhead.on('click', function(){
    goldenShower();
    $face.attr('src', './assets/faces/face_ouch.png');
  });


  // weird minified tweet
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

});
