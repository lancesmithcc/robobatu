export default async (req, context) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { text } = await req.json();
    
    if (!text) {
      return new Response(JSON.stringify({ error: 'Text is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Call Kokoro API
    const response = await fetch('https://kokoro.lancesmith.cc/api/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.KOKORO_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'model_q8f16',
        // Blend English voice with Japanese voice for unique accent
        // af_heart speaks English, jf_alpha adds Japanese character
        voice: 'af_heart*0.7+jf_alpha*0.3',
        input: text,
        response_format: 'mp3',
        speed: 0.85 // Slightly slower for meditative effect
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Kokoro API error:', response.status, errorText);
      return new Response(JSON.stringify({ 
        error: 'Failed to generate speech',
        details: errorText,
        status: response.status 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the audio data
    const audioBuffer = await response.arrayBuffer();

    // Return the audio file
    return new Response(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.byteLength.toString()
      }
    });

  } catch (error) {
    console.error('Error in generate-speech function:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

