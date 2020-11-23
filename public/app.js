document.querySelectorAll('.price').forEach( item => {
    item.textContent = new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(item.textContent)
})