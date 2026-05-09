"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, X, Send, Radar } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function TacticalChatAssistant({ onDemoClick }: { onDemoClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingStatus, setTypingStatus] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mountedRef = useRef(true);
  const pendingRef = useRef<{
    statusInterval?: ReturnType<typeof setInterval>;
    timeout?: ReturnType<typeof setTimeout>;
    typewriterCleanup?: () => void;
  }>({});

  const quickChips = [
    "ÝHA Menzili nedir?",
    "Uydu verisi formatlarý?",
    "Demo süreci nasýl iþler?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, displayedResponse]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      const p = pendingRef.current;
      if (p.statusInterval) clearInterval(p.statusInterval);
      if (p.timeout) clearTimeout(p.timeout);
      p.typewriterCleanup?.();
    };
  }, []);

  const getMockResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("demo") || lowerInput.includes("talep")) {
      return "Demo sürecimiz 3 aþamadan oluþur: 1) Ýlk görüþme ve ihtiyaç analizi, 2) Kiþiselleþtirilmiþ demo sunumu, 3) Teknik deðerlendirme. Demo talebinizi hemen oluþturabilirsiniz. [DEMO_REDIRECT]";
    }
    
    if (lowerInput.includes("uydu") || lowerInput.includes("satellite")) {
      return "Uydu görüntüleme sistemlerimiz þu veri formatlarýný destekler: GeoTIFF, JPEG2000, NetCDF, HDF5. Multi-spektral ve SAR verilerini iþleyebiliriz. Çözünürlük: 30cm'ye kadar optik, 1m SAR. Günlük 2.4TB veri iþleme kapasitesi.";
    }
    
    if (lowerInput.includes("iha") || lowerInput.includes("menzil") || lowerInput.includes("drone")) {
      return "ÖNCÜ ÝHA sistemleri: Taktik ÝHA menzili 150km, operasyonel irtifa 7,500m. Dayanýklýlýk: 24+ saat. Otonom navigasyon ve sürü zekasý destekli. Gerçek zamanlý veri aktarýmý için þifreli link.";
    }
    
    if (lowerInput.includes("fiyat") || lowerInput.includes("ücret") || lowerInput.includes("maliyet")) {
      return "Fiyatlandýrma bilgisi proje kapsamýna göre belirlenmektedir. Kurumsal çözümlerimiz hakkýnda detaylý bilgi almak için demo talep formunu doldurabilirsiniz. [DEMO_REDIRECT]";
    }
    
    if (lowerInput.includes("selam") || lowerInput.includes("merhaba") || lowerInput.includes("hey")) {
      return "Merhaba! Ben ÖNCÜ_AI, taktik operasyonlar asistanýnýz. Size ÝHA sistemleri, uydu görüntüleme veya demo sürecimiz hakkýnda yardýmcý olabilirim. Ne hakkýnda bilgi almak istersiniz?";
    }
    
    return "Bu veri þu an [CLASSIFIED] olarak sýnýflandýrýlmýþ. Detaylý bilgi için lütfen demo talep formunu doldurun veya yetkili personelinizle iletiþime geçin. [DEMO_REDIRECT]";
  };

  const typewriterEffect = (text: string, onComplete: () => void) => {
    let index = 0;
    setDisplayedResponse("");
    const interval = setInterval(() => {
      if (!mountedRef.current) {
        clearInterval(interval);
        return;
      }
      if (index < text.length) {
        setDisplayedResponse(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        if (mountedRef.current) onComplete();
      }
    }, 20);
    return () => clearInterval(interval);
  };

  const handleSubmit = (input: string) => {
    if (!input.trim() || isTyping) return;
    const trimmed = input.trim();

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const statuses = ["ANALYZING REQUEST...", "DECRYPTING DATA...", "PROCESSING..."];
    let statusIndex = 0;
    const statusInterval = setInterval(() => {
      if (!mountedRef.current) return;
      setTypingStatus(statuses[statusIndex % statuses.length]);
      statusIndex++;
    }, 500);
    pendingRef.current.statusInterval = statusInterval;

    const timeout = setTimeout(() => {
      clearInterval(statusInterval);
      pendingRef.current.statusInterval = undefined;
      if (!mountedRef.current) return;
      setTypingStatus("");
      const response = getMockResponse(trimmed);
      const cleanup = typewriterEffect(response, () => {
        if (!mountedRef.current) return;
        pendingRef.current.typewriterCleanup = undefined;
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setDisplayedResponse("");
        setIsTyping(false);
      });
      pendingRef.current.typewriterCleanup = cleanup;
    }, 1500);
    pendingRef.current.timeout = timeout;
  };

  const renderMessage = (content: string) => {
    if (content.includes("[DEMO_REDIRECT]")) {
      const cleanContent = content.replace("[DEMO_REDIRECT]", "");
      return (
        <>
          {cleanContent}
          <button
            onClick={() => {
              setIsOpen(false);
              onDemoClick();
            }}
            className="mt-2 block text-cyan-400 hover:text-cyan-300 underline text-sm"
          >
            Demo Talep Et
          </button>
        </>
      );
    }
    return content;
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="ÖNCÜ AI asistanýný aç"
        className={`fixed bottom-6 right-6 z-[90] w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] ${isOpen ? "hidden" : ""}`}
        whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Cpu className="w-6 h-6 text-[#020617]" aria-hidden />
        <span className="absolute inset-0 border-2 border-cyan-400 animate-ping opacity-30" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-[95] w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-slate-900/95 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.2)] flex flex-col overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />

            {/* Header */}
            <div className="relative z-10 p-4 border-b border-cyan-500/20 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">ÖNCÜ_AI</h3>
                  <p className="text-cyan-400 text-[10px] font-mono tracking-wider">TACTICAL OPS ASSISTANT v1.0</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Sohbet penceresini kapat"
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && !isTyping && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 mx-auto flex items-center justify-center mb-4">
                    <Radar className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="text-slate-400 text-sm mb-6">
                    Merhaba! Size nasýl yardýmcý olabilirim?
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {quickChips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => handleSubmit(chip)}
                        className="px-3 py-1.5 bg-slate-800/80 border border-cyan-500/30 text-cyan-400 text-xs hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm ${
                      message.role === "user"
                        ? "bg-cyan-500/20 border border-cyan-500/40 text-white"
                        : "bg-slate-800/80 border border-slate-700 text-slate-200"
                    }`}
                  >
                    {message.role === "assistant" ? renderMessage(message.content) : message.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] px-4 py-3 bg-slate-800/80 border border-slate-700 text-sm">
                    {typingStatus ? (
                      <span className="text-cyan-400 font-mono text-xs animate-pulse">
                        {typingStatus}
                      </span>
                    ) : displayedResponse ? (
                      <span className="text-slate-200">
                        {displayedResponse}
                        <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
                      </span>
                    ) : null}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="relative z-10 p-4 border-t border-cyan-500/20 bg-slate-900/80">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Mesajýnýzý yazýn..."
                  disabled={isTyping}
                  className="flex-1 px-4 py-2.5 bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 text-sm disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={isTyping || !inputValue.trim()}
                  whileHover={!isTyping && inputValue.trim() ? { scale: 1.05 } : {}}
                  whileTap={!isTyping && inputValue.trim() ? { scale: 0.95 } : {}}
                  className="px-4 py-2.5 bg-cyan-500 text-[#020617] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
              
              <div className="flex items-center justify-between mt-2 text-[10px] font-mono text-slate-500">
                <span>ENCRYPTED CHANNEL</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  ONLINE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
