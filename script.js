(function () {
  'use strict';

  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  if (!form) return;

  /* ── Field refs ─────────────────────────────────────────── */
  const fields = {
    name:    { el: document.getElementById('name'),    err: document.getElementById('name-error') },
    email:   { el: document.getElementById('email'),   err: document.getElementById('email-error') },
    message: { el: document.getElementById('message'), err: document.getElementById('message-error') },
  };

  /* ── Validators ─────────────────────────────────────────── */
  function validate() {
    let valid = true;

    const name = fields.name.el.value.trim();
    if (!name) {
      showError('name', 'Please enter your name.');
      valid = false;
    } else {
      clearError('name');
    }

    const email = fields.email.el.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!email) {
      showError('email', 'Please enter your email address.');
      valid = false;
    } else if (!emailOk) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError('email');
    }

    const msg = fields.message.el.value.trim();
    if (!msg) {
      showError('message', 'Please enter a message.');
      valid = false;
    } else if (msg.length < 10) {
      showError('message', 'Message must be at least 10 characters.');
      valid = false;
    } else {
      clearError('message');
    }

    return valid;
  }

  /* ── Error helpers ──────────────────────────────────────── */
  function showError(name, msg) {
    const f = fields[name];
    f.el.classList.add('error');
    f.err.textContent = msg;
    f.err.classList.remove('hidden');
  }

  function clearError(name) {
    const f = fields[name];
    f.el.classList.remove('error');
    f.err.textContent = '';
    f.err.classList.add('hidden');
  }

  /* ── Live clear on input ────────────────────────────────── */
  Object.keys(fields).forEach(function (name) {
    fields[name].el.addEventListener('input', function () {
      clearError(name);
    });
  });

  /* ── Submit ─────────────────────────────────────────────── */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validate()) return;

    /* Hide form, show success message */
    form.style.display = 'none';
    success.classList.remove('hidden');
  });
})();
