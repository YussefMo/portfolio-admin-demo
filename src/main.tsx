import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext.tsx';
import './global.css';
import AppRouts from './routes/AppRouts.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FullPageSpinner from './components/ui/FullPageSpinner.tsx';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <Suspense fallback={<FullPageSpinner />} />
        <AppRouts />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
