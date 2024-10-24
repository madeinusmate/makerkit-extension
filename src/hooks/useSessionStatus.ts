import { useState, useEffect } from 'react'

export const useSessionStatus = () => {
  const [sessionStatus, setSessionStatus] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [organization, setOrganization] = useState<any>()
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)

  useEffect(() => {
    const checkSessionStatus = () => {
      chrome.storage.local.get('sessionStatus', (response) => {
        setSessionStatus(response.sessionStatus.isValid)
        setIsLoading(false)
        setOrganization(response.sessionStatus.organization)
        setIsSubscribed(response.sessionStatus.isSubscribed)
      })
    }

    const handleSessionStatusUpdate = (message: any) => {
      if (message.action === 'sessionStatusUpdate') {
        console.log(message.data)
        setSessionStatus(message.data.isValid)
        setIsLoading(false)
        setOrganization(message.data.organization)
        setIsSubscribed(message.data.isSubscribed)
      }
    }

    chrome.runtime.onMessage.addListener(handleSessionStatusUpdate)

    checkSessionStatus()

    return () => {
      chrome.runtime.onMessage.removeListener(handleSessionStatusUpdate)
    }
  }, [])

  return { sessionStatus, isLoading, organization, isSubscribed }
}
