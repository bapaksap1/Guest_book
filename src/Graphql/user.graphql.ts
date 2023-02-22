import { gql } from "@apollo/client";


export const GUESTS = gql`
  query{
  guests {
    address
    createdAt
    description
    id
    name
    phoneNumber
    updatedAt
  }
}`

export const ADDGUEST= gql`
mutation($data: addGuestInput!){
  addGuest(data: $data){
    id
    name
    phoneNumber
    address
    description
  }
}`

export const DELETEBOOKCATEGORY = gql`
mutation($categoryId: ID!){ 
 deleteBookCategory(categoryId: $categoryId){
   id
   name
   }
 }
`

export const UPDATEBOOKCATEGORY = gql`
mutation($data: updateBookCategoryInput!){
   updateBookCategory(data: $data){
    updatedAt,
    createdAt
  }
}`