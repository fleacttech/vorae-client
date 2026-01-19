# Mentori Im

Privacy Policy website for Mentori Im application.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Privacy Policy

The privacy policy page is available at `/privacy-policy` route.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to Vercel:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

2. Go to [Vercel Dashboard](https://vercel.com/dashboard).

3. Click "Add New Project".

4. Import your Git repository.

5. Vercel will automatically detect Next.js and configure the build settings.

6. Click "Deploy".

### After Deployment

Once deployed, you'll receive a URL like: `https://your-project-name.vercel.app`

Your privacy policy will be available at:
- `https://your-project-name.vercel.app/privacy-policy`

You can use this URL when submitting your app to the App Store.

## Customization

Before deploying, make sure to update the contact information in `app/privacy-policy/page.tsx`:
- Replace `[Your Contact Email]` with your actual email
- Replace `[Your Business Address]` with your actual business address

You may also want to customize the privacy policy content to match your app's specific data collection and usage practices.

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## License

This project is private and proprietary.
