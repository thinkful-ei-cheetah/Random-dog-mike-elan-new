'use strict';
/* global $ */

function getDogImage(numberOfDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.' + error.message));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.image').html('');
  for(let i = 0; i < responseJson.message.length; i++) {
    $('.images').append(`<img src="${responseJson.message[i]}" class="results-img">`);
  }
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const randomNumberOfDogs = $('#number-of-dogs').val();
    if(randomNumberOfDogs < 51 && randomNumberOfDogs > 0) {
      getDogImage(randomNumberOfDogs);
    } else {
      throw new Error('Please select between 1 and 50 dogs');
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});