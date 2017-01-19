$( document ).ready(function(){

  function goldenShower(timeToDrip){
    var $drops = $(),
        quantity = 15;

    for (var i = 0; i < quantity; ++i) {
      // Create drop
      var $drop = $("<div class='drop'><img src='./assets/drop_small.svg' alt='drop'></div>");

      // Update css
      $drop.css({
        'margin-left': (Math.random() * $('.shower').width()) + 'px',
        'margin-top': (- Math.random() * $('.shower').height()) + 'px'
      });
      // add this drop to the set of drops
      $drops = $drops.add($drop);
    }

    $('.drop-zone').prepend($drops);

    $drops.animate({
        'margin-top': "500px",
        'opacity' : "0",
    }, Math.random() + 2000, function(){
        $(this).remove();
    });
  }

  var $showerhead = $('.showerhead');

  $showerhead.on('click', function(){
    goldenShower();
  });

});
