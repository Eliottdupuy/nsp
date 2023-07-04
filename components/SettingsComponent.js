
import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { updateUserPreferences } from '../utils/userPreferences';

const SettingsComponent = () => {
  const { user, error, isLoading } = useUser();
  const [detailLevel, setDetailLevel] = useState('medium');
  const [languageType, setLanguageType] = useState('formal');

  useEffect(() => {
    if (user) {
      // Fetch user preferences from database and set state
      // This is a placeholder, replace with actual fetch function
      const fetchUserPreferences = async () => {
        const preferences = await getUserPreferences(user.sub);
        setDetailLevel(preferences.detailLevel);
        setLanguageType(preferences.languageType);
      };
      fetchUserPreferences();
    }
  }, [user]);

  const handleDetailLevelChange = (event) => {
    setDetailLevel(event.target.value);
  };

  const handleLanguageTypeChange = (event) => {
    setLanguageType(event.target.value);
  };

  const handleSaveSettings = async () => {
    if (user) {
      const preferences = {
        userId: user.sub,
        detailLevel,
        languageType,
      };
      await updateUserPreferences(preferences);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="settings">
      <h2>Chatbot Settings</h2>
      <div>
        <label>Detail Level:</label>
        <select value={detailLevel} onChange={handleDetailLevelChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>Language Type:</label>
        <select value={languageType} onChange={handleLanguageTypeChange}>
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
        </select>
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default SettingsComponent;
