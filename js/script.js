document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  let currentActiveUrl = window.location.href;

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Retrieve the href attribute of the clicked link
      const targetUrl = link.getAttribute('href');

      if (targetUrl === currentActiveUrl) {
        return;
      }

      currentActiveUrl = targetUrl;

      // Use Fetch API or XMLHttpRequest to fetch the content of the target URL
      fetch(targetUrl)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Failed to fetch content');
          }
        })
        .then(data => {
          // Replace the current content with the fetched content
          document.body.innerHTML = data;
        })
        .catch(error => {
          console.error(error);
        });
    });
  });
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert('Email copied to clipboard');
  }, function(err) {
    alert('Failed to copy text: ', err);
  });
}