import React from 'react';
import { Phone, Eye, Loader } from 'lucide-react';

export default function LoadingScreen() {
  const theme = {
    primary: '#6366F1',
    primaryLight: '#EEF2FF',
    text: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    inputBg: '#F8FAFC'
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
          <h1 
            className="text-6xl font-bold"
            style={{ color: theme.primary }}
          >
            vendly
          </h1>
        </div>

        {/* Loading State */}
        <div className="flex flex-col items-center justify-center gap-6 mt-12">
          {/* Loading Animation */}
          <div className="relative">
            <div 
              className="w-20 h-20 rounded-full animate-pulse"
              style={{ backgroundColor: theme.primaryLight }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader 
                className="w-10 h-10 animate-spin" 
                style={{ color: theme.primary }}
              />
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-2">
            <p 
              className="text-xl font-medium"
              style={{ color: theme.text }}
            >
              Iniciando sesión
            </p>
            <p 
              className="text-base"
              style={{ color: theme.textSecondary }}
            >
              Por favor espere...
            </p>
          </div>
        </div>

        {/* Background Form - Blurred */}
        <div className="opacity-50 blur-sm mt-8">
          <div className="space-y-6">
            {/* Phone Input */}
            <div className="space-y-2">
              <label className="block text-base font-medium">
                Número de teléfono
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center bg-gray-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-full h-14 rounded-full bg-gray-100" />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-base font-medium">
                Contraseña
              </label>
              <div className="relative">
                <div className="w-full h-14 rounded-full bg-gray-100" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center bg-gray-200">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Login Button */}
            <div className="w-full h-14 rounded-full bg-gray-200 mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
}