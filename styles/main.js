(function(){
  'use strict';

//connect the function output to the ul listing

// ready to laod the page, start the sequence

  $(document).ready(function(){


// link to the HTML

  var $list = $('.mainBagContainer');
  // var resultstwo = rawEtsyDatatwo.results;




//Get JSON data from Etsy

          $.ajax({
            url: "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=leather + man + bags&includes=Images,Shop",
            dataType: 'jsonp'
          }).done(function(data){
            renderResults(data.results);
            
          });


//Get JSON data from Etsy based on search.

$('#searchbutton').on('click', function(){

  $.ajax({
    url: "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=" + $('#search').val() + "&includes=Images,Shop",
    dataType: 'jsonp'
  }).done(function(datatwo){
    renderResults(datatwo.results);
    console.log(datatwo);
  });






console.log($('#search').val());
});






//high and low price sorting


      $( "#highest" ).click(function() {
        var sorter = results.sort(function(a, b){
          return b.price-a.price;


        });

        $list.empty();
        filter(sorter);

      });

      $( "#lowest" ).click(function() {

        var sorter = results.sort(function(a, b){
          return a.price-b.price;

        });
        $list.empty();
        filter(sorter);

      });



// filter made a function

          function filter(resulter){

            resulter.forEach(function(item){

              var bagUpdate = renderTemplate('bag-item', {
                title: item.title,
                shop: item.Shop.shop_name,
                price: item.price,
                currency: item.currency_code,
                image: item.Images[0].url_170x135,
                url: item.url
              });

              //append to the HTML the rendered info

              $list.append(bagUpdate);
            });

            }

 // overall function

function renderResults(results){
  results.forEach(function(item){


    // template implementation


    var bagUpdate = renderTemplate('bag-item', {
      title: item.title,
      shop: item.Shop.shop_name,
      price: item.price,
      currency: item.currency_code,
      image: item.Images[0].url_170x135,
      url: item.url
    });

    //append to the HTML the rendered info

    $list.append(bagUpdate);
  });



}




// template structure defined

    function renderTemplate(name, data) {
      var $template = $('[data-template-name=' + name + ']').text();
      $.each(data, function(prop, value) {
        $template = $template.replace('<% ' + prop + ' %>', value);
      });
      return $template;
    }

});
}) ();
