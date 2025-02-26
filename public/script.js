// Handle registration form submission
document
  .getElementById('registerForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert(result.message || 'Registration successful!');
    } catch (err) {
      console.error('Registration error:', err);
      alert('Registration failed!');
    }
  });

// Handle login form submission
document
  .getElementById('loginForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.token) {
        alert('Login successful!');
        // Optionally store token in localStorage
        localStorage.setItem('token', result.token);
      } else {
        alert(result.message || 'Login failed!');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed!');
    }
  });
