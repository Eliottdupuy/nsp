```javascript
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// User Preferences Schema
const UserPreferencesSchema = {
  userId: 'text',
  detailLevel: 'text',
  languageType: 'text',
};

// Function to get user preferences
export async function getUserPreferences(userId) {
  const { data, error } = await supabase
    .from('UserPreferences')
    .select('*')
    .eq('userId', userId);

  if (error) {
    console.error('Error fetching user preferences:', error);
    return null;
  }

  return data;
}

// Function to update user preferences
export async function updateUserPreferences(userId, newPreferences) {
  const { data, error } = await supabase
    .from('UserPreferences')
    .update(newPreferences)
    .eq('userId', userId);

  if (error) {
    console.error('Error updating user preferences:', error);
    return null;
  }

  return data;
}
```