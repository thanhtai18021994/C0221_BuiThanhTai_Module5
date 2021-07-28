export class RegisterClass {
  private _email: string;
  private _password: string;
  private _country: string;
  private _gender: string;
  private _phone: string;
  private _age: number;

  constructor(email: string, password: string, country: string, gender: string, phone: string, age: number) {
    this._email = email;
    this._password = password;
    this._country = country;
    this._gender = gender;
    this._phone = phone;
    this._age = age;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
