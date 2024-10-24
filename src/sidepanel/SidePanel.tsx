import { useSessionStatus } from '@/hooks/useSessionStatus'
import HeaderComponent from '@/components/HeaderComponent'
import LoginComponent from '@/components/LoginComponent'
import { DotPattern } from '@/components/ui/dot-pattern'
import App from './App'
import { cn } from '@/lib/utils'

export const SidePanel = () => {
  const {
    sessionStatus,
    isLoading: isLoadingSessionStatus,
    organization,
    isSubscribed,
  } = useSessionStatus()

  if (isLoadingSessionStatus) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 pt-4 pb-12">
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-10',
          )}
        />
        <div className="flex flex-col items-center justify-center gap-4 w-full text-primary-500 text-xl">
          Loading...
        </div>
      </div>
    )
  }

  if (!sessionStatus) {
    return <LoginComponent />
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen px-4 pt-4 pb-12 dark">
      <HeaderComponent isSubscribed={isSubscribed} />

      <App organization={organization} isSubscribed={isSubscribed} />
    </div>
  )
}
export default SidePanel
