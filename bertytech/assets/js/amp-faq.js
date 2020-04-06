document.body.querySelectorAll('.block-faq').forEach(faq => {
  const q = faq.querySelector('.block-faq-q');
  const a = faq.querySelector('.block-faq-a');
  q.addEventListener('click', function(e) {
    a.classList.toggle('show');
    q.classList.toggle('collapsed');
    q.setAttribute('aria-expanded', !q.classList.contains('collapsed'));
  })
})