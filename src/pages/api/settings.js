```javascript
import { supabase } from '../../utils/supabaseClient';
import { userPreferences } from '../../utils/userPreferences';

export default async function handler(req, res) {
  const { userId, detailLevel, languageType } = req.body;

  // Check if user preferences already exist
  let { data: existingPreferences, error } = await supabase
    .from('UserPreferences')
    .select('*')
    .eq('userId', userId)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (existingPreferences) {
    // Update existing user preferences
    const { data, error } = await supabase
      .from('UserPreferences')
      .update({ detailLevel, languageType })
      .eq('userId', userId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Update userPreferences variable
    userPreferences.detailLevel = detailLevel;
    userPreferences.languageType = languageType;

    return res.status(200).json({ message: 'settingsUpdate', data });
  } else {
    // Create new user preferences
    const { data, error } = await supabase
      .from('UserPreferences')
      .insert([{ userId, detailLevel, languageType }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Update userPreferences variable
    userPreferences.detailLevel = detailLevel;
    userPreferences.languageType = languageType;

    return res.status(200).json({ message: 'settingsUpdate', data });
  }
}
```