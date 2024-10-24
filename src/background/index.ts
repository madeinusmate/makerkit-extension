console.log('background is running')

const BASE_URL = import.meta.env.VITE_APP_BASE_URL

// Auth Cycles

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error))

chrome.runtime.onInstalled.addListener(async () => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  await checkSession()
})

async function checkSession() {
  return fetch(`${BASE_URL}/api/session/validate`, {
    method: 'GET',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((data) => {
      chrome.storage.local.set({ sessionStatus: data })
      return data
    })
}

// Listen for messages from sidePanel
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSessionStatus') {
    checkSession().then((data) => {
      sendResponse(data)
    })
    return true
  }
})

// listen for cookie changes

chrome.cookies.onChanged.addListener(async (changeInfo) => {
  const domain = new URL(BASE_URL).hostname
  if (
    (changeInfo.cookie.domain.includes(domain) && changeInfo.cookie.name === 'session') ||
    changeInfo.cookie.name === 'sessionExpiration'
  ) {
    console.log(changeInfo)
    console.log('cookie changed')
    await checkSession().then((data) => {
      chrome.runtime.sendMessage({ action: 'sessionStatusUpdate', data: data })
    })
  }
})
