document.addEventListener('DOMContentLoaded', function () {

    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    // Enter your code here: delete movies
    list.addEventListener('click', (e) => {
        if (e.target.className === 'delete') {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });


    // Enter your code here: add movies
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function (e) {

        if (addForm.querySelector('input[type="text"]').value === '') {
            alert('Please enter a movie name');
            
        } else {

            const li = document.createElement('li');

            //add movie name
            const movieName = document.createElement('span');
            const value = addForm.querySelector('input[type="text"]').value;
            movieName.textContent = value;
            movieName.classList.add('name');
            li.appendChild(movieName);

            //add delete button
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'delete';
            deleteBtn.classList.add('delete');
            li.appendChild(deleteBtn);

            //merge li to list
            list.appendChild(li);

            //reset form
            addForm.querySelector('input[type="text"]').value = '';

        }
        e.preventDefault();
        
    });
});