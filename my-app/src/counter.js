document.addEventListener('DOMContentLoaded', function () {
  // راه‌اندازی شمارشگر
  const counterButton = document.getElementById('counter-button');
  if (counterButton) {
      setupCounter(counterButton);
  }

  // کد قاب موبایل
  const mobileCasesLink = document.getElementById('mobile-cases-link');
  const mobileCasesSection = document.getElementById('mobile-cases');
  if (mobileCasesLink && mobileCasesSection) {
      mobileCasesLink.addEventListener('click', function (event) {
          event.preventDefault();
          mobileCasesSection.classList.toggle('hidden');
      });
  }

  const commentModal = document.getElementById('commentModal');
  const openButton = document.getElementById('openButton');
  const closeButton = document.getElementById('closeButton');

  // Check elements before adding listeners
  if (commentModal && openButton && closeButton) {
      openButton.addEventListener('click', (e) => {
          e.preventDefault();
          commentModal.classList.remove('hidden');
      });

      closeButton.addEventListener('click', () => {
          commentModal.classList.add('hidden');
      });

      commentModal.addEventListener('click', (e) => {
          if (e.target === commentModal) {
              commentModal.classList.add('hidden');
          }
      });
  }

  // Define showPage globally
  window.showPage = function (pageId) {
      document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
      document.getElementById(pageId).classList.remove('hidden');
  };
});
