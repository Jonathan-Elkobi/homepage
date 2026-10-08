(() => {
  'use strict';

  if (typeof window.gtag !== 'function') return;

  const measurementId = document.currentScript.dataset.measurementId;
  const openedAbstracts = new WeakSet();
  const scrollMilestones = new Set();

  const text = (element) => (element?.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100);
  const paperTitle = (paper) => text(paper.querySelector('.paper-title, h3'));
  const linkLocation = (link) => {
    if (link.closest('header, nav')) return 'navigation';
    if (link.closest('footer')) return 'footer';
    if (link.closest('.network-icon')) return 'profile';
    return 'content';
  };

  const send = (name, parameters) => {
    window.gtag('event', name, { send_to: measurementId, ...parameters });
  };

  const trackLink = (event) => {
    if (event.type === 'auxclick' && event.button !== 1) return;
    if (event.type === 'click' && event.button !== 0) return;

    const link = event.target.closest?.('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (/^(mailto|tel):/i.test(href)) {
      // Count contact intent without sending an email address or phone number.
      send('contact_click', {
        contact_method: href.split(':')[0].toLowerCase(),
        link_location: linkLocation(link),
      });
      return;
    }

    let url;
    try {
      url = new URL(href, document.baseURI);
    } catch {
      return;
    }
    if (!['http:', 'https:'].includes(url.protocol)) return;

    // Custom events omit query strings and fragments from link destinations.
    const parameters = {
      link_url: url.origin + url.pathname,
      link_location: linkLocation(link),
    };

    if (url.origin === window.location.origin && /\/uploads\/resume\.pdf$/i.test(url.pathname)) {
      send('cv_download', parameters);
      return;
    }

    const paper = link.closest('.paper, .paper-card');
    if (paper) {
      send('paper_link_click', { ...parameters, paper_title: paperTitle(paper) });
      return;
    }

    if (link.closest('.network-icon, header, nav')) {
      const platforms = {
        'twitter.com': 'twitter',
        'x.com': 'twitter',
        'linkedin.com': 'linkedin',
        'github.com': 'github',
        'scholar.google.com': 'google_scholar',
        'scholar.google.co.uk': 'google_scholar',
      };
      const platform = platforms[url.hostname.replace(/^www\./, '')];
      if (platform) {
        send('social_profile_click', { ...parameters, social_platform: platform });
        return;
      }
    }

    if (/\/teaching\/?$/.test(window.location.pathname) && link.closest('.article-style') && url.origin !== window.location.origin) {
      send('teaching_resource_click', { ...parameters, resource_title: text(link) });
    }
  };

  document.addEventListener('click', trackLink);
  document.addEventListener('auxclick', trackLink);

  // The native toggle event does not bubble, so listen in the capture phase.
  document.addEventListener('toggle', (event) => {
    const details = event.target;
    if (!details.matches?.('details.paper-abstract') || !details.open || openedAbstracts.has(details)) return;
    const paper = details.closest('.paper, .paper-card');
    if (!paper) return;
    openedAbstracts.add(details);
    send('abstract_open', { paper_title: paperTitle(paper) });
  }, true);

  let scrollPending = false;
  window.addEventListener('scroll', () => {
    if (scrollPending) return;
    scrollPending = true;
    window.requestAnimationFrame(() => {
      scrollPending = false;
      const pageHeight = document.documentElement.scrollHeight;
      if (pageHeight <= window.innerHeight) return;
      const depth = Math.ceil(window.scrollY + window.innerHeight) / pageHeight * 100;
      for (const milestone of [25, 50, 75, 100]) {
        if (depth >= milestone && !scrollMilestones.has(milestone)) {
          scrollMilestones.add(milestone);
          send('scroll_depth', { percent_scrolled: milestone });
        }
      }
    });
  }, { passive: true });
})();
