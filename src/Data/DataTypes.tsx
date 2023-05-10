export interface UserLogin {
  email: String;

  password: String;
}
export interface UserReg {
  name: String;
  email: String;
  phoneNumber: String;

  password: String;
  confirmPassword: String;
}
export interface Deposit {
  amount: Number;

  userId: any;
}
