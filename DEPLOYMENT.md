# Deployment Instructions

## Environment Variables Required

You need to set the following environment variable in your Netlify dashboard:

### `KOKORO_API_KEY`

**How to get it:**
1. Go to https://kokoro.lancesmith.cc/developers
2. Click "Generate key" button
3. Copy the generated API key
4. Store it securely

**How to add it to Netlify:**
1. Go to your Netlify site dashboard
2. Navigate to **Site configuration** → **Environment variables**
3. Click **Add a variable**
4. Set:
   - Key: `KOKORO_API_KEY`
   - Value: (paste your generated key)
   - Scopes: Select all relevant scopes
5. Click **Save**

**For local development:**
Create a file named `.env` in the project root:
```
KOKORO_API_KEY=your-actual-api-key-here
```

Then run: `netlify dev`

## Quick Deploy Steps

1. Push code to your Git repository
2. Connect repository to Netlify
3. Add the `KOKORO_API_KEY` environment variable (see above)
4. Deploy!

That's it! Your Robobatu site will be live and speaking wisdom.

---

**Note:** The API key is kept secure in the serverless function and never exposed to the client.

