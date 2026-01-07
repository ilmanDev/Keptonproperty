const registerForm = document.getElementById('registerForm');
if(registerForm){
  registerForm.addEventListener('submit', e=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    // Cek email sudah ada
    if(users.find(u=>u.email === email)){
      alert('Email sudah terdaftar');
      return;
    }
    users.push({name,email,password});
    localStorage.setItem('users', JSON.stringify(users));
    alert('Akun berhasil dibuat! Silahkan login.');
    window.location.href = 'login.html';
  });
}
