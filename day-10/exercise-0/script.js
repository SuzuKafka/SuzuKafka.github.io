console.log("Hello world!");

/*
Exercise section 1 [Query Selector Challenges Solution]
Use querySelector or querySelectorAll to select:
- Banner image.
- H1 text.
- All list items.
- Done items.
- Not-done items 
- All buttons
- Done button.
- Not-done button.
*/
// Add your js code below here!

// Select the banner image
const bannerImage = document.querySelector('.banner');

// Select the H1 text
const h1Text = document.querySelector('h1');

// Select all list items
const allListItems = document.querySelectorAll('li');

// Select done items
const doneItems = document.querySelectorAll('.done');

// Select not-done items
const notDoneItems = document.querySelectorAll('.not-done');

// Select all buttons
const allButtons = document.querySelectorAll('button');

// Select the Done All button
const doneAllButton = document.getElementById('done-all-btn');

// Select the Not Done All button
const notDoneAllButton = document.getElementById('not-done-all-btn');


/*
Exercise section 2 [Manipulating Element Challenges]
Using JS to make these changes:
- Get h1 text and change its text value and color.
- Get second list item text and change its value.
- Get the image link url and change it to another link.
- Change all list items to be done.
- Change all list items from done to be not done and vice versa.
*/
// Add your js code below here!

// Change the h1 text value and color
h1Text.textContent = 'My Updated Todos';
h1Text.style.color = 'blue';

// Change the second list item text value
allListItems[1].textContent = 'Watch a new JavaScript tutorial.';

// Change the image link url
bannerImage.src = 'img/done.jpg';

// Change all list items to be done
allListItems.forEach(item => {
    item.classList.remove('not-done');
    item.classList.add('done');
});

// Change all list items from done to be not done and vice versa
allListItems.forEach(item => {
    if (item.classList.contains('done')) {
        item.classList.remove('done');
        item.classList.add('not-done');
    } else {
        item.classList.remove('not-done');
        item.classList.add('done');
    }
});


/*
Exercise section 3 [EventListener Challenges]
Using addEventListener() to handle these events:
- Clicking on the button “Done All” makes all list items to be done.
- Clicking on the button “Not Done All” makes all list items to be done.
- Clicking on any item list will make the item toggle from done to not done or vice versa.
*/
// Add your js code below here!

// Event listener for the "Done All" button
doneAllButton.addEventListener('click', () => {
    allListItems.forEach(item => {
        item.classList.remove('not-done');
        item.classList.add('done');
    });
});

// Event listener for the "Not Done All" button
notDoneAllButton.addEventListener('click', () => {
    allListItems.forEach(item => {
        item.classList.remove('done');
        item.classList.add('not-done');
    });
});

// Event listener for each list item to toggle done/not done
allListItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('done');
        item.classList.toggle('not-done');
    });
});

// Event listener for the banner image to change when clicked
bannerImage.addEventListener('click', () => {
    if (bannerImage.src.includes('done.jpg')) {
        bannerImage.src = 'img/banner.png';
    } else {
        bannerImage.src = 'img/done.jpg';
    }
});