document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous error messages
  document.querySelectorAll('.error').forEach(error => error.textContent = '');

  let isValid = true;

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format.';
    isValid = false;
  }

  // Password validation
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (password === '') {
    document.getElementById('passwordError').textContent = 'Password is required.';
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    document.getElementById('passwordError').textContent = 'Password must be at least 8 characters, contain an uppercase letter and a number.';
    isValid = false;
  }

  // Confirm password validation
  if (confirmPassword === '') {
    document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    alert('Registration successful!');
    // Optionally submit the form: this.submit();
  }
});