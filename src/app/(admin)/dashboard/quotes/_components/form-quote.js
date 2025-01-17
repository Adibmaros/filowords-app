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
import {editQuoteById, tambahQuote} from "@/app/(admin)/dashboard/quotes/lib/action";
import {useFormStatus} from "react-dom";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Terminal} from "lucide-react";
import SelectCategory from "@/app/(admin)/dashboard/quotes/_components/select-category";

const initialState = {
    message : ""
}

const SubmitButton = () =>{
    const {pending} = useFormStatus();
    return (
        <Button disabled={pending} type="submit">{pending ? "Loading..." : "Save"}</Button>
    )
}

const FormQuote = ({data = null, type = "ADD", categories}) => {

    const updateQuoteById = (_,formData) => editQuoteById(_, formData,data?.id)

    const [state, formAction] = useActionState(type === "ADD" ? tambahQuote : updateQuoteById,initialState)

    return (
        <div className="flex justify-center h-screen items-center">
            <form action={formAction}>

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Quote </CardTitle>
                        <CardDescription>Manajemen Seluruh Quotes</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            {state.message && <Alert variant={"destructive"}>
                                <Terminal className="h-4 w-4"/>
                                <AlertTitle>Error!</AlertTitle>
                                <AlertDescription>
                                    {state.message}
                                </AlertDescription>
                            </Alert>
                            }
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="content">Content</Label>
                                <Input
                                    name="content"
                                    id="content"
                                    placeholder="Isi dengan konten filosofis"
                                    defaultValue={data?.content}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="author">Author</Label>
                                <Input
                                    name="author"
                                    id="author"
                                    placeholder="Masukkan nama author"
                                    defaultValue={data?.author}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="category">Category</Label>
                                    <SelectCategory defaultName={data?.category.id ?? ""} categories={categories}/>
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

export default FormQuote;