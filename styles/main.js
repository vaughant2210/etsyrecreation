(function(){
  'use strict';





/**connect the function output to the ul listing*/








// ready to laod the page, start the sequence

$(document).ready(function(){

//
// link to the HTML

  var $list = $('.mainBagContainer');


 // overall function

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

});


// template structure defined

    function renderTemplate(name, data) {
      var $template = $('[data-template-name=' + name + ']').text();
      $.each(data, function(prop, value) {
        $template = $template.replace('<% ' + prop + ' %>', value);
      });
      return $template;
    }

  })();


  // '<div class="col">'+
  //
  // '<div>' + '<img class="item-image" src="' + item.Images[0].url_170x135 +'"/>'+ '</div>' +
  //
  // '<div>' + '<h5 class="title">' + item.title + '</h5>' + '</div>' +
  //
  // '<div class="owner">' +  '<div class= "ownerone">' + '<h6>' + '<a href="' + item.url + '">' + item.Shop.shop_name + '</a>' +  '</h6>' + '</div>' + '<div class="ownertwo">' + '<h6>' + item.price + item.currency_code + '</h6>' + '</div>' +
  // '</div>' +
  //
  // '</div>'
  //
