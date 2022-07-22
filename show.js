(function(){
    var btn = document.querySelector('.mude-cor');
    function mudarCor(){
       if(btn.classList.contains('white')){
        document.body.classList.remove('muda');
        btn.classList.remove('white');
        var image = document.querySelector('.image');
        image.src = 'img/sun.png';
       }
       else{
        btn.classList.add('white');
        document.body.classList.add('muda')
        var image = document.querySelector('.image');
        image.src = 'img/moon.png';
       }
    }
    btn.addEventListener('click',mudarCor)
    
})();