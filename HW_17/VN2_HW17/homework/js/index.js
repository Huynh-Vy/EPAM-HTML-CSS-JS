const formDiv = document.querySelector('#form');

const postDiv = document.createElement('div');
formDiv.insertAdjacentElement('afterend', postDiv);
postDiv.innerHTML = 'POST LISTS';
postDiv.style.display = 'none';

const commentDiv = document.createElement('div');
postDiv.insertAdjacentElement('afterend', commentDiv);
commentDiv.innerHTML = 'COMMENT LISTS';
commentDiv.style.display = 'none';

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach((user) => {
        const form = document.createElement('form');
        formDiv.appendChild(form);

        const name = document.createElement('input');
        name.setAttribute('type', 'text');
        name.setAttribute('class', 'name');
        name.setAttribute('value', `${user.name}`);
        name.style.marginBottom = '20px';
        name.style.border = 'none';
        name.style.outline = 'none';
        name.style.marginRight = '10px';
        name.style.cursor = 'pointer';
        name.setAttribute('readonly', 'readonly');
        form.appendChild(name);

        name.addEventListener('click', function(e) {
            e.preventDefault();
            postDiv.style.display === 'none' ? postDiv.style.display = 'block' : postDiv.style.display = 'none';
            commentDiv.style.display === 'none' 
            ? commentDiv.style.display = 'block' : commentDiv.style.display = 'none';

            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then((response) => response.json())
            .then((posts) => {
                posts.forEach((post) => {
                    const titleDiv = document.createElement('div');
                    postDiv.appendChild(titleDiv);
                    const h3 = document.createElement('h3');
                    titleDiv.appendChild(h3);

                    const bodyDiv = document.createElement('div');
                    postDiv.appendChild(bodyDiv);
                    const paragraph = document.createElement('p');
                    bodyDiv.appendChild(paragraph);

                    h3.innerHTML = post.title;
                    paragraph.innerHTML = post.body; 
                })
            })
            .catch((error) => {
                console.log(error);
            });

            const h3List = document.querySelectorAll('h3');
            h3List.forEach((h3) => {
                if(h3.innerHTML) {
                    h3.remove();
                }
            })

            const pList = document.querySelectorAll('p');
            pList.forEach((p) => {
                if(p.innerHTML) {
                    p.remove();
                }
            })

            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${user.id}`)
            .then((response) => response.json())
            .then((comments) => {
                comments.forEach((comment) => {
                    const name = document.createElement('div');
                    commentDiv.appendChild(name);
                    name.innerHTML = `Name: ${comment.name}`;
                    name.setAttribute('class', 'user');

                    const email = document.createElement('div');
                    commentDiv.appendChild(email);
                    email.innerHTML = `Email: ${comment.email}`;
                    email.setAttribute('class', 'email');

                    const body = document.createElement('div');
                    commentDiv.appendChild(body);
                    body.innerHTML = `Content: ${comment.body}`;
                    body.setAttribute('class', 'content');
                })
            })
            .catch((error) => {
                console.log(error);
            });

            const userList = document.querySelectorAll('.user');
            userList.forEach((user) => {
                if(user.innerHTML) {
                    user.remove();
                }
            })

            const emailList = document.querySelectorAll('.email');
            emailList.forEach((email) => {
                if(email.innerHTML) {
                    email.remove();
                }
            })

            const contentList = document.querySelectorAll('.content');
            contentList.forEach((content) => {
                if(content.innerHTML) {
                    content.remove();
                }
            }) 
        })

        const buttonSave = document.createElement('button');
        buttonSave.setAttribute('type', 'submit');
        buttonSave.setAttribute('name', 'save');
        buttonSave.setAttribute('value', 'save');
        buttonSave.innerHTML = 'Save';
        buttonSave.setAttribute('id', 'save');
        buttonSave.style.marginRight = '10px';
        buttonSave.style.border = 'none';
        buttonSave.style.backgroundColor = 'blue';
        buttonSave.style.color = 'white';
        buttonSave.style.display = 'none';
        buttonSave.style.padding = '0.5rem 1.5rem';
        buttonSave.style.borderRadius = '4px';
        buttonSave.style.cursor = 'pointer';
        form.appendChild(buttonSave);

        buttonSave.addEventListener('click', function(e) {
            e.preventDefault();
            buttonEdit.style.display = 'inline-block';
            this.style.display = 'none';

            name.style.outline = 'none';
            name.setAttribute('readonly', 'readonly');

            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => {
                console.log(error);
            });

        })
            
        const buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('type', 'submit');
        buttonEdit.setAttribute('name', 'edit');
        buttonEdit.setAttribute('value', 'edit');
        buttonEdit.innerHTML = 'Edit';
        buttonEdit.setAttribute('id', 'edit');
        buttonEdit.style.marginRight = '10px';
        buttonEdit.style.border = 'none';
        buttonEdit.style.backgroundColor = 'green';
        buttonEdit.style.color = 'white';
        buttonEdit.style.padding = '0.5rem 1.5rem';
        buttonEdit.style.borderRadius = '4px';
        buttonEdit.style.cursor = 'pointer';
        form.appendChild(buttonEdit);

        buttonEdit.addEventListener('click', function(e) {
            e.preventDefault();
            buttonSave.style.display = 'inline-block';
            this.style.display = 'none';

            name.style.outline = '2px solid grey';
            name.style.borderRadius = '2px';
            name.removeAttribute('readonly');
        })

       
        const buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('type', 'submit');
        buttonDelete.setAttribute('name', 'delete');
        buttonDelete.setAttribute('value', 'delete');
        buttonDelete.innerHTML = 'Delete';
        buttonDelete.setAttribute('id', 'delete');
        buttonDelete.style.marginRight = '10px';
        buttonDelete.style.border = 'none';
        buttonDelete.style.backgroundColor = 'orange';
        buttonDelete.style.color = 'white';
        buttonDelete.style.padding = '0.5rem 1.5rem';
        buttonDelete.style.borderRadius = '4px';
        buttonDelete.style.cursor = 'pointer';
        form.appendChild(buttonDelete);

        buttonDelete.addEventListener('click', function(e) {
            e.preventDefault();
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
                method: 'DELETE',
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        
            form.remove();
        })
    });      
})
.catch((error) => {
    console.log(error);
});



