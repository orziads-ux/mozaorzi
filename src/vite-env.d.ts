/// <reference types="vite/client" />

interface Window {
  fbq?: (...args: unknown[]) => void;
  ttq?: {
    track: (event: string, data?: Record<string, unknown>) => void;
    identify: (data: Record<string, unknown>) => void;
    page: () => void;
  };
}
