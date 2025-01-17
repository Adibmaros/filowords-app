"use client"

import { Terminal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useFormStatus} from "react-dom";
import {useActionState} from "react";
import {loginAction} from "@/app/(admin)/auth/lib/action";

const initialState = {
  message : ""
}

const SubmitButton = () => {
  const {pending} = useFormStatus()
  return (
      <Button disabled={pending} type="submit" className="w-full">
        {pending ? "Loading..." : "Login"}
      </Button>
  )

}


export function LoginForm({
  className,
  ...props
}) {

  const [state, formAction] = useActionState(loginAction,initialState)

  return (
    (<div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your email and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="grid gap-6">
              <div
                className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-stone-200 dark:after:border-stone-800">
              </div>
              {state.message && <Alert variant={"destructive"}>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>
                  {state.message}
                </AlertDescription>
              </Alert>
              }
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input name="password" id="password" type="password" required />
                </div>
                <SubmitButton/>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>)
  );
}
