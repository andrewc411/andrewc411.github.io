document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const container = document.querySelector('.container');
  
    toggleBtn.addEventListener('click', function() {
      container.classList.toggle('dark-mode');
    });
  
    // Optional: Persist user's mode preference using local storage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark-mode') {
      container.classList.add('dark-mode');
    }
  
    window.addEventListener('beforeunload', function() {
      const mode = container.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
      localStorage.setItem('mode', mode);
    });
  });
  