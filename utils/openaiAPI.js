import axios from 'axios';

const openaiAPI = async (query, userPreferences) => {
  const { detailLevel, languageType } = userPreferences;

  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: query,
      max_tokens: detailLevel,
      temperature: 0.5,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  let openaiResponse = response.data.choices[0].text.trim();

  // Adjust the language type based on user preferences
  if (languageType === 'formal') {
    openaiResponse = openaiResponse.replace(/(?:wouldn't|won't|can't)/g, (match) => {
      return {
        "wouldn't": 'would not',
        "won't": 'will not',
        "can't": 'cannot',
      }[match];
    });
  }

  return openaiResponse;
};

export default openaiAPI;
