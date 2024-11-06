// garantir que página volte ao início após recarregamento
window.onbeforeunload = function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
}