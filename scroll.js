window.addEventListener('scroll', function() {
    if (!localStorage.getItem('redirected')) {
        localStorage.setItem('redirected', 'true');
        window.location.href = 'index.html';
    }
});

window.addEventListener('load', function() {
    localStorage.removeItem('redirected');
});