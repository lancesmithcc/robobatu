# Testing Robobatu Locally

## Quick Test

To test the voice system locally before deploying:

```bash
# Install Netlify CLI if you haven't
npm install -g netlify-cli

# Make sure you have your API key in .env
echo "KOKORO_API_KEY=your-actual-key-here" > .env

# Run local dev server
netlify dev
```

Then visit `http://localhost:8888` and click the **⚡ ACTIVATE** button.

## What Should Happen

1. ✅ Button changes to "⏸ DEACTIVATE" with red pulsing animation
2. ✅ A haiku appears on screen
3. ✅ Status shows: "🎵 Generating voice..." → "🎧 Processing audio..." → "🔊 Speaking..." → "✨ Complete"
4. ✅ You hear the haiku in a robotic voice
5. ✅ After 3 seconds, a new haiku generates automatically
6. ✅ Click "⏸ DEACTIVATE" to stop

## If You Get Errors

### "Failed to generate speech"
- Check that `KOKORO_API_KEY` is set in Netlify environment variables
- Make sure the API key is valid (generate new one at https://kokoro.lancesmith.cc/developers)
- Check browser console for detailed error message

### No sound
- Make sure your browser allows audio playback
- Check browser console for Web Audio API errors
- Try clicking the page first (browsers require user interaction before audio)

### Function not found
- Make sure Netlify CLI is running with `netlify dev` (not just opening the HTML file)
- Check that `netlify/functions/generate-speech.js` exists

## Voice ID Reference

Current voice: `ja_alpha` (Japanese Alpha, rated C+)

To change voice, edit `netlify/functions/generate-speech.js` line 26:
```javascript
voice: 'ja_alpha', // Try: af_bella, af_sarah, ja_gongitsune, etc.
```

See all voices at: https://kokoro.lancesmith.cc

