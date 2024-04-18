const key = import.meta.env.VITE_OPENAI_KEY;

const getTranslate = async (text, callback) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        // model: 'gpt-3.5-turbo',
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'translate the text to Chinese' },
          { role: 'user', content: text },
        ],
        stream: true,
      }),
    });

    const reader = response.body.getReader();
    let { value, done } = await reader.read();
    while (!done) {
      const chunk = new TextDecoder().decode(value);

      chunk.split('\n').forEach(line => {
        if (!line) return;
        if (!line.startsWith('data: ')) return;
        if (line === 'data: [DONE]') return;
        const parsedData = JSON.parse(line.replace('data: ', ''));
        if (parsedData.choices[0].delta.content) {
          callback(prev => prev + parsedData.choices[0].delta.content);
        }
      });

      ({ value, done } = await reader.read());
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export default getTranslate;
