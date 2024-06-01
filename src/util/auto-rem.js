(function(){
    const doc = document.documentElement;
    const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const resizeCale = ()=>{
        const clientWidth = doc.clientWidth;
        if(!clientWidth) return;
        doc.style.fontSize = 100 * (clientWidth / 1920) + "px";
    };

    if(!doc.addEventListener) return;
    window.addEventListener(resizeEvent,resizeCale,false);
    doc.addEventListener(resizeEvent,resizeCale,false);
})();