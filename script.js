function toggleTheme() {
    const body = document.body;
    if (body.style.backgroundColor === 'var(--background-dark)') {
      body.style.backgroundColor = 'var(--background-light)';
      body.style.color = 'var(--text-light)';
    } else {
      body.style.backgroundColor = 'var(--background-dark)';
      body.style.color = 'var(--text-dark)';
    }
  }
  