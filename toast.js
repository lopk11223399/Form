function toast({ title = '', message = '', duration ='', success=''}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        // Tự đông tắt thông báo
        const autoRemoveId = setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000);

        const delay = (duration/1000).toFixed(2);
        
        toast.classList.add('toast', `toast--success`)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards;`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${success}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
        `;
        main.appendChild(toast);
    }
}