const faqs = document.body.querySelectorAll('.block-faq');
faqs.forEach(faq => {
  const q = faq.querySelector('.block-faq-q');
  const a = faq.querySelector('.block-faq-a');

  q.addEventListener('click', function(e) {
    closeAllOtherFaqs(faq);
    a.classList.toggle('show');
    q.classList.toggle('collapsed');
    q.setAttribute('aria-expanded', !q.classList.contains('collapsed'));
  })
})

function closeAllOtherFaqs(currentFaq) {
  faqs.forEach(faq => {
    if (faq == currentFaq) return;
    const q = faq.querySelector('.block-faq-q');
    const a = faq.querySelector('.block-faq-a');
    a.classList.remove('show');
    q.classList.add('collapsed');
  })  
}