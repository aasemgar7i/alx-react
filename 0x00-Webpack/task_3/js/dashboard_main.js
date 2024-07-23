import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg';

$('body').prepend(`<div id="logo"></div>`);
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clickMe">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('#logo').css({
  'background-image': `url(${logo})`,
  'width': '200px',
  'height': '200px',
  'background-size': '200px 200px',
  'background-repeat': 'no-repeat'
});

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#clickMe').on('click', _.debounce(updateCounter, 500));
