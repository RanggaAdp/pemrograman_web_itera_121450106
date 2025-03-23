function validateForm() {

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

 
    document.getElementById('nama-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let isValid = true;


    if (nama.length <= 3) {
        document.getElementById('nama-error').textContent = 'Nama harus lebih dari 3 karakter';
        isValid = false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Email tidak valid';
        isValid = false;
    }


    if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password harus minimal 8 karakter';
        isValid = false;
    }


    if (isValid) {
        alert('Form berhasil dikirim!');
        return true; 
    } else {
        return false; 
    }
}