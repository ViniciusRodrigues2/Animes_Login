(function(){
    var btn = document.querySelector('.mude-cor');
    function mudarCor(){
       if(btn.classList.contains('white')){
        document.body.classList.remove('muda');
        btn.classList.remove('white');
        var imgAnime = document.querySelector('.img-anime');
        var image = document.querySelector('.image');
        imgAnime.src = 'img/kirito.png';
        image.src = 'img/sun.png';
       }
       else{
        btn.classList.add('white');
        document.body.classList.add('muda')
        var image = document.querySelector('.image');
        var imgAnime = document.querySelector('.img-anime');
        image.src = 'img/moon.png';
        imgAnime.src = 'img/asuna-bg.png';
       }
    }
    btn.addEventListener('click',mudarCor)
    
})();