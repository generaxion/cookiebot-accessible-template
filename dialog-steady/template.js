/**
 * Required event: Show banner
 */
function showCookieBanner() {

  var cookieBanner = document.getElementById('CookieBanner');
  if (cookieBanner) {
    cookieBanner.classList.add('is-visible-cookie-banner');
    cookieBanner.classList.remove('is-closing-cookie-banner');
    cookieBanner.style.display = 'block';
  }
  document.body.classList.add('is-cookie-banner');

}

/**
 * Required event: Hide banner
 */
function hideCookieBanner() {

  var cookieBanner = document.getElementById('CookieBanner');
  if (cookieBanner) {
    cookieBanner.classList.add('is-closing-cookie-banner');
    // hide element after CSS animation (250ms)
    setTimeout(function(cookieBanner) {
      cookieBanner.classList.remove('is-visible-cookie-banner');
      cookieBanner.style.display = 'none';
      document.body.classList.remove('is-cookie-banner');
    }, 250, cookieBanner);
  } else {
    document.body.classList.remove('is-cookie-banner');
  }

}

/**
 * Event: Show cookie categories
 */
function eventCookieBannerDetailsClicked(e) {
  var cookieBannerWrapper = document.getElementById('CookieBanner');
  if (cookieBannerWrapper) {
     cookieBannerWrapper.classList.toggle('is-details-open');
  }
  if (e.currentTarget) {
     if (e.currentTarget.getAttribute('aria-expanded') == 'false') {
      e.currentTarget.setAttribute('aria-expanded', 'true');
     } else {
      e.currentTarget.setAttribute('aria-expanded', 'false');
     }
  }
}

/**
 * Event: Show details of cookie category
 */
function eventCookieBannerToggleTable(e) {

  e.preventDefault();
  e.stopPropagation();

  if (e.currentTarget) {
    var targetId = e.currentTarget.getAttribute('aria-controls');
    if (targetId) {
      var targetEl = document.getElementById(targetId);
      if (targetEl) {
        if (e.currentTarget.getAttribute('aria-expanded') == 'false') {
          e.currentTarget.setAttribute('aria-expanded', 'true');
          targetEl.classList.add('is-open');
         } else {
          e.currentTarget.setAttribute('aria-expanded', 'false');
          targetEl.classList.remove('is-open');
         }
      }
    }
  }

}

