import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className=" absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#32CAFD] rounded-full blur-3xl opacity-10" />
      <div className="w-full max-w-sm relative">
      <div className="absolute top-6 left-20 w-[400px] h-[400px] bg-[#7214FF] rounded-full blur-3xl opacity-10 z-[-1]" />
        
        <LoginForm className="z-20"/>
      </div>
    </div>
  )
}
