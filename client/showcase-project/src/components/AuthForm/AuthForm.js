import {loginUser, registerUser} from "../../services/authServices";
import styles from "./css/authForm.module.css";
import { useState } from "react";

export function AuthForm() {
  const [selectedForm, setSelectedForm] = useState("login");
  const [loginFormVals, setLoginFormVals] = useState({
    email: "",
    password: ""
  });
  const [registerFormVals, setRegisterFormVals] = useState({
    name: "",
    surname: "",
    familyname: "",
    worktitle: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onValsChange = (e, authOption) => {
    if (authOption === "login") {
      setLoginFormVals((oldVals) => {
        return {
          ...oldVals,
          [e.target.name]: e.target.value,
        };
      });
    } else {
      setRegisterFormVals((oldVals) => {
        return {
          ...oldVals,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const onFormSelect = (option) => setSelectedForm(option);

  const onRegister = async (e) => {
    e.preventDefault()
    const {confirmPassword, ...valsToSend} = registerFormVals
    await registerUser(valsToSend)
  }

  const onLogin = async(e) => {
    e.preventDefault()
    await loginUser(loginFormVals)
  }

  return (
    <div className={styles["form-container"]}>
      <div className={styles["options-container"]}>
        <h3 onClick={() => onFormSelect('login')} className={styles["option"]}>Влизане в профил</h3>
        <div className={styles["line-divider"]}></div>
        <h3 onClick={() => onFormSelect('register')} className={styles["option"]}>Регистриране</h3>
      </div>
      {selectedForm === "login" ? (
        <form className={styles["auth-form"]} id={styles['login-form']} onSubmit={(e) => onLogin(e)}>
          <fieldset className={styles["auth-fieldset"]}>
            <input
              onChange={(e) => onValsChange(e, "login")}
              className={styles["auth-input"]}
              type="text"
              name="email"
              id="email"
              value={loginFormVals.email}
            />
            <label
              className={
                loginFormVals.email !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Имейл
            </label>
          </fieldset>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "login")}
              className={styles["auth-input"]}
              type="password"
              name="password"
              id="password"
              value={loginFormVals.password}
            />
            <label
              className={
                loginFormVals.password !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Парола
            </label>
          </fieldset>
          <button className={styles['login-btn']}>Влизане</button>
        </form>
      ) : (
        <form className={styles["auth-form"]} id={styles['register-form']} onSubmit={(e) => onRegister(e)}>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "register")}
              className={styles["auth-input"]}
              type="text"
              name="name"
              id="name"
              value={registerFormVals.name}
            />
            <label
              className={
                registerFormVals.name !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Име
            </label>
          </fieldset>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "register")}
              className={styles["auth-input"]}
              type="text"
              name="surname"
              id="surname"
              value={registerFormVals.surname}
            />
            <label
              className={
                registerFormVals.surname !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Презиме
            </label>
          </fieldset>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "register")}
              className={styles["auth-input"]}
              type="text"
              name="familyname"
              id="familyname"
              value={registerFormVals.familyname}
            />
            <label
              className={
                registerFormVals.familyname !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Фамилия
            </label>
          </fieldset>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "register")}
              className={styles["auth-input"]}
              type="text"
              name="email"
              id="email"
              value={registerFormVals.email}
            />
            <label
              className={
                registerFormVals.email !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Имейл
            </label>
          </fieldset>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "register")}
              className={styles["auth-input"]}
              type="text"
              name="worktitle"
              id="worktitle"
              value={registerFormVals.worktitle}
            />
            <label
              className={
                registerFormVals.worktitle !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Работна Длъжност
            </label>
          </fieldset>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "register")}
              className={styles["auth-input"]}
              type="password"
              name="password"
              id="password"
              value={registerFormVals.password}
            />
            <label
              className={
                registerFormVals.password !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Парола
            </label>
          </fieldset>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "register")}
              className={styles["auth-input"]}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={registerFormVals.confirmPassword}
            />
            <label
              className={
                registerFormVals.confirmPassword !== ""
                  ? styles["static"]
                  : styles["auth-label"]
              }
            >
              Потвърдете Парола
            </label>
          </fieldset>
          <button className={styles['register-btn']}>Регистрация</button>
        </form>
      )}
    </div>
  );
};
