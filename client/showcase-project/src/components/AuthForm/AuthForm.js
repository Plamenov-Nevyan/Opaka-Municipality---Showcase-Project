import styles from "./css/authForm.module.css";
import { useState } from "react";

export function AuthForm() {
  const [selectedForm, setSelectedForm] = useState("login");
  const [loginFormVals, setLoginFormVals] = useState({
    email: "",
    password: "",
  });
  const [registerFormVals, setRegisterFormVals] = useState({
    name: "",
    surname: "",
    familyName: "",
    workTitle: "",
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

  return (
    <div className={styles["form-container"]}>
      <div className={styles["options-container"]}>
        <h3 onClick={() => onFormSelect('login')} className={styles["option"]}>Влизане в профил</h3>
        <div className={styles["line-divider"]}></div>
        <h3 onClick={() => onFormSelect('register')} className={styles["option"]}>Регистриране</h3>
      </div>
      {selectedForm === "login" ? (
        <form className={styles["auth-form"]} id={styles['login-form']}>
          <fieldset className={styles["auth-fieldset"]}>
            <input
              onChange={(e) => onValsChange(e, "login")}
              className={styles["auth-input"]}
              type="text"
              name="email"
              id="email"
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
        <form className={styles["auth-form"]} id={styles['register-form']}>
          <fieldset className={styles['auth-fieldset']}>
            <input
              onChange={(e) => onValsChange(e, "register")}
              className={styles["auth-input"]}
              type="text"
              name="name"
              id="name"
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
              name="familyName"
              id="familyName"
            />
            <label
              className={
                registerFormVals.familyName !== ""
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
              name="workTitle"
              id="workTitle"
            />
            <label
              className={
                registerFormVals.workTitle !== ""
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
