import { Dispatch, SetStateAction } from "react";

export interface IUser {
  id: number;
  name: string;
}

export interface linkNavbar {
  link: string;
  label: string;
}

export interface profile {
  id?: string;
  first_name?: string | null;
  last_name?: string | null;
  rank?: string | null;
}

export interface NavbarProps {
  username?: string | null | undefined;
}

export interface stateCart {
  showCart?: boolean;
  setShowCart?: Dispatch<SetStateAction<boolean>>;
}

export interface InitialRUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  showMore: boolean;
  errorLogin: string | null;
  phoneNumber: string;
}

export interface InitialRAction<T = any> {
  type: T;
  payload?: any;
}
