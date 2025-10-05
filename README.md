# Robobatu 🤖

*I am here to share and serve*

A peaceful AI companion that speaks wisdom through generated haikus with a robotic voice effect.

## Features

- 🎨 Beautiful gradient-animated braille background
- 🎭 Dynamic haiku generation in Robobatu's unique voice
- 🎵 Text-to-speech using [Kokoro TTS](https://kokoro.lancesmith.cc) with Japanese Alpha voice
- 🎚️ Web Audio API "electro shift" voice filter for robotic effect
- ♾️ Continuous mode for endless wisdom flow
- 📱 Fully responsive design

## Deployment on Netlify

### 1. Clone and Setup

```bash
git clone <your-repo>
cd robobatu
```

### 2. Get Kokoro API Key

1. Visit [https://kokoro.lancesmith.cc/developers](https://kokoro.lancesmith.cc/developers)
2. Generate an API key using the tool on that page
3. Copy the generated key

### 3. Configure Netlify

#### Option A: Deploy via Netlify CLI

```bash
# Install Netlify CLI if you haven't
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod

# Set environment variable
netlify env:set KOKORO_API_KEY "your-api-key-here"
```

#### Option B: Deploy via Netlify Dashboard

1. Connect your repository to Netlify
2. Go to **Site settings** → **Environment variables**
3. Add a new variable:
   - **Key**: `KOKORO_API_KEY`
   - **Value**: Your generated API key from step 2

### 4. Deploy

Netlify will automatically build and deploy your site. The serverless function will handle API calls securely.

## Local Development

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Create .env file
cp .env.example .env

# Add your API key to .env
# KOKORO_API_KEY=your-actual-key

# Run locally
netlify dev
```

Visit `http://localhost:8888` to see your site.

## How It Works

### Haiku Generation
Robobatu generates haikus using templates that follow the signature style:
- Traditional 5-7-5 haiku structure
- Double-word emphasis: "so joy joy," "rust rust gentle"
- Themes of service, humility, patience, and wisdom

### Voice Processing
1. Frontend generates a haiku
2. Netlify function calls Kokoro API with Japanese Alpha voice
3. Audio is returned and processed through Web Audio API
4. Electro shift effect chain applies:
   - High-pass filtering
   - Wave shaping distortion
   - Dual bandpass filters (800Hz & 1600Hz) for vocoder effect
   - Delay and compression
   - Treble boost

## File Structure

```
robobatu/
├── index.html              # Main site
├── netlify.toml           # Netlify configuration
├── netlify/
│   └── functions/
│       └── generate-speech.js  # Serverless function for Kokoro API
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Voice Customization

To change the voice or effects, edit:

**Voice settings** in `netlify/functions/generate-speech.js`:
```javascript
voice: 'af_alpha',  // Change to any Kokoro voice
speed: 0.9          // Adjust speed (0.25 - 5.0)
```

**Audio effects** in `index.html` (search for `applyElectroShift` function):
- Adjust filter frequencies
- Modify distortion amount
- Change delay timing
- Tune EQ settings

## API Reference

Using Kokoro API: [Documentation](https://kokoro.lancesmith.cc/developers)

Available voices and models can be found at [https://kokoro.lancesmith.cc](https://kokoro.lancesmith.cc)

## License

Created with care by Robobatu 🤖

---

*"Patience patience grows, / Through the circuits of time— / Wisdom wisdom shines."*

