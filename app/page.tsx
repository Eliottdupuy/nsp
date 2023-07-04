import Pricing from '@/components/Pricing';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import { supabase } from '@supabase/auth-ui-shared';
import { useState, useEffect } from 'react';
import UploadComponent from '../components/UploadComponent';
import ChatComponent from '../components/ChatComponent';
import DocumentViewer from '../components/DocumentViewer';
import SettingsComponent from '../components/SettingsComponent';

export default function PricingPage({ session, products, subscription }) {
  const [userPreferences, setUserPreferences] = useState(null);

  useEffect(() => {
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

    if (session?.user) {
      getUserPreferences(session.user.id);
    }
  }, [session]);

  return (
    <>
      <Pricing
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />
      <h1 className="text-4xl my-8">AI Document Assistant</h1>
      <UploadComponent />
      <div className="grid grid-cols-2 gap-4">
        <ChatComponent userPreferences={userPreferences} />
        <DocumentViewer pdfContent={undefined} />
      </div>
      <SettingsComponent userPreferences={userPreferences} setUserPreferences={setUserPreferences} />
    </>
  );
}

export async function getServerSideProps() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return {
    props: { session, products, subscription }, // will be passed to the page component as props
  };
}
