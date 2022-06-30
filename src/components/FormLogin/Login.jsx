import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginMember } from '../../redux/Actions/Action';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../custom/useLocalStorage';
import Google from './google.png';
import Facebook from './facebook.png';
import Github from './github.png';
import s from './Login.module.css';
import validate from './validate';

export default function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useLocalStorage('input', {
    email: '',
    password: '',
  });
  const { email, password } = input;
  const [errors, setErrors] = useState({});

  const HandleChange = e => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (email !== '' && password !== '');
    else if (input.email && input.password && !Object.keys(errors).length) {
      setLoading(true);
      dispatch(loginMember());
      setInput({ email: '', password: '' });
      setLoading(false);
    }
  };

  return (
    <div className={s.login}>
      <h1 className={s.loginTitle}>Welcome to Club Henry 👍</h1>
      <h3 className={s.loginTitle2}>Choose a Login Method</h3>

      <div className={s.wrapper}>
        <div className={s.left}>
          <div className={s.loginButtongoogle}>
            <img src={Google} alt="Google" className={s.icon} />
            Google
          </div>
          <div className={s.loginButtonfacebook}>
            <img src={Facebook} alt="Facebook" className={s.icon} />
            Facebook{' '}
          </div>
        </div>

        <div className={s.center}>
          <div className={s.line} />
          <div className={s.or}>OR</div>
        </div>

        <form className={s.right} onSubmit={onSubmit}>
          <input
            className={s.input}
            onChange={HandleChange}
            value={email}
            name="email"
            id="email"
            type="email"
            placeholder="E-mail..."
            autoComplete="off"
          />
          {errors.email && <p className={s.errors}>{errors.email}</p>}
          <input
            className={s.input}
            onChange={HandleChange}
            value={password}
            name="password"
            id="password"
            type="password"
            placeholder="Password..."
            autoComplete="off"
          />
          {errors.password && <p className={s.errors}>{errors.password}</p>}

          {/* HACER RENDERIZADO CONDICIONAL PARA USER O ADMIN */}
          <Link to={'/admin'}>
            <button className={s.submit} type="submit">
              Iniciar Sesión
            </button>
          </Link>
          <br />
          <p>
            Aun no tienes cuenta? <Link to="/register">Registrate!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
