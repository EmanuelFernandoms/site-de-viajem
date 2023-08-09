$('#hotel').change(function() {
    if ($(this).is(':checked')) {
      $('.hotel').css('display','inline-block');
      } else {
        $('.hotel').css('display','none');
      }
    });

    $('#casatemp').change(function() {
    if ($(this).is(':checked')) {
      $('.casatemp').css('display','inline-block');
      } else {
        $('.casatemp').css('display','none');
      }
    });

    $('#casaalug').change(function() {
    if ($(this).is(':checked')) {
      $('.casaalug').css('display','inline-block');
      } else {
        $('.casaalug').css('display','none');
      }
    });

    $('#resort').change(function() {
    if ($(this).is(':checked')) {
      $('.resort').css('display','inline-block');
      } else {
        $('.resort').css('display','none');
      }
    });

    $('#pousada').change(function() {
    if ($(this).is(':checked')) {
      $('.pousada').css('display','inline-block');
      } else {
        $('.pousada').css('display','none');
      }
    });

    
    // $('.hotel').css('display','inline-block');

    $(document).ready(function(){
    $('.modal1').click(function(){
    $('.modal1').fadeOut(500);
  });
    $('.destinos a').click(function(event){
      event.preventDefault();// desabilita a tag <a>
      abrirModal(this); //this == link
      function abrirModal(a){
        $('.body-modal1').html('');
        
        $('.modal1').fadeIn(500);

        let imgPath = $(a).attr('href');
        let title = $(a).children().attr('alt');
        let desc = $(a).children().attr('data-info');

        let h2 = `<h2>${title}</h2>`
        let img = `<img src="${imgPath}" alt="${title}">`
        let p = `<p>${desc}</p>`
        
        $('.body-modal1').append(h2);
        $('.body-modal1').append(img);
        $('.body-modal1').append(p);
      };
    });
  });

  $(document).ready(function(){
    $('#botao-massa').click(function(){
      $('.modal2').fadeOut(500);
    });
    $('section a').click(function(event){
      event.preventDefault();
      abrirModal2(this);
      function abrirModal2(a){
        $('.body-modal2').html('');

        $('.modal2').fadeIn(500)

        let imgPath = $(a).attr('href');
        let title = $(a).children().attr('alt');
        let desc = $(a).children().attr('data-info');

        let h2 = `<h2>${title}</h2>`
        let img = `<img src="${imgPath}" alt="${title}">`
        let p = `<p>${desc}</p>`

        
        $('.body-modal2').append(h2);
        $('.body-modal2').append(img);
        $('.body-modal2').append(p);

      };
    });
  });

