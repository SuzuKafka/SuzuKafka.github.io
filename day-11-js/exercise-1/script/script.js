function togglePattern() {
  // get the pattern
  var myPattern = document.getElementById('pattern');

  // also get the id of reveal button, so we can change what it says
  var patternButton = document.getElementById('patternButton');

  // now toggle the pattern and the button text, depending on current state using classList
  if (myPattern.classList.contains('invisible')) {
    myPattern.classList.remove('invisible');
    patternButton.textContent = 'Hide';
  } else {
    myPattern.classList.add('invisible');
    patternButton.textContent = 'Reveal!';
  }

}