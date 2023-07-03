```javascript
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const savePreferences = async (preferences) => {
  try {
    const { data, error } = await supabase
      .from('UserPreferences')
      .insert([
        { detailLevel: preferences.detailLevel, languageType: preferences.languageType },
      ]);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error saving preferences: ', error);
    return null;
  }
};

export const getPreferences = async () => {
  try {
    const { data, error } = await supabase
      .from('UserPreferences')
      .select('*');

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error getting preferences: ', error);
    return null;
  }
};
```