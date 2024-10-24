import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline'
import LogoComponent from './LogoComponent'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface HeaderComponentProps {
  isSubscribed: boolean
}

const BASE_URL = import.meta.env.VITE_APP_BASE_URL

const HeaderComponent = ({ isSubscribed }: HeaderComponentProps) => {
  return (
    <div className="w-full flex justify-between items-center px-4 ">
      <LogoComponent />
      <div className="w-full flex justify-end gap-2">
        {isSubscribed ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  onClick={() => window.open(`${BASE_URL}/settings/subscription`, '_blank')}
                  variant="primary"
                >
                  PRO
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Manage Subscription</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  variant="outline"
                  onClick={() => window.open(`${BASE_URL}/settings/subscription`, '_blank')}
                >
                  FREE
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Upgrade to PRO</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open(`${BASE_URL}/settings`, '_blank')}
        >
          <Cog6ToothIcon className="size-6 " />
        </Button>
        <div className="w-auto h-auto">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <ArrowLeftEndOnRectangleIcon className="size-6 " />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Sign Out</AlertDialogTitle>
                <AlertDialogDescription>Are you sure you want to sign out?</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No</AlertDialogCancel>
                <AlertDialogAction
                  onClick={async () =>
                    await fetch(`${BASE_URL}/api/session/extension-sign-out`, {
                      method: 'POST',
                      credentials: 'include',
                    })
                  }
                >
                  Yes
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
