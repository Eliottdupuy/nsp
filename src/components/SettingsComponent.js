```javascript
import React, { useState, useEffect } from 'react';
import { supabaseService } from '../services/supabaseService';

const SettingsComponent = () => {
  const [userPreferences, setUserPreferences] = useState({
    detailLevel: '',
    languageType: '',
  });

  useEffect(() => {
    const fetchPreferences = async () => {
      const preferences = await supabaseService.getUserPreferences();
      setUserPreferences(preferences);
    };
    fetchPreferences();
  }, []);

  const handleInputChange = (event) => {
    setUserPreferences({
      ...userPreferences,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await supabaseService.savePreferences(userPreferences);
  };

  return (
    <div>
      <form id="settingsForm" onSubmit={handleSubmit}>
        <label>
          Detail Level:
          <select name="detailLevel" value={userPreferences.detailLevel} onChange={handleInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          Language Type:
          <select name="languageType" value={userPreferences.languageType} onChange={handleInputChange}>
            <option value="formal">Formal</option>
            <option value="informal">Informal</option>
          </select>
        </label>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default SettingsComponent;
```