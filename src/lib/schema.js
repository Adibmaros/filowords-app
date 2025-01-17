import {z} from "zod"

export const loginSchema = z.object({
    email : z.string({required_error : "email is required"}).email({message : "email is not valid"}),
    password : z.string({required_error : "password is required"}).min(3,{message : "password is 3 characters minimimum"})
})

export const categorySchema = z.object({
    name : z.string({required_error : "name is required"}).min(3,{message : "name is 3 characters minimimum"}),
    description : z.string({required_error : "description is required"}).min(5,{message : "description is 10 characters minimimum"})
})

export const quoteSchema = z.object({
    content : z.string({required_error : "content is required"}).min(5,{message : "content is 5 characters minimimum"}),
    author : z.string({required_error : "author is required"}).optional(),
    category_id : z.number({required_error : "category id is required"})
})