let IsDark = false;

DarkMode = () => {
    IsDark = !IsDark;
    IsDark ? document.body.style.backgroundColor = '#222' : document.body.style.backgroundColor = '#fff';
}