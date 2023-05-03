import $ from "jquery";
import './js/vcollapse';

$(function () {
  console.log("Ready");

  $('.my-collapse').each(function() {
    $(this).vCollapse({
      'any': false,
      'onLoad': 0,
      'speed': 300,
      'easing': 'ease-in-out',
      'autoScroll': true,
      'group': true
    });
  });
});
