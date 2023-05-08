import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../types/User';


const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const allUsers: User[] = JSON.parse(localStorage.getItem('allUsers') ?? '[]');

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.length < 10) {
      alert('Preencha o campo com um e-mail válido.');
      return;
    }

    const checkUser = allUsers.find(user => user.email === email);
    if (checkUser) {
      alert('Email já cadastrado');
      return;
    }

    if (password.length < 7) {
      alert('Crie uma senha com no mínimo 7 dígitos.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('As senhas digitadas não são iguais.');
      return;
    }

    const newUser: User = {
      email,
      password,
      errands: []
    };

    allUsers.push(newUser);

    alert('Conta criada com sucesso.');

    saveAccount(allUsers);

    navigate('/');
  };

  const saveAccount = (users: User[]) => {
    localStorage.setItem('allUsers', JSON.stringify(users));
  };

  function logout() {
    navigate('/');
  }

  return (
    <div>
      <Button type="button" variant="contained" color="error" size="large" onClick={logout}>
        Sair
      </Button>
      <Typography variant="h3" textAlign={'center'}>
          Criar a conta
        </Typography>
      <br />
      <br />
      <form onSubmit={handleSignUp}>
        <TextField fullWidth label="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <br />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <br />
        <TextField
          fullWidth
          label="Repita a senha"
          type="password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="warning" fullWidth>
          Criar
        </Button>
      </form>
    </div>
  );
};

export default Register;
