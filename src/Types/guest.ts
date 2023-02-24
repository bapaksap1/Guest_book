import { StringLiteral } from "typescript";

export type TForm = {
  name: string;
  phoneNumber: string;
  address : string;
  description: string;
}

export type TGuest = {
  id: string;
  name: string;
  phoneNumber : string;
  address: string;
  description: string;
  createdAt: string;

}

export type TMutationAddGuest = {
  addGuest: {
    id: string;
    name: string;
    phoneNumber: string;
    address: string;
    description:string;
  }
}