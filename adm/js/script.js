const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar as credenciais do usuário (substitua por sua lógica de autenticação)
  if (username === 'admin' && password === 'password123') {
    // Redirecionar para o dashboard
    sessionStorage.setItem('isLoggedIn', true);
    // Redirecionar para o dashboard
    window.location.href = 'dashboard.html';
    // Em cada página do painel

  } else {
    alert('Usuário ou senha inválidos');
  }
});