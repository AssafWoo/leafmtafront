import { UserType } from "../../interfaces/user";

export const userInitialState: UserType = {
  userName: "",
  companyName: "",
  companySize: "",
  email: "",
  totalTreesEq: 0,
  totalCO2: 0,
  transactions: 0,
  loggedIn: false,
  error: null,
};
