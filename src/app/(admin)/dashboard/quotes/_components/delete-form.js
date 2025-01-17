//form delete

"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, {useActionState} from "react";
import {  useFormStatus } from "react-dom";
import {deleteQuote} from "@/app/(admin)/dashboard/quotes/lib/action";

const initialState = {
    error: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="destructive"
            size="sm"
            disabled={pending}
        >
            <Trash className="w-4 h-4 mr-2" />
            {pending ? "Loading..." : "Delete"}
        </Button>
    );
}

export default function FormDelete({ id }) {
    const deleteCategoryWithId = (_, formData) => deleteQuote(_, formData, id);

    const [state, formAction] = useActionState(
        deleteCategoryWithId,
        initialState
    );

    return (
        <form action={formAction}>
            <SubmitButton />
        </form>
    );
}
