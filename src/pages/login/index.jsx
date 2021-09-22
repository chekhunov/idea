import React, { useState, useEffect } from 'react';
import style from './Login.module.css';

const Login = ({ initialState }) => {
  const [phone, setPhone] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [phoneError, setPhoneError] = useState('Телефон не може бути пустим');
  const [passwordError, setPasswordError] = useState('Пароль не може бути пустим');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (phoneError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [phoneError, passwordError]);

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re =
      /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/;

    if (!re.test(Number(e.target.value))) {
      setPhoneError('Некорректний телефон');
    } else {
      setPhoneError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'phone':
        setPhoneDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль повинен бути задовж 3 чисел і меньш 8');
      if (!e.target.value) {
        setPasswordError('Пароль не може бути пустим');
      }
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className={style.login}>
      <div className="container">
        <form className={style.form}>
          <h1 className={style.title}>Регистрация</h1>
          {phoneDirty && phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
          <input
            className={style.phone}
            onChange={(e) => phoneHandler(e)}
            value={phone}
            onBlur={(e) => blurHandler(e)}
            name="mail"
            type="mail"
            placeholder="Номер телефона..."
          />
          {passwordDirty && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
          <input
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            name="password"
            type="password"
            placeholder="Пароль..."
          />
          <button disabled={!formValid} className={style.btn} type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
