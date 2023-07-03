Shared Dependencies:

1. **Exported Variables:**
   - `pdfContent` (from `pdfParser.js`): The text content extracted from the uploaded PDF document.
   - `openaiResponse` (from `openaiAPI.js`): The response received from the OpenAI API.
   - `relevantInfo` (from `informationRetrieval.js`): The relevant information retrieved from the document in response to user queries.
   - `userPreferences` (from `userPreferences.js`): The user's chatbot customization settings.

2. **Data Schemas:**
   - `UserPreferencesSchema`: Schema for storing user preferences in Supabase. Fields might include `userId`, `detailLevel`, `languageType`, etc.

3. **DOM Element IDs:**
   - `uploadButton`: The button for uploading documents.
   - `chatWindow`: The area where the chat with the AI takes place.
   - `documentViewer`: The area where the uploaded document is displayed.
   - `settingsButton`: The button for accessing chatbot customization settings.

4. **Message Names:**
   - `uploadSuccess`: Message indicating successful document upload.
   - `uploadFailure`: Message indicating failure in document upload.
   - `chatResponse`: Message containing the AI chatbot's response.
   - `settingsUpdate`: Message indicating successful update of user settings.

5. **Function Names:**
   - `uploadDocument()` (in `upload.js`): Function for handling document upload.
   - `parsePDF()` (in `pdfParser.js`): Function for parsing the uploaded PDF document.
   - `sendQuery()` (in `chatbot.js`): Function for sending user queries to the OpenAI API.
   - `retrieveInfo()` (in `informationRetrieval.js`): Function for retrieving relevant information from the document.
   - `updateSettings()` (in `settings.js`): Function for updating user settings.