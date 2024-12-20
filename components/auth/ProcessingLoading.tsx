import React from 'react';
import { Loader } from 'lucide-react';

export default function ProcessingScreen() {
  const theme = {
    primary: '#6366F1',
    primaryLight: '#EEF2FF',
    text: '#1E293B',
    textSecondary: '#64748B',
    whatsapp: '#25D366',
    whatsappLight: '#DCFCE7'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="h-14 px-4 flex justify-end items-center">
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-black opacity-80" />
          <div className="w-1 h-1 rounded-full bg-black opacity-60" />
          <div className="w-1 h-1 rounded-full bg-black opacity-40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center mb-16 mt-8">
          <h1 className="text-6xl font-bold" style={{ color: theme.primary }}>
            vendly
          </h1>
        </div>

        {/* Loading State */}
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Loading Animation */}
          <div className="relative">
            <div 
              className="w-20 h-20 rounded-full animate-pulse"
              style={{ backgroundColor: theme.whatsappLight }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader 
                className="w-10 h-10 animate-spin" 
                style={{ color: theme.whatsapp }} 
              />
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-2">
            <p className="text-xl font-medium" style={{ color: theme.text }}>
              Verificando código
            </p>
            <p style={{ color: theme.textSecondary }}>
              Esto tomará solo un momento...
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-8 left-0 right-0 text-center">
          <p className="text-sm" style={{ color: theme.textSecondary }}>
            © 2024 Vendly. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}