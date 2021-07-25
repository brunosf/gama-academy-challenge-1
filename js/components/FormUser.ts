import User from "../models/User";

export class FormUserRegister {
  email!: HTMLInputElement;

  password!: HTMLInputElement;

  passwordRepeat!: HTMLInputElement;

  form!: HTMLFormElement;

  errorElement!: HTMLElement;

  error: string = "";

  constructor(element: Element | null) {
    if (!element) {
      throw new Error(`Element is null`);
    }

    this.form = document.querySelector("#form-user") as HTMLFormElement;
    this.email = document.querySelector("#form-user-email") as HTMLInputElement;
    this.password = document.querySelector(
      "#form-user-password"
    ) as HTMLInputElement;
    this.passwordRepeat = document.querySelector(
      "#form-user-password-repeat"
    ) as HTMLInputElement;

    this.initListeners();
  }

  initListeners() {
    this.onChangeEmail();
    this.onChangePassword();
    this.onSubmit();
  }

  onChangeEmail() {
    this.email.addEventListener("keyup", (event: Event) => {
      event.preventDefault();
      this.isValidEmail();
    });
  }

  onChangePassword() {
    this.passwordRepeat.addEventListener("keyup", (event: Event) => {
      event.preventDefault();
      this.isValidPassword();
    });
  }

  onSubmit() {
    this.form.addEventListener("submit", (event: Event) => {
      event.preventDefault();

      if (!this.isValidEmail()) {
        this.renderError(
          "O formulário não foi enviado, corrija o campo de e-mail."
        );
        return;
      }

      if (!this.isValidPassword()) {
        this.renderError(
          "O formulário não foi enviado, corrija o campo de senha."
        );
        return;
      }

      this.save("user", new User(this.email.value, this.password.value));
    });
  }

  isValidEmail() {
    if (!this.email.value) {
      this.renderError("O campo e-mail não pode estar vazio.");
      return false;
    }

    this.renderError("");
    return true;
  }

  isValidPassword(): boolean {
    if (!this.password.value) {
      this.renderError("O campo senha não pode estar vazio.");
      return false;
    }

    if (!this.passwordRepeat.value) {
      this.renderError("O campo repetir senha não pode estar vazio.");
      return false;
    }

    if (this.password.value !== this.passwordRepeat.value) {
      this.renderError("As senhas digitadas não são iguais.");
      return false;
    }

    this.renderError("");
    return true;
  }

  renderError(error: string) {
    this.errorElement = document.querySelector(
      "#form-user-error"
    ) as HTMLElement;

    this.error = error;
    this.errorElement.innerHTML = this.error;
  }

  save(context: string, newUser: User) {
    let user!: User;
    const hasUser = localStorage.getItem(context);

    if (hasUser) {
      user = JSON.parse(hasUser);

      const userAlreadyRegistered = user.email === newUser.email;

      if (userAlreadyRegistered) {
        this.renderError("Usuário já cadastrado!");
        return;
      }
    }

    localStorage.setItem(context, JSON.stringify(newUser));
  }
}

export default FormUserRegister;
