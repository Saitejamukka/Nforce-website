import React, { useState, useEffect, useRef } from 'react';
import {
  CHAT_GREETING,
  CHAT_SUGGESTIONS,
  QUICK_LINKS,
  chatBotReply,
} from '../../data/chatResponses';
import { ChatMessage } from '../../types';
import { DynamicIcon } from '../ui/DynamicIcon';
import { MessageCircle, X, RotateCcw, ArrowRight } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'bot', text: CHAT_GREETING, ts: Date.now() },
  ]);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleChat = () => {
    setShowTeaser(false);
    setIsOpen((prev) => {
      if (!prev) setUnreadCount(0);
      return !prev;
    });
  };

  const pushReply = (userQuery: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply = chatBotReply(userQuery);
      setMessages((prev) => [...prev, { from: 'bot', text: reply, ts: Date.now() }]);
      if (!isOpen) {
        setUnreadCount((c) => c + 1);
      }
    }, 900);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { from: 'user', text, ts: Date.now() }]);
    setInput('');
    pushReply(text);
  };

  const handleSuggestion = (q: string) => {
    setMessages((prev) => [...prev, { from: 'user', text: q, ts: Date.now() }]);
    pushReply(q);
  };

  const handleClear = () => {
    setMessages([{ from: 'bot', text: CHAT_GREETING, ts: Date.now() }]);
    setUnreadCount(0);
  };

  const handleQuickLink = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Chat Modal */}
      <div
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '28px',
          zIndex: 175,
          width: '360px',
          maxWidth: 'calc(100vw - 40px)',
          height: '500px',
          maxHeight: 'calc(100vh - 140px)',
          background: 'var(--nf-white)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transformOrigin: 'bottom right',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1) translateY(0px)' : 'scale(0.94) translateY(12px)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 260ms var(--ease-out), transform 260ms var(--ease-out)',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--nf-ink-950), var(--nf-black))',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: '0 0 auto',
            borderBottom: '2px solid var(--nf-red)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--grad-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                color: '#fff',
                fontSize: '13px',
                boxShadow: '0 0 0 3px rgba(224,31,38,0.25)',
              }}
            >
              N
            </span>
            <div>
              <div
                style={{
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Ask Navi{' '}
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    color: 'var(--nf-red)',
                    background: 'rgba(224,31,38,0.16)',
                    padding: '2px 6px',
                    borderRadius: '5px',
                  }}
                >
                  AI CONCIERGE
                </span>
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#10B981',
                    display: 'inline-block',
                  }}
                />
                Online now
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={handleClear}
              aria-label="Reset chat"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--nf-gray-400)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: 0,
              }}
            >
              <RotateCcw size={15} />
            </button>
            <button
              onClick={toggleChat}
              aria-label="Close chat"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--nf-gray-400)',
                fontSize: '18px',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div
          ref={bodyRef}
          style={{
            flex: '1 1 auto',
            overflowY: 'auto',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            background: 'var(--nf-gray-100)',
          }}
        >
          {messages.map((m, idx) => {
            const isUser = m.from === 'user';
            const timeStr = m.ts
              ? new Date(m.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : '';
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignSelf: isUser ? 'flex-end' : 'flex-start',
                  maxWidth: '86%',
                  opacity: 0,
                  animation: 'nfFadeUp 320ms var(--ease-out) both',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '8px',
                    flexDirection: isUser ? 'row-reverse' : 'row',
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isUser ? 'var(--nf-ink-950)' : 'var(--nf-red)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '10px',
                      fontWeight: 800,
                      flex: '0 0 auto',
                    }}
                  >
                    {isUser ? 'U' : 'N'}
                  </span>
                  <div
                    style={{
                      background: isUser ? 'var(--nf-red)' : 'var(--nf-white)',
                      color: isUser ? '#fff' : 'var(--nf-ink-950)',
                      padding: '10px 14px',
                      borderRadius: '14px',
                      fontSize: '13.5px',
                      lineHeight: 1.5,
                      boxShadow: '0 2px 8px -4px rgba(10,10,11,0.15)',
                    }}
                  >
                    {m.text}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: 'var(--nf-gray-400)',
                    marginTop: '4px',
                    padding: '0 32px',
                    alignSelf: isUser ? 'flex-end' : 'flex-start',
                  }}
                >
                  {timeStr}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div
              style={{
                alignSelf: 'flex-start',
                background: 'var(--nf-white)',
                border: '1px solid var(--nf-gray-200)',
                padding: '10px 16px',
                borderRadius: '14px',
                display: 'flex',
                gap: '4px',
                marginLeft: '32px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--nf-gray-400)',
                  display: 'inline-block',
                  animation: 'nfPulse 1s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--nf-gray-400)',
                  display: 'inline-block',
                  animation: 'nfPulse 1s ease-in-out 0.15s infinite',
                }}
              />
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--nf-gray-400)',
                  display: 'inline-block',
                  animation: 'nfPulse 1s ease-in-out 0.3s infinite',
                }}
              />
            </div>
          )}

          {messages.length === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
              {CHAT_SUGGESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSuggestion(q)}
                  className="nf-chat-suggestion-btn"
                  style={{
                    textAlign: 'left',
                    background: 'var(--nf-white)',
                    border: '1px solid var(--nf-gray-200)',
                    borderRadius: '10px',
                    padding: '10px 12px',
                    fontSize: '13px',
                    color: 'var(--nf-ink-950)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    transition: 'border-color 180ms, color 180ms, transform 180ms',
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links Row */}
        <div
          style={{
            flex: '0 0 auto',
            display: 'flex',
            gap: '8px',
            padding: '10px 14px',
            borderTop: '1px solid var(--nf-gray-200)',
            background: 'var(--nf-white)',
            overflowX: 'auto',
          }}
        >
          {QUICK_LINKS.map((ql) => (
            <button
              key={ql.label}
              onClick={() => handleQuickLink(ql.href)}
              className="nf-chat-quicklink-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--nf-gray-200)',
                background: 'var(--nf-gray-100)',
                color: 'var(--nf-ink-950)',
                fontSize: '12px',
                fontFamily: 'var(--font-body)',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                flex: '0 0 auto',
                transition: 'border-color 180ms, color 180ms',
              }}
            >
              <DynamicIcon name={ql.icon} size={13} style={{ color: 'var(--nf-gray-500)' }} />
              {ql.label}
            </button>
          ))}
        </div>

        {/* Chat Input Form */}
        <form
          onSubmit={handleSend}
          style={{
            flex: '0 0 auto',
            display: 'flex',
            gap: '8px',
            padding: '14px',
            borderTop: '1px solid var(--nf-gray-200)',
            background: 'var(--nf-white)',
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our services..."
            className="nf-chat-input"
            style={{
              flex: 1,
              border: '1px solid var(--nf-gray-200)',
              borderRadius: 'var(--radius-pill)',
              padding: '10px 16px',
              fontSize: '13.5px',
              fontFamily: 'var(--font-body)',
              outline: 'none',
              transition: 'border-color 180ms, box-shadow 180ms',
            }}
          />
          <button
            type="submit"
            aria-label="Send message"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--nf-red)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '15px',
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowRight size={16} />
          </button>
        </form>
      </div>

      {/* Proactive Floating Teaser Bubble */}
      {showTeaser && !isOpen && (
        <div
          onClick={() => {
            setShowTeaser(false);
            setIsOpen(true);
          }}
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '28px',
            zIndex: 174,
            background: 'var(--nf-white)',
            border: '1px solid var(--border-light)',
            borderRadius: '14px',
            padding: '14px 16px',
            boxShadow: '0 12px 32px -4px rgba(10, 10, 11, 0.18)',
            maxWidth: '280px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            animation: 'nfFadeUp 360ms var(--ease-out)',
            cursor: 'pointer',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--nf-ink-950)', marginBottom: '3px' }}>
              Have questions about your project?
            </div>
            <div style={{ fontSize: '12px', color: 'var(--nf-gray-500)', lineHeight: 1.4 }}>
              Chat with our automated solutions guide for quick QA & DevOps insights.
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            aria-label="Dismiss chat hint"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--nf-gray-400)',
              cursor: 'pointer',
              padding: '0 2px',
              fontSize: '16px',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={toggleChat}
        aria-label="Open chat assistant"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 180,
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'var(--nf-red)',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-red)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid var(--nf-red)',
            opacity: isOpen ? 0 : 0.6,
            animation: 'nfPulse 2.2s ease-in-out infinite',
          }}
        />
        {isOpen ? <X size={24} style={{ position: 'relative' }} /> : <MessageCircle size={24} style={{ position: 'relative' }} />}
        {unreadCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              minWidth: '19px',
              height: '19px',
              padding: '0 4px',
              borderRadius: '10px',
              background: 'var(--nf-ink-950)',
              border: '2px solid var(--nf-white)',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>
    </>
  );
};
