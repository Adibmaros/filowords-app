import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    (<div
      className="flex min-h-svh flex-col items-center justify-center gap-6 bg-stone-100 p-6 md:p-10 dark:bg-stone-800">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-md bg-stone-900 text-stone-50 dark:bg-stone-50 dark:text-stone-900">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Filo Words
        </a>
        <LoginForm />
      </div>
    </div>)
  );
}
