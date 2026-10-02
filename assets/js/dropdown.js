document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = [...document.querySelectorAll('.dropdown')];
  const mobile = () => window.matchMedia('(max-width: 599px)').matches;

  function setOpen(dropdown, open) {
    dropdown.classList.toggle('active', open);
    dropdown.classList.toggle('closed', !open);
    dropdown.querySelector('.page-link').setAttribute('aria-expanded', String(open));
  }

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.page-link');
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      dropdowns.forEach(other => setOpen(other, other === dropdown && open));
    });
    dropdown.addEventListener('mouseenter', () => {
      if (!mobile()) setOpen(dropdown, true);
    });
    dropdown.addEventListener('mouseleave', () => {
      if (!mobile() && !dropdown.contains(document.activeElement)) setOpen(dropdown, false);
    });
    dropdown.addEventListener('focusin', event => {
      if (event.target !== button) setOpen(dropdown, true);
    });
    dropdown.addEventListener('focusout', event => {
      if (!dropdown.contains(event.relatedTarget)) setOpen(dropdown, false);
    });
    dropdown.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        button.focus();
        setOpen(dropdown, false);
      }
    });
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.dropdown')) dropdowns.forEach(dropdown => setOpen(dropdown, false));
  });
  window.addEventListener('resize', () => dropdowns.forEach(dropdown => setOpen(dropdown, false)));
});
