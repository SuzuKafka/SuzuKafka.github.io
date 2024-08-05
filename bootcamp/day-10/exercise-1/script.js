console.log("Hello world!");

// Add your js code below here!

document.addEventListener('DOMContentLoaded', (event) => {
    const itemList = document.getElementById('item-list');

    itemList.addEventListener('click', function(event) {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });
});
