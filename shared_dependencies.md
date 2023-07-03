Shared Dependencies:

1. **Exported Variables:**
   - `openaiService`: This is the service that interacts with the OpenAI API. It is used in the ChatComponent for sending user queries and receiving responses.
   - `supabaseService`: This is the service that interacts with the Supabase database. It is used in the SettingsComponent for storing user preferences.

2. **Data Schemas:**
   - `UserPreferences`: This schema is used to store user preferences in the Supabase database. It includes fields like `detailLevel`, `languageType`, etc.

3. **DOM Element IDs:**
   - `uploadButton`: This is the ID of the upload button in the UploadComponent.
   - `chatWindow`: This is the ID of the chat window in the ChatComponent.
   - `documentViewer`: This is the ID of the document viewer in the DocumentViewerComponent.
   - `settingsForm`: This is the ID of the settings form in the SettingsComponent.

4. **Message Names:**
   - `uploadSuccess`: This is the message displayed when a document is successfully uploaded.
   - `uploadFailure`: This is the message displayed when a document upload fails.
   - `chatResponse`: This is the message displayed when the AI chatbot responds to a user query.

5. **Function Names:**
   - `parsePDF`: This function in pdfParser.js is used to extract text from uploaded PDF documents.
   - `sendQuery`: This function in openaiService.js is used to send user queries to the OpenAI API.
   - `retrieveInformation`: This function in openaiService.js is used to retrieve relevant information from the document in response to user queries.
   - `savePreferences`: This function in supabaseService.js is used to save user preferences in the Supabase database.