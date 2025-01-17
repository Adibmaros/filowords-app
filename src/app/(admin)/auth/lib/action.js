"use server"
import {loginSchema} from "@/lib/schema";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import {redirect} from "next/navigation";


export async function loginAction(_, formData){
    const validate = loginSchema.safeParse({
        email : formData.get("email"),
        password : formData.get("password")
    })

    if (!validate.success) {
        return {
            message: validate.error.errors[0].message
        };
    }
        const user = await prisma.admin.findFirst({
            where : {
                email : validate.data.email
            }
        })

        if (!user) {
            return {
                message : "User not found"
            }
        }

        const comparePassword = bcrypt.compareSync(validate.data.password, user?.password);

        console.log(comparePassword)

        if (!comparePassword) {
            return {
                message : "Invalid password"
            }
        }
        return redirect("/dashboard")

}