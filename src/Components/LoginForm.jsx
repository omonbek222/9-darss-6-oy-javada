import React, { useState } from 'react';

const LoginForm = () => {
  // State'lar
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Email va parolni tekshirish
  const handleSubmit = (e) => {
    e.preventDefault(); // Formani yuborishdan oldin sahifa qayta yuklanishining oldini oladi

    // Email va parolni tekshirish
    if (email === 'test@example.com' && password === 'password123') {
      alert('Muvaffaqiyatli kirildi!');
      setError('');
    } else {
      setError('Email yoki parol noto‘g‘ri');
    }
  };

  return (
    <div>
      <h1>Kirish</h1>
      <form onSubmit={handleSubmit}>
        {/* Email input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Emailni state'ga saqlash
            required
          />
        </div>
        
        {/* Parol input */}
        <div>
          <label htmlFor="password">Parol:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Parolni state'ga saqlash
            required
          />
        </div>

        {/* Xato xabari */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Formani yuborish tugmasi */}
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default LoginForm;
