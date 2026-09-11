// Browser fixture only; not a Next route. API responses are intercepted locally.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { GrowthReceiptPanel } from '../src/components/growth/GrowthReceiptPanel';
createRoot(document.getElementById('fixture')!).render(
  <main className="mx-auto max-w-6xl p-4">
    <p className="mb-4 font-semibold">
      LOCAL TEST DATA — private receipt dashboard
    </p>
    <GrowthReceiptPanel />
  </main>,
);
