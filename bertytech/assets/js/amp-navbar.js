const dropdowns = document.body.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const link = dropdown.querySelector('.nav-link');
  const menu = dropdown.querySelector('.dropdown-menu');

  link.addEventListener('click', function(e) {
    menu.classList.contains('show')
      ? closeDropdown(dropdown)
      : openDropdown(dropdown);
  })
})

function openDropdown(dropdown) {
  dropdowns.forEach(item => closeDropdown(item));

  const link = dropdown.querySelector('.nav-link');
  const menu = dropdown.querySelector('.dropdown-menu');
  menu.classList.add('show');
  link.setAttribute('aria-expanded', true);
}

function closeDropdown(dropdown) {
  const link = dropdown.querySelector('.nav-link');
  const menu = dropdown.querySelector('.dropdown-menu');
  menu.classList.remove('show');
  link.setAttribute('aria-expanded', false);
}