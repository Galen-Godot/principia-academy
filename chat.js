/**
 * Principia Chatbot — Phase 1 Stub
 * 
 * This file handles the UI toggle/expand behavior.
 * The sendMessage() function is stubbed — Phase 2 will
 * replace it with a real API call to the LLM backend.
 */

(function () {
  'use strict';

  const toggle  = document.getElementById('chatbot-toggle');
  const panel   = document.getElementById('chatbot-panel');
  const close   = document.getElementById('chatbot-close');
  const input   = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  const messages = document.getElementById('chatbot-messages');

  if (!toggle || !panel) return; // Guard if partial is not on the page

  // ── Toggle panel ──
  function openPanel() {
    panel.classList.add('open');
    toggle.style.display = 'none';
    input.focus();
  }

  function closePanel() {
    panel.classList.remove('open');
    toggle.style.display = 'flex';
  }

  toggle.addEventListener('click', openPanel);
  close.addEventListener('click', closePanel);

  // ── Append a message bubble ──
  function appendMessage(text, role) {
    const div = document.createElement('div');
    div.className = 'chatbot-message ' + role;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  // ── Send message (STUB — replace in Phase 2) ──
  function sendMessage(userText) {
    appendMessage(userText, 'user');

    // Placeholder response — will be replaced with API fetch
    const endpoint = panel.parentElement.getAttribute('data-api-endpoint');
    const pillar   = panel.parentElement.getAttribute('data-pillar');

    if (!endpoint) {
      setTimeout(function () {
        appendMessage(
          'The ' + (pillar || 'Principia') + ' engine is not yet connected. ' +
          'This interface will be active when the backend bridge is deployed.',
          'agent'
        );
      }, 600);
      return;
    }

    // Phase 2: fetch(endpoint, { method: 'POST', body: JSON.stringify({ query: userText, pillar }) })
  }

  // ── Input handling ──
  function handleSend() {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    sendMessage(text);
  }

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleSend();
  });
})();
