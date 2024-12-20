"use client";
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, Timer, ArrowRight, XCircle, 
  CheckCircle, AlertCircle, RefreshCcw 
} from 'lucide-react';

export default function EnhancedVerification() {
  // States
  const [verificationState, setVerificationState] = useState('input'); // input, error, success, timeout, loading
  const [code, setCode] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [attempts, setAttempts] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Theme
  const theme = {
    primary: '#6366F1',
    primaryLight: '#EEF2FF',
    text: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    inputBg: '#F8FAFC',
    whatsapp: '#25D366',
    whatsappLight: '#DCFCE7',
    error: '#EF4444',
    errorLight: '#FEE2E2',
    success: '#10B981',
    successLight: '#D1FAE5'
  };

  // Timer Effect
  useEffect(() => {
    if (timeLeft > 0 && verificationState === 'input') {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setVerificationState('timeout');
    }
  }, [timeLeft, verificationState]);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle verification
  const handleVerify = () => {
    setVerificationState('loading');
    setTimeout(() => {
      const enteredCode = code.join('');
      if (enteredCode === '1234') {
        setVerificationState('success');
      } else {
        setAttempts(a => a + 1);
        setVerificationState('error');
        setTimeout(() => setVerificationState('input'), 2000);
      }
    }, 1500);
  };

  // Resend code
  const handleResend = () => {
    setVerificationState('input');
    setTimeLeft(300);
    setCode(['', '', '', '']);
  };

  // Status Message Component
  const StatusMessage = () => {
    switch (verificationState) {
      case 'error':
        return (
          <div 
            className="p-4 rounded-xl flex items-center gap-3 animate-shake"
            style={{ backgroundColor: theme.errorLight }}
            role="alert"
          >
            <XCircle className="w-5 h-5" style={{ color: theme.error }} />
            <div>
              <p className="font-medium" style={{ color: theme.error }}>
                Código incorrecto
              </p>
              <p className="text-sm" style={{ color: `${theme.error}90` }}>
                Te quedan {3 - attempts} intentos
              </p>
            </div>
          </div>
        );
      case 'timeout':
        return (
          <div 
            className="p-4 rounded-xl flex items-center gap-3"
            style={{ backgroundColor: theme.errorLight }}
            role="alert"
          >
            <AlertCircle className="w-5 h-5" style={{ color: theme.error }} />
            <div>
              <p className="font-medium" style={{ color: theme.error }}>
                Código expirado
              </p>
              <p className="text-sm" style={{ color: `${theme.error}90` }}>
                Por favor solicita un nuevo código
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
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

        {/* WhatsApp Status */}
        <div 
          className="p-6 rounded-2xl mb-8"
          style={{ backgroundColor: theme.whatsappLight }}
        >
          <div className="flex flex-col items-center gap-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'white' }}
            >
              <MessageCircle className="w-8 h-8" style={{ color: theme.whatsapp }} />
            </div>
            <div className="text-center space-y-2">
              <p className="text-lg font-medium" style={{ color: theme.text }}>
                Código enviado a WhatsApp
              </p>
              <p style={{ color: theme.text }}>
                +57 321 123 4567
              </p>
              <div className="flex items-center justify-center gap-2">
                <Timer className="w-4 h-4" style={{ color: theme.text }} />
                <span className="text-sm" style={{ color: theme.text }}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {(verificationState === 'error' || verificationState === 'timeout') && (
          <div className="mb-6">
            <StatusMessage />
          </div>
        )}

        {/* Main Content Area */}
        <div className="space-y-8">
          {verificationState === 'loading' ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin"
                     style={{ borderTopColor: theme.primary }} />
              </div>
              <p className="text-lg" style={{ color: theme.text }}>
                Verificando código...
              </p>
            </div>
          ) : verificationState === 'success' ? (
            <div className="flex flex-col items-center gap-4 animate-success">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.successLight }}
              >
                <CheckCircle className="w-8 h-8" style={{ color: theme.success }} />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium" style={{ color: theme.text }}>
                  ¡Verificación exitosa!
                </p>
                <p className="text-sm mt-1" style={{ color: theme.textSecondary }}>
                  Redirigiendo...
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Code Input */}
              <div className="space-y-4">
                <div className="flex justify-center gap-3">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el: HTMLInputElement | null) => { inputRefs.current[index] = el }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => {
                        const newCode = [...code];
                        newCode[index] = e.target.value;
                        setCode(newCode);
                        
                        if (e.target.value && index < 3) {
                          inputRefs.current[index + 1]?.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !digit && index > 0) {
                          inputRefs.current[index - 1]?.focus();
                        }
                      }}
                      className="w-14 h-14 rounded-xl text-center text-2xl font-semibold transition-all"
                      style={{ 
                        backgroundColor: theme.inputBg,
                        border: `2px solid ${verificationState === 'error' ? theme.error : theme.border}`,
                        color: theme.text
                      }}
                    />
                  ))}
                </div>
                <p className="text-center text-sm" style={{ color: theme.textSecondary }}>
                  Ingresa el código de 4 dígitos
                </p>
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerify}
                disabled={code.join('').length !== 4}
                className="w-full h-14 rounded-full text-white text-lg font-medium flex items-center justify-center gap-2 transition-opacity"
                style={{ 
                  backgroundColor: theme.whatsapp,
                  opacity: code.join('').length !== 4 ? 0.7 : 1
                }}
              >
                <span>Verificar código</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Resend Option */}
              {verificationState === 'timeout' ? (
                <button
                  onClick={handleResend}
                  className="w-full flex items-center justify-center gap-2 font-medium"
                  style={{ color: theme.primary }}
                >
                  <RefreshCcw className="w-5 h-5" />
                  <span>Enviar nuevo código</span>
                </button>
              ) : (
                <div className="text-center space-y-2">
                  <p style={{ color: theme.textSecondary }}>
                    ¿No recibiste el código?
                  </p>
                  <button
                    onClick={handleResend}
                    className="font-medium"
                    style={{ color: theme.primary }}
                  >
                    Enviar código nuevamente
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        @keyframes success {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-success {
          animation: success 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}