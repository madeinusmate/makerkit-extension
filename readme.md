# MakerKit Chrome Extension

MakerKit Chrome Extension Starter Template.


## Pre-requisites

Be a MakerKit user and have a project created, wither locally or in production.

## Project Setup

### Add Session Validation Routes to your MakerKit App

1. Create a new route in your MakerKit app that will be used to validate the user session.
2. Add the following code to the route: `api/session/validate`

```
import { NextApiRequest, NextApiResponse } from 'next';
import { withAdmin } from '~/core/middleware/with-admin';
import { withPipe } from '~/core/middleware/with-pipe';
import { withMethodsGuard } from '~/core/middleware/with-methods-guard';
import { withExceptionFilter } from '~/core/middleware/with-exception-filter';
import { getAuth } from 'firebase-admin/auth';
import { getOrganizationsForUser } from '~/lib/admin/queries';

const ACTIVE_STATUSES = ['active', 'trialing'];

const SUPPORTED_HTTP_METHODS: HttpMethod[] = ['GET'];

async function validateSession(req: NextApiRequest, res: NextApiResponse) {
  const sessionCookie = req.cookies.session;

  if (!sessionCookie) {
    return res
      .status(401)
      .json({ isValid: false, message: 'No session cookie found' });
  }

  try {
    const decodedClaims = await getAuth().verifySessionCookie(
      sessionCookie,
      true,
    );

    const customClaims = (await getAuth().getUser(decodedClaims.uid))
      .customClaims;

    const organizations = await getOrganizationsForUser(decodedClaims.uid);

    const status = organizations[0]?.subscription?.status;
    const subscriptionEndsAt = organizations[0]?.subscription?.periodEndsAt;

    let isSubscribed;
    if (!status) {
      isSubscribed = false;
    } else if (status === 'canceled' && subscriptionEndsAt) {
      isSubscribed = subscriptionEndsAt > Date.now() / 1000;
    } else {
      isSubscribed = ACTIVE_STATUSES.includes(status);
    }

    return res.status(200).json({
      isValid: true,
      uid: decodedClaims.uid,
      email: decodedClaims.email,
      isEmailVerified: decodedClaims.email_verified,
      displayName: decodedClaims.name,
      photoURL: decodedClaims.picture,
      isOnboarded: customClaims?.onboarded,
      organization: organizations[0],
      isSubscribed,
    });
  } catch (error) {
    return res.status(401).json({ isValid: false, message: 'Invalid session' });
  }
}

export default function sessionValidateHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const handler = withPipe(
    withMethodsGuard(SUPPORTED_HTTP_METHODS),
    withAdmin,
    validateSession,
  );

  return withExceptionFilter(req, res)(handler);
}

```

3. Add the following code to the route: `api/session/extension-sign-out.ts`

```
import { NextApiRequest, NextApiResponse } from 'next';
import { withPipe } from '~/core/middleware/with-pipe';
import { withMethodsGuard } from '~/core/middleware/with-methods-guard';
import { withExceptionFilter } from '~/core/middleware/with-exception-filter';

const SUPPORTED_HTTP_METHODS: HttpMethod[] = ['POST'];

async function extensionSignOut(req: NextApiRequest, res: NextApiResponse) {
  // Clear the session cookie
  res.setHeader('Set-Cookie', [
    `session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict`,
  ]);

  return res
    .status(200)
    .json({ success: true, message: 'Signed out successfully' });
}

export default function extensionSignOutHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const handler = withPipe(
    withMethodsGuard(SUPPORTED_HTTP_METHODS),
    extensionSignOut,
  );

  return withExceptionFilter(req, res)(handler);
}
```

### Setup Environment

- Add your makerkit app host url to the `.env` file to point it to your makerkit app. Use `localhost:3000` for local development.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/madeinusmate/makerkit-extension.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd makerkit-extension
   ```
3. **Install dependencies:**
   ```bash
   yarn install
   ```
4. **Build the project:**
   ```bash
   yarn dev
   ```
