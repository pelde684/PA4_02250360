// Toggle menu on small screens
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', () => {
      navList.classList.toggle('active');
      menuIcon.classList.toggle('bx-x'); // change icon to X
    });