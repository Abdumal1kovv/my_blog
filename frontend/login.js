let form = document.getElementById('login-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let form_data = {
        'username': form.username.value,
        'password': form.password.value
    }

    fetch('http://127.0.0.1:8000/api/users/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form_data)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Data", data.access)
            if (data.access) {
                localStorage.setItem('token', data.access)
                window.location = 'file:///home/user/django_projects/blog_project3_frontend/projects-list.html'
            } else {
                alert("Username or password did not work")
            }
        })
})