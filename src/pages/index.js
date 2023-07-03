```javascript
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import UploadComponent from '../components/UploadComponent';
import ChatComponent from '../components/ChatComponent';
import DocumentViewer from '../components/DocumentViewer';
import SettingsComponent from '../components/SettingsComponent';

export default function Home() {
  const [session, setSession] = useState(null);
  const [userPreferences, setUserPreferences] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    if (session) {
      getUserPreferences(session.user.id);
    }
  }, [session]);

  const getUserPreferences = async (userId) => {
    const { data, error } = await supabase
      .from('UserPreferences')
      .select('*')
      .eq('userId', userId)
      .single();

    if (error) {
      console.error('Error fetching user preferences: ', error);
    } else {
      setUserPreferences(data);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl my-8">AI Document Assistant</h1>
      <UploadComponent />
      <div className="grid grid-cols-2 gap-4">
        <ChatComponent userPreferences={userPreferences} />
        <DocumentViewer />
      </div>
      <SettingsComponent userPreferences={userPreferences} setUserPreferences={setUserPreferences} />
    </div>
  );
}
```