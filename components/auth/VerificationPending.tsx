import React from 'react';
import { MessageCircle, AlertCircle } from 'lucide-react';

export default function VerificationPending() {
  const theme = {
    primary: '#6366F1',
    whatsapp: '#25D366',
    whatsappLight: '#DCFCE7',
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
          <h1 className="text-6xl font-bold" style={{ color: theme.primary }}>
            vendly
          </h1>
        </div>

        {/* Alert Box */}
        <div 
          className="rounded-2xl p-6 mb-8"
          style={{ backgroundColor: theme.whatsappLight }}
        >
          <div className="flex gap-4">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'white' }}
            >
              <AlertCircle className="w-6 h-6" style={{ color: theme.whatsapp }} />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-lg" style={{ color: theme.text }}>
                Verificación pendiente
              </p>
              <p style={{ color: theme.textSecondary }}>
                Tu cuenta necesita ser verificada por WhatsApp antes de continuar
              </p>
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="text-center mb-8">
          <p className="text-lg mb-2" style={{ color: theme.textSecondary }}>
            Enviaremos un código a
          </p>
          <p className="text-2xl font-semibold" style={{ color: theme.text }}>
            +57 321 123 4567
          </p>
        </div>

        {/* Verify Button */}
        <button
          className="w-full py-4 rounded-2xl flex items-center justify-center gap-3 text-white text-lg font-medium mb-6"
          style={{ backgroundColor: theme.whatsapp }}
        >
          <MessageCircle className="w-6 h-6" />
          <span>Verificar con WhatsApp</span>
        </button>

        {/* Info Text */}
        <div 
          className="p-4 rounded-xl text-sm mb-6"
          style={{ backgroundColor: theme.inputBg }}
        >
          <p style={{ color: theme.textSecondary }}>
            Al continuar, recibirás un mensaje de WhatsApp con un código de verificación.
            Se pueden aplicar tarifas de mensajes y datos.
          </p>
        </div>

        {/* Change Number */}
        <button
          className="w-full text-center font-medium"
          style={{ color: theme.primary }}
        >
          Cambiar número de teléfono
        </button>

        {/* Footer */}
        <footer className="mt-12 mb-8 text-center">
          <p className="text-sm" style={{ color: theme.textSecondary }}>
            © 2024 Vendly. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}