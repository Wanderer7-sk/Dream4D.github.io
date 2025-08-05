// 控制GIF循环播放的JavaScript代码
document.addEventListener('DOMContentLoaded', function() {
    const gifImages = document.querySelectorAll('.gif-loop');
    
    gifImages.forEach(function(img) {
        const originalSrc = img.getAttribute('data-src');
        img.addEventListener('load', function() {
            setInterval(function() {
                img.src = '';
                setTimeout(function() {
                    img.src = originalSrc;
                }, 10);
            }, 3000); 
        });
    });
}); 