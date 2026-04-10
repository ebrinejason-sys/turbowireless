
  // ── Hamburger ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  function closeMenu() {
    mobileMenu.classList.remove('open');
  }

  // ── FAQ ──
  function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('active'));
    // Open clicked if was closed
    if (!isOpen) {
      answer.classList.add('open');
      btn.classList.add('active');
    }
  }

  // ── Referral WhatsApp ──
  function sendReferral() {
    const yn = document.getElementById('refYourName').value.trim();
    const yp = document.getElementById('refYourPhone').value.trim();
    const fn = document.getElementById('refFriendName').value.trim();
    const fp = document.getElementById('refFriendPhone').value.trim();
    const fl = document.getElementById('refFriendLocation').value.trim();

    if (!yn || !yp || !fn || !fp) {
      alert('Please fill in all required fields.');
      return;
    }

    const msg = `Hello turbowireless! I'd like to make a referral.\n\nMy Name: ${yn}\nMy Phone: ${yp}\n\nFriend's Name: ${fn}\nFriend's Phone: ${fp}\nFriend's Location: ${fl || 'Not specified'}`;
    window.open(`https://wa.me/254795908428?text=${encodeURIComponent(msg)}`, '_blank');
  }

  // ── Contact WhatsApp ──
  function submitRequest() {
    const name = document.getElementById('cName').value.trim();
    const phone = document.getElementById('cPhone').value.trim();
    const loc = document.getElementById('cLocation').value.trim();
    const pkg = document.getElementById('cPackage').value;
    const msg = document.getElementById('cMessage').value.trim();

    if (!name || !phone || !loc) {
      alert('Please fill in Name, Phone, and Location.');
      return;
    }

    const text = `Hello turbowireless! I'd like to request an installation.\n\nName: ${name}\nPhone: ${phone}\nLocation: ${loc}\nPackage: ${pkg || 'Not selected'}\nMessage: ${msg || 'None'}`;
    window.open(`https://wa.me/254795908428?text=${encodeURIComponent(text)}`, '_blank');
  }

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id], div[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.style.fontWeight = a.getAttribute('href') === '#' + current ? '700' : '500';
    });
  });

  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  function closeMenu() { mobileMenu.classList.remove('open'); }
  window.toggleFaq = function(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('active'));
    if (!isOpen) { answer.classList.add('open'); btn.classList.add('active'); }
  };
  // Service request to company WhatsApp number: +256758242675
  function sendServiceRequest() {
    const name = document.getElementById('reqName').value.trim();
    const phone = document.getElementById('reqPhone').value.trim();
    const location = document.getElementById('reqLocation').value.trim();
    const service = document.getElementById('reqService').value;
    const details = document.getElementById('reqDetails').value.trim();
    if (!name || !phone || !location) {
      alert('Please fill in Name, Phone, and Location.');
      return;
    }
    const msg = `🔧 *NEW SERVICE REQUEST* 🔧\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📍 Location: ${location}\n🛜 Service: ${service}\n📝 Details: ${details || 'Not specified'}\n\n⏳ Please contact me for installation.`;
    const whatsappNumber = "256758242675"; // official company WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }
  // also attach to global for inline buttons
  window.submitRequest = sendServiceRequest;
  // additional contact buttons
  document.querySelectorAll('.btn-install, .btn-sm, .btn-blue').forEach(btn => {
    if (btn.getAttribute('onclick')) return;
    if (btn.innerText.includes('Request') || btn.innerText.includes('Connect') || btn.innerText.includes('Get')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
  // Add hero request link handler
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });
