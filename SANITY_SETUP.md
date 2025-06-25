# Sanity CMS Environment Setup

This project uses Sanity CMS for content management. Follow these steps to configure your environment:

## Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your Sanity project details:

   ```env
   VITE_SANITY_PROJECT_ID=your_project_id_here
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_VERSION=2023-05-03
   VITE_SANITY_USE_CDN=true
   ```

## Required Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_SANITY_PROJECT_ID` | Your Sanity project ID | ✅ Yes | - |
| `VITE_SANITY_DATASET` | Dataset name (usually 'production') | ❌ No | `production` |
| `VITE_SANITY_API_VERSION` | Sanity API version | ❌ No | `2023-05-03` |
| `VITE_SANITY_USE_CDN` | Enable CDN for faster response | ❌ No | `true` |

## Finding Your Sanity Project ID

1. Go to [sanity.io](https://sanity.io) and log in
2. Navigate to your project dashboard
3. Your Project ID is displayed in the project settings
4. Alternatively, check your `sanity.config.ts` file in your Sanity studio

## Optional: Authentication Token

For authenticated requests (if your content requires authentication):

```env
SANITY_TOKEN=your_sanity_token_here
```

To generate a token:
1. Go to your Sanity project dashboard
2. Navigate to API → Tokens
3. Create a new token with appropriate permissions

## Security Notes

- ✅ The `.env` file is already added to `.gitignore`
- ✅ Use `VITE_` prefix for client-side environment variables
- ⚠️ Never commit your `.env` file to version control
- ⚠️ Keep your Sanity tokens secure and rotate them regularly

## Troubleshooting

If you see an error like "Missing VITE_SANITY_PROJECT_ID environment variable":

1. Ensure your `.env` file exists in the project root
2. Verify the variable name is exactly `VITE_SANITY_PROJECT_ID`
3. Restart your development server after adding environment variables
4. Check that your `.env` file is not empty or corrupted