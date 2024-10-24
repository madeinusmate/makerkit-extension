import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import logo from '../assets/logo.png'

interface AppProps {
  organization: any
  isSubscribed: boolean
}

const App = ({ organization, isSubscribed }: AppProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 pt-4 pb-12 gap-12">
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-10',
        )}
      />
      <div className="flex flex-col gap-4 items-center">
        <img src={logo} alt="WiseOptIn Logo" className="w-1/3" />
        <p className="text-md">Organization ID: {organization.id}</p>
        <p className="text-md">Organization Name: {organization.name}</p>
        <p className="text-md">Is PRO: {isSubscribed ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}

export default App
