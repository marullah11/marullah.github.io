const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'mimin' && password === 'mimin123') {
        alert('Selamat Datang Mimin, Anda Administrator');
    } else if (username === 'budi' && password === 'budi123') {
        alert('Selamat Datang Budi, Anda Operator');
    } else {
        alert('Maaf Anda Gagal Login');
    }
});
