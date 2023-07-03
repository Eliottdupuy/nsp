```javascript
import axios from 'axios';

const openaiService = {};

openaiService.sendQuery = async (query, userPreferences) => {
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: query,
    max_tokens: userPreferences.detailLevel,
    temperature: userPreferences.languageType,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text;
};

openaiService.retrieveInformation = async (documentText, query) => {
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: `${documentText}\n\nQuestion: ${query}`,
    max_tokens: 200,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text;
};

export default openaiService;
```