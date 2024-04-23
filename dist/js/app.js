"use strict";

window.$ = require('./jQuery.js');
var quotes = ["Ostvari svoj potencijal!", "Nema problema koji ne možete riješiti!", "Svaki dan je nova prilika za uspjeh!", "Nikada nemojte odustati od svojih snova!", "Vi ste izvanredna osoba!", "Git moze biti super stvar, osim ako obrises sve foldere"];
$(function () {
  var quote = $("#quote");
  var generateBtn = $("#generate");
  generateBtn.on({
    click: function click() {
      var randomIndex = Math.floor(Math.random() * quotes.length);
      quote.fadeOut(1500, function () {
        quote.text(quotes[randomIndex]);
      }).fadeIn();
    }
  });
});