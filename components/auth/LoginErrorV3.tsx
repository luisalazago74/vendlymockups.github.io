"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Phone, XCircle } from 'lucide-react';

export default function LoginErrorScreenV3() {
  const [showPassword, setShowPassword] = useState(false);
  
  const theme = {
    primary: '#6366F1',
    primaryLight: '#EEF2FF',
    text: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    inputBg: '#F8FAFC',
    error: '#EF4444',
    errorLight: '#FEE2E2'
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

        {/* Login Form */}
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 
              className="text-2xl font-semibold"
              style={{ color: theme.text }}
            >
              Iniciar Sesión
            </h2>
            <p 
              className="text-lg"
              style={{ color: theme.textSecondary }}
            >
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <form className="space-y-6">
            {/* Enhanced Error Message */}
            <div 
              className="p-4 rounded-2xl flex items-center gap-3 animate-shake"
              style={{ 
                backgroundColor: theme.errorLight,
                border: `1.5px solid ${theme.error}40`
              }}
            >
              <XCircle className="w-5 h-5 shrink-0" style={{ color: theme.error }} />
              <div className="flex-1">
                <p className="font-medium" style={{ color: theme.error }}>
                  Error de credenciales
                </p>
                <p 
                  className="text-sm mt-0.5" 
                  style={{ color: `${theme.error}90` }}
                >
                  El número o la contraseña son incorrectos
                </p>
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label 
                className="block text-base font-medium" 
                style={{ color: theme.text }}
              >
                Número de teléfono
              </label>
              <div className="relative">
                <div 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.primaryLight }}
                >
                  <Phone 
                    className="w-5 h-5" 
                    style={{ color: theme.primary }} 
                  />
                </div>
                <input
                  type="tel"
                  className="w-full pl-16 pr-4 h-14 rounded-full text-lg"
                  defaultValue="+57"
                  style={{ 
                    backgroundColor: theme.inputBg,
                    border: `1.5px solid ${theme.border}`,
                    color: theme.text,
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label 
                  className="block text-base font-medium" 
                  style={{ color: theme.text }}
                >
                  Contraseña
                </label>
                <button
                  type="button"
                  className="text-base font-medium"
                  style={{ color: theme.primary }}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-4 pr-16 h-14 rounded-full text-lg"
                  placeholder="••••••••"
                  style={{ 
                    backgroundColor: theme.inputBg,
                    border: `1.5px solid ${theme.border}`,
                    color: theme.text,
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.primaryLight }}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" style={{ color: theme.primary }} />
                  ) : (
                    <Eye className="w-5 h-5" style={{ color: theme.primary }} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-2"
                style={{ 
                  borderColor: theme.border,
                  color: theme.primary
                }}
              />
              <span className="text-base" style={{ color: theme.textSecondary }}>
                Recordarme
              </span>
            </label>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-14 rounded-full text-white text-lg font-medium mt-4 transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme.primary }}
            >
              Iniciar Sesión
            </button>

            {/* Register Link */}
            <div className="text-center pt-4 space-y-2">
              <p className="text-base" style={{ color: theme.textSecondary }}>
                ¿No tienes una cuenta?
              </p>
              <button
                type="button"
                className="text-lg font-medium"
                style={{ color: theme.primary }}
              >
                Regístrate aquí
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-20 mb-8 text-center">
          <p className="text-sm" style={{ color: theme.textSecondary }}>
            © 2024 Vendly. Todos los derechos reservados.
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}