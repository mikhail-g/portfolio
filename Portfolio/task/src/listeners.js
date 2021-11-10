const openWindowButtons = document.getElementsByClassName('open-window');
const closeWindowButton = document.getElementsByClassName('close-window')[0];
const popupWindow = document.getElementsByClassName('window')[0];

for (let openWindowButton of openWindowButtons) {
    openWindowButton.addEventListener('click', () => {
        setWindowOpacity(1);
    })
}

const setWindowOpacity = (opacity) => popupWindow.setAttribute('style', `opacity: ${opacity};`)

closeWindowButton.addEventListener('click', () => setWindowOpacity(0));
