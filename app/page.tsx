"use client";

import React from "react"

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ===========================================
   TEXT SCRAMBLE HOOK
=========================================== */
function useScrambleText(text: string, trigger: boolean, duration = 1500) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHİJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  
  useEffect(() => {
    if (!trigger) return;
    
    let iteration = 0;
    const totalIterations = Math.ceil(duration / 30);
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration * (text.length / totalIterations)) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      iteration++;
      
      if (iteration >= totalIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [trigger, text, duration]);
  
  return displayText;
}

/* ===========================================
   SCRAMBLE TEXT COMPONENT
=========================================== */
function ScrambleText({ text, className, as: Component = "span" }: { 
  text: string; 
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const displayText = useScrambleText(text, isInView);
  
  return (
    <Component ref={ref} className={className}>
      {displayText}
    </Component>
  );
}
import {
  Brain,
  Satellite,
  Bot,
  Shield,
  Zap,
  Globe,
  Lock,
  Radar,
  Target,
  Cpu,
  Database,
  Network,
  ChevronRight,
  Menu,
  X,
  Check,
  Mail,
  User,
  Send,
  Phone,
  Loader2,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

/* ===========================================
   DEMO REQUEST MODAL
=========================================== */
function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    // Reset form after modal closes
    setTimeout(() => {
      setFormState("idle");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden"
          >
            {/* Glassmorphism glow effects */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative z-10 p-8">
              {formState === "success" ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/50 mx-auto flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Talebiniz Alındı</h3>
                  <p className="text-slate-400 mb-6">
                    Onay e-postası iletildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-3 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 font-medium hover:bg-emerald-500/30 transition-colors"
                  >
                    Tamam
                  </button>
                </motion.div>
              ) : (
                /* Form State */
                <>
                  {/* Header */}
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                      SECURE CHANNEL
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Erişim Talebi / Demo Başvurusu</h2>
                    <p className="text-slate-400 text-sm">Projeleriniz hakkında bilgi almak için formu doldurun.</p>
                  </div>
                  
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-medium text-slate-300 mb-2">
                        Ad Soyad
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          id="modal-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Adınızı girin"
                          className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors text-sm"
                        />
                      </div>
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-slate-300 mb-2">
                        Kurumsal E-posta
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          id="modal-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ornek@kurum.com"
                          className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors text-sm"
                        />
                      </div>
                    </div>
                    
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="modal-phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Telefon Numarası
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="tel"
                          id="modal-phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+90 (5XX) XXX XX XX"
                          className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors text-sm"
                        />
                      </div>
                    </div>
                    
                    {/* Message Field */}
                    <div>
                      <label htmlFor="modal-message" className="block text-sm font-medium text-slate-300 mb-2">
                        Proje / Genel Bilgiler
                      </label>
                      <textarea
                        id="modal-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Projeniz hakkında kısa bilgi verin..."
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors text-sm resize-none"
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={formState === "loading"}
                      whileHover={formState !== "loading" ? { scale: 1.02, boxShadow: "0 0 25px rgba(34, 211, 238, 0.4)" } : {}}
                      whileTap={formState !== "loading" ? { scale: 0.98 } : {}}
                      className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-[#020617] font-bold flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {formState === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Veri İletiliyor...
                        </>
                      ) : (
                        <>
                          Gönder
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ===========================================
   AI CHAT ASSISTANT
=========================================== */
type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function TacticalChatAssistant({ onDemoClick }: { onDemoClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingStatus, setTypingStatus] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickChips = [
    "İHA Menzili nedir?",
    "Uydu verisi formatları?",
    "Demo süreci nasıl işler?",
  ];

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, displayedResponse]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Get mock response based on input
  const getMockResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("demo") || lowerInput.includes("talep")) {
      return "Demo sürecimiz 3 aşamadan oluşur: 1) İlk görüşme ve ihtiyaç analizi, 2) Kişiselleştirilmiş demo sunumu, 3) Teknik değerlendirme. Demo talebinizi hemen oluşturabilirsiniz. [DEMO_REDIRECT]";
    }
    
    if (lowerInput.includes("uydu") || lowerInput.includes("satellite")) {
      return "Uydu görüntüleme sistemlerimiz şu veri formatlarını destekler: GeoTIFF, JPEG2000, NetCDF, HDF5. Multi-spektral ve SAR verilerini işleyebiliriz. Çözünürlük: 30cm'ye kadar optik, 1m SAR. Günlük 2.4TB veri işleme kapasitesi.";
    }
    
    if (lowerInput.includes("iha") || lowerInput.includes("menzil") || lowerInput.includes("drone")) {
      return "ÖNCÜ İHA sistemleri: Taktik İHA menzili 150km, operasyonel irtifa 7,500m. Dayanıklılık: 24+ saat. Otonom navigasyon ve sürü zekası destekli. Gerçek zamanlı veri aktarımı için şifreli link.";
    }
    
    if (lowerInput.includes("fiyat") || lowerInput.includes("ücret") || lowerInput.includes("maliyet")) {
      return "Fiyatlandırma bilgisi proje kapsamına göre belirlenmektedir. Kurumsal çözümlerimiz hakkında detaylı bilgi almak için demo talep formunu doldurabilirsiniz. [DEMO_REDIRECT]";
    }
    
    if (lowerInput.includes("selam") || lowerInput.includes("merhaba") || lowerInput.includes("hey")) {
      return "Merhaba! Ben ÖNCÜ_AI, taktik operasyonlar asistanınız. Size İHA sistemleri, uydu görüntüleme veya demo sürecimiz hakkında yardımcı olabilirim. Ne hakkında bilgi almak istersiniz?";
    }
    
    // Default classified response
    return "Bu veri şu an [CLASSIFIED] olarak sınıflandırılmış. Detaylı bilgi için lütfen demo talep formunu doldurun veya yetkili personelinizle iletişime geçin. [DEMO_REDIRECT]";
  };

  // Typewriter effect
  const typewriterEffect = (text: string, onComplete: () => void) => {
    let index = 0;
    setDisplayedResponse("");
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedResponse(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 20);
    
    return () => clearInterval(interval);
  };

  // Handle message submission
  const handleSubmit = (input: string) => {
    if (!input.trim() || isTyping) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Show analyzing status
    const statuses = ["ANALYZING REQUEST...", "DECRYPTING DATA...", "PROCESSING..."];
    let statusIndex = 0;
    
    const statusInterval = setInterval(() => {
      setTypingStatus(statuses[statusIndex % statuses.length]);
      statusIndex++;
    }, 500);
    
    // After delay, show response
    setTimeout(() => {
      clearInterval(statusInterval);
      setTypingStatus("");
      
      const response = getMockResponse(input);
      
      typewriterEffect(response, () => {
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setDisplayedResponse("");
        setIsTyping(false);
      });
    }, 1500);
  };

  // Render message with demo redirect handling
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
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[90] w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] ${isOpen ? "hidden" : ""}`}
        whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(34, 211, 238, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Cpu className="w-6 h-6 text-[#020617]" />
        {/* Pulse ring */}
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
            {/* Glassmorphism effects */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            {/* Scanlines */}
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
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4">
              {/* Welcome message if no messages */}
              {messages.length === 0 && !isTyping && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 mx-auto flex items-center justify-center mb-4">
                    <Radar className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="text-slate-400 text-sm mb-6">
                    Merhaba! Size nasıl yardımcı olabilirim?
                  </p>
                  
                  {/* Quick Chips */}
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

              {/* Chat Messages */}
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

              {/* Typing Indicator / Response being typed */}
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
                  placeholder="Mesajınızı yazın..."
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
              
              {/* Status Bar */}
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

/* ===========================================
   NAVBAR
=========================================== */
function Navbar({ onDemoClick }: { onDemoClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-[#020617]/80 border-b border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#020617]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ÖNCÜ<span className="text-cyan-400"> Intelligence</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Beta Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 font-mono text-xs">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400 tracking-wider">BETA v0.9</span>
          </div>
          
          {["Hakkımızda", "Teknolojiler", "Çözümler", "İletişim"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            onClick={onDemoClick}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-[#020617] font-semibold text-sm"
          >
            Demo Talep Et
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Beta Badge */}
          <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-500/10 border border-amber-500/30 font-mono text-[10px]">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400">BETA</span>
          </div>
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-cyan-500/10"
          >
            <div className="flex flex-col gap-4 pt-4">
              {["Hakkımızda", "Teknolojiler", "Çözümler", "İletişim"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDemoClick();
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-[#020617] font-semibold text-sm w-full"
              >
                Demo Talep Et
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ===========================================
   HERO SECTION
=========================================== */
function HeroSection({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Satellite Photo Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=1920&q=80"
          alt="Earth from satellite"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark blue overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#020617]/85 to-[#020617]" />
        <div className="absolute inset-0 bg-[#020617]/40" />
      </div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Rotating Globe/Network Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="150" stroke="url(#globeGradient)" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="200" r="120" stroke="url(#globeGradient)" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="200" r="90" stroke="url(#globeGradient)" strokeWidth="0.5" fill="none" />
            <ellipse cx="200" cy="200" rx="150" ry="60" stroke="url(#globeGradient)" strokeWidth="0.5" fill="none" />
            <ellipse cx="200" cy="200" rx="150" ry="60" stroke="url(#globeGradient)" strokeWidth="0.5" fill="none" transform="rotate(60 200 200)" />
            <ellipse cx="200" cy="200" rx="150" ry="60" stroke="url(#globeGradient)" strokeWidth="0.5" fill="none" transform="rotate(120 200 200)" />
            <defs>
              <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              {/* BURAYA BADGE METNİ GELECEK */}
              Savunma & Uzay Teknolojileri
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
        >
          <ScrambleText 
            text="Geleceğin Savunması" 
            className="text-white block"
            as="h1"
          />
          <ScrambleText 
            text="Bugün Başlıyor" 
            className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent block"
            as="span"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 text-pretty"
        >
          {/* BURAYA AÇIKLAMA METNİ GELECEK */}
          Yapay zeka destekli savunma sistemleri, uydu görüntüleme teknolojileri ve otonom çözümlerle kritik altyapılarınızı koruyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={onDemoClick}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-[#020617] font-bold text-lg flex items-center gap-2"
          >
            Demo Talep Et
            <ChevronRight className="w-5 h-5" />
          </motion.button>
          <motion.a
            href="#teknolojiler"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-colors"
          >
            Keşfet
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
    </section>
  );
}

/* ===========================================
   INTERACTIVE TABS - TEKNOLOJİLERİMİZ
=========================================== */
const tabsData = [
  {
    id: "ai",
    title: "Yapay Zeka",
    icon: Brain,
    description: "Derin öğrenme ve makine öğrenmesi algoritmaları ile gerçek zamanlı tehdit tespiti ve analizi.",
    features: [
      "Gerçek zamanlı nesne tanıma",
      "Anomali tespiti",
      "Prediktif analitik",
      "Doğal dil işleme",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
  },
  {
    id: "satellite",
    title: "Uydu Görüntüleme",
    icon: Satellite,
    description: "Yüksek çözünürlüklü uydu görüntüleri ile stratejik istihbarat ve izleme kapasitesi.",
    features: [
      "Multi-spektral analiz",
      "SAR görüntüleme",
      "Değişim tespiti",
      "Coğrafi istihbarat",
    ],
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80",
  },
  {
    id: "autonomous",
    title: "Otonom Sistemler",
    icon: Bot,
    description: "İnsansız hava, kara ve deniz araçları için gelişmiş otonom kontrol sistemleri.",
    features: [
      "Sürü zekası",
      "Otonom navigasyon",
      "Görev planlama",
      "Çoklu platform entegrasyonu",
    ],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&q=80",
  },
];

function TechnologyTabs() {
  const [activeTab, setActiveTab] = useState("ai");
  const activeData = tabsData.find((t) => t.id === activeTab);

  return (
    <section id="teknolojiler" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ScrambleText 
            text="Teknolojilerimiz" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            as="h2"
          />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {/* BURAYA BÖLÜM AÇIKLAMASI GELECEK */}
            En son teknolojilerle donatılmış çözümlerimizi keşfedin
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabsData.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-6 py-3 font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                  : "bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-cyan-500/30"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Visual with Photo Background */}
            <div className="relative h-80 md:h-96 overflow-hidden border border-cyan-500/20">
              {/* Photo Background with Military Filter */}
              <motion.div
                key={`photo-${activeTab}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={activeData?.image || "/placeholder.svg"}
                  alt={activeData?.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark blue/cyan duotone overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-cyan-900/70 to-slate-900/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-cyan-500/10" />
              </motion.div>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              
              {/* Corner markers */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
              
              {/* Centered icon with glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={`icon-${activeTab}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-cyan-400/20 blur-2xl scale-150" />
                  {activeData && <activeData.icon className="relative w-16 h-16 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />}
                </motion.div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-cyan-500/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {activeData?.title} Modülü Aktif
                </span>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">{activeData?.title}</h3>
              <p className="text-slate-400 text-lg mb-8">{activeData?.description}</p>
              <ul className="space-y-4">
                {activeData?.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="w-6 h-6 bg-cyan-500/20 flex items-center justify-center rounded">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ===========================================
   BENTO GRID
=========================================== */
const bentoItems = [
  {
    title: "Gerçek Zamanlı İzleme",
    description: "7/24 kesintisiz veri akışı ve analiz kapasitesi",
    icon: Radar,
    className: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    title: "Termal Görüntüleme",
    description: "Gece görüş kapasitesi",
    icon: Target,
    className: "md:row-span-2",
    isPhotoCard: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Global Kapsama",
    description: "Dünya genelinde operasyon",
    icon: Globe,
    className: "",
  },
  {
    title: "Motor Teknolojisi",
    description: "İleri tahrik sistemleri",
    icon: Zap,
    className: "md:col-span-2",
    isPhotoCard: true,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80",
  },
  {
    title: "Güvenli Altyapı",
    description: "Askeri düzeyde şifreleme",
    icon: Lock,
    className: "",
  },
  {
    title: "Edge Computing",
    description: "Uçta veri işleme",
    icon: Cpu,
    className: "",
  },
  {
    title: "Büyük Veri",
    description: "Petabayt ölçeğinde depolama",
    icon: Database,
    className: "",
  },
  {
    title: "Entegrasyon",
    description: "Mevcut sistemlerle uyum",
    icon: Network,
    className: "",
  },
];

function BentoGrid() {
  return (
    <section id="çözümler" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ScrambleText 
            text="Özellikler" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            as="h2"
          />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {/* BURAYA BENTO AÇIKLAMASI GELECEK */}
            Platformumuzun sunduğu kapsamlı yetenekler
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)"
              }}
              className={`group relative bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all overflow-hidden ${item.className} ${item.isPhotoCard ? '' : 'p-6'}`}
            >
              {/* Photo Card */}
              {item.isPhotoCard && item.image ? (
                <>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Military duotone overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-cyan-900/50 to-slate-900/80" />
                    <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/15 transition-colors duration-500" />
                  </div>
                  
                  {/* Grid overlay that glows on hover */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px] group-hover:bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] transition-all duration-500" />
                  
                  {/* Data points that glow on hover */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400/0 group-hover:bg-cyan-400/80 rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                        transitionDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                  
                  {/* Content overlay */}
                  <div className="relative z-10 h-full min-h-[160px] flex flex-col justify-end p-6">
                    <div className="w-10 h-10 bg-slate-900/80 border border-cyan-500/30 flex items-center justify-center mb-3 backdrop-blur-sm">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Regular Card */}
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className={`relative z-10 ${item.large ? 'h-full flex flex-col justify-center' : ''}`}>
                    <div className={`${item.large ? 'w-16 h-16' : 'w-12 h-12'} bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors`}>
                      <item.icon className={`${item.large ? 'w-8 h-8' : 'w-6 h-6'} text-cyan-400`} />
                    </div>
                    <h3 className={`${item.large ? 'text-2xl' : 'text-lg'} font-semibold text-white mb-2`}>{item.title}</h3>
                    <p className={`text-slate-400 ${item.large ? 'text-base' : 'text-sm'}`}>{item.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================
   PRICING CARDS
=========================================== */
const pricingData = [
  {
    name: "Giriş",
    price: "Ücretsiz",
    description: "Küçük ekipler için temel özellikler",
    features: [
      "5 kullanıcıya kadar",
      "Temel analitik",
      "E-posta desteği",
      "API erişimi (1000 istek/gün)",
    ],
    popular: false,
  },
  {
    name: "Başlangıç",
    price: "₺9,999",
    period: "/ay",
    description: "Büyüyen organizasyonlar için",
    features: [
      "25 kullanıcıya kadar",
      "Gelişmiş analitik",
      "7/24 destek",
      "API erişimi (sınırsız)",
      "Özel entegrasyonlar",
    ],
    popular: false,
  },
  {
    name: "Profesyonel",
    price: "Özel",
    description: "Kurumsal seviye çözümler",
    features: [
      "Sınırsız kullanıcı",
      "Tam analitik paketi",
      "Öncelikli destek",
      "Özel SLA",
      "Yerinde kurulum",
      "Eğitim programı",
    ],
    popular: true,
  },
];

function PricingSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ScrambleText 
            text="Paketler" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            as="h2"
          />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {/* BURAYA FİYATLANDIRMA AÇIKLAMASI GELECEK */}
            İhtiyacınıza uygun planı seçin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: plan.popular 
                  ? "0 0 50px rgba(34, 211, 238, 0.3)" 
                  : "0 0 30px rgba(34, 211, 238, 0.15)" 
              }}
              className={`relative p-8 backdrop-blur-xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-cyan-500/10 to-slate-900/50 border-cyan-500/50 md:scale-110 z-10"
                  : "bg-slate-900/30 border-slate-700/50 hover:border-cyan-500/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-cyan-600 text-[#020617] text-sm font-bold">
                  En Popüler
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-slate-400">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-[#020617]"
                    : "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                }`}
              >
                Başla
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================
   CONTACT FORM SECTION
=========================================== */
function ContactSection() {
  return (
    <section id="iletişim" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <ScrambleText 
            text="Operasyonel İrtibata Geçin" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            as="h2"
          />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Projeleriniz için bizimle iletişime geçin
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 backdrop-blur-xl bg-slate-900/40 border border-cyan-500/20 overflow-hidden"
        >
          {/* Glassmorphism glow effect */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <form className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Ad Soyad
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Adınızı girin"
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  E-posta
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-posta adresinizi girin"
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Mesajınızı yazın..."
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-[#020617] font-bold text-lg flex items-center justify-center gap-2"
            >
              Gönder
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ===========================================
   LIVE SYSTEM TICKER
=========================================== */
function LiveTicker() {
  const tickerItems = [
    "SYSTEM: NOMINAL",
    "UYDU BAĞLANTISI: AKTİF",
    "GÖRÜNTÜ İŞLEME MODÜLÜ: HAZIR",
    "LAT: 38.7205 N LON: 35.4826 E (Kayseri)",
    "VERİ AKIŞI: 2.4 TB/s",
    "NETWORK: SECURE",
    "AI ENGINE: ONLINE",
    "RADAR ARRAY: OPERATIONAL",
  ];

  const tickerText = tickerItems.join(" • ");

  return (
    <div className="relative overflow-hidden bg-slate-950 border-y border-cyan-500/10 py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <span className="font-mono text-sm text-cyan-400/70 tracking-wider">
          {tickerText} • {tickerText} •{" "}
        </span>
      </motion.div>
    </div>
  );
}

/* ===========================================
   FOOTER
=========================================== */
function Footer() {
  return (
    <footer className="py-16 px-6 bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left Column - Logo & Slogan */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#020617]" />
              </div>
              <span className="text-xl font-bold text-white">
                ÖNCÜ<span className="text-cyan-400"> Intelligence</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Savunma ve uzay teknolojilerinde yeni nesil mühendislik çözümleri. 
              Geleceğin güvenliğini bugünden inşa ediyoruz.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {["Teknoloji", "Vizyon", "Projeler", "Kariyer"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Bağlantı Kurun</h4>
            
            {/* General Email */}
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-4 h-4 text-cyan-400" />
              <a
                href="mailto:iletisim@oncuintelligence.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm select-all"
              >
                iletisim@oncuintelligence.com
              </a>
            </div>

            {/* Founder Card */}
            <div className="p-4 bg-slate-800/50 border border-cyan-500/20 backdrop-blur-sm">
              <p className="text-white font-semibold">Cem Adil Öncü</p>
              <p className="text-cyan-400 text-sm mb-2">Geliştirici ve Kurucu</p>
              <a
                href="mailto:cemadiloncu@oncuintelligence.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm select-all break-all"
              >
                cemadiloncu@oncuintelligence.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 ÖNCÜ Intelligence. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-400 text-sm font-mono">Tüm sistemler aktif</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===========================================
   MAIN PAGE
=========================================== */
export default function OncuLandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  
  const handleDemoClick = () => setIsDemoModalOpen(true);
  const handleModalClose = () => setIsDemoModalOpen(false);
  
  return (
    <main className="min-h-screen bg-[#020617] overflow-x-hidden">
      <Navbar onDemoClick={handleDemoClick} />
      <HeroSection onDemoClick={handleDemoClick} />
      <TechnologyTabs />
      <BentoGrid />
      <PricingSection />
      <ContactSection />
      <LiveTicker />
      <Footer />
      
      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleModalClose} />
    </main>
  );
}
