import { Button } from '@/components/ui/button'
import logo from '../assets/logo.png'
import { cn } from '@/lib/utils'
import { DotPattern } from './ui/dot-pattern'

const BASE_URL = import.meta.env.VITE_APP_BASE_URL

const LoginComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 pt-4 pb-12 gap-12">
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-10',
        )}
      />
      <div className="flex flex-col gap-4 items-center">
        <img src={logo} alt="WiseOptIn Logo" className="w-1/3" />
        <h1 className="text-4xl font-bold text-primary-500">MakerKit</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 w-2/3">
        <a target="_blank" href={`${BASE_URL}/auth/sign-in`} className="w-full">
          <Button variant="primary" className=" font-bold text-lg w-full px-4 py-2 rounded-md">
            Login
          </Button>
        </a>
        <a target="_blank" href={`${BASE_URL}/auth/sign-up`} className="w-full">
          <Button variant="primary" className=" font-bold text-lg px-4 w-full py-2 rounded-md">
            Sign Up
          </Button>
        </a>
      </div>
    </div>
  )
}

export default LoginComponent
