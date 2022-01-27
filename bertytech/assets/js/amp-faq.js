const faqs = document.body.querySelectorAll('.block-faq');
faqs.forEach(faq => {
  const q = faq.querySelector('.block-faq-q');
  const a = faq.querySelector('.block-faq-a');
  q.addEventListener('click', function(e) {
    closeAllOtherFaqs(faq);
    
    faq.parentNode.scrollIntoView();
    a.classList.toggle('show');
    q.classList.toggle('collapsed');
    q.setAttribute('aria-expanded', !q.classList.contains('collapsed'));
  })
})

function closeAllOtherFaqs(currentFaq) {
  faqs.forEach(faq => {
    const q = faq.querySelector('.block-faq-q');
    const a = faq.querySelector('.block-faq-a');

    // adding animation collapsing class only if current
    if (faq == currentFaq) {
      a.classList.toggle('faq-collapsing');
      setTimeout(() => {
        a.classList.toggle('faq-collapsing');
      }, 500);
      return;
    }

    a.classList.remove('show');
    q.classList.add('collapsed');
  })  
}