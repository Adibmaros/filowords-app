"use client"

import {useActionState} from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {editCategoryById} from "@/app/(admin)/dashboard/categories/lib/action";
import {useFormStatus} from "react-dom";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Terminal} from "lucide-react";
import {tambahCategory} from "@/app/(admin)/dashboard/categories/lib/action";

const initialState = {
    message : ""
}

const SubmitButton = () =>{
    const {pending} = useFormStatus();
    return (
        <Button disabled={pending} type="submit">{pending ? "Loading..." : "Save"}</Button>
    )
}

const FormCategory = ({data = null, type = "ADD"}) => {

    const updateCategoryById = (_,formData) => editCategoryById(_, formData,data?.id)

    const [state, formAction] = useActionState(type === "ADD" ? tambahCategory : updateCategoryById,initialState)

    return (
        <div className="flex justify-center h-screen items-center">
            <form action={formAction}>

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Category </CardTitle>
                        <CardDescription>Manajemen Seluruh Kategori</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            {state.message && <Alert variant={"destructive"}>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Error!</AlertTitle>
                                <AlertDescription>
                                    {state.message}
                                </AlertDescription>
                            </Alert>
                            }
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    name="name"
                                    id="name"
                                    placeholder="Name of your project"
                                    defaultValue={data?.name}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    name="description"
                                    id="description"
                                    placeholder="Name of your project"
                                    defaultValue={data?.description}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <SubmitButton/>
                    </CardFooter>
                </Card>
            </form>

        </div>
    );
};

export default FormCategory;