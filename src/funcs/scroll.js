export const disableScroll = () => {
    if (document.disableScroll) return;
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.disableScroll = true
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
            position: fixed;
            width: 100%;
            height: 100vh;
            left: 0;
            top: ${-window.scrollY}px;
            overflow: hidden;
            padding-right: ${widthScroll}px;
            backdrop-filter: blur(10px);z
        `
}

export const enableScroll = () => {
    document.disableScroll = false
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY
    })
}