//Script para alterar o css
   var i = setInterval(function () {
      clearInterval(i);
      document.getElementById("loader").style.visibility = "hidden";
      document.getElementById("content").style.visibility = "visible";

      /*var lnk = document.createElement('link');
      lnk.setAttribute('type', "text/css" );
      lnk.setAttribute('rel', "stylesheet" );
      lnk.setAttribute('href', "estilo.css" );
      document.getElementsByTagName("head").item(0).appendChild(lnk);*/

      var css = document.getElementsByTagName('link');
      var estilo = css[0];
      estilo.setAttribute('href', 'css/estilo.css');
   }, 3000);


//script para alterar a posição do título da página
   var windowWidth = window.innerWidth;
   console.log(windowWidth);
   var lastScrollTop = 0;
   var titulo = document.getElementById('titulo-principal');
   var incremento = 0;

   $(window).scroll(function (event) {
      //var resultado = $('#direcao');
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
         // scroll para baixo
            //largura da tela maior que 1200px
            if(windowWidth >= 1200){
               if(incremento < 32){
                  incremento += 2;
                  titulo.style.top = `${incremento}vh`;
               }else{
                  titulo.style.top = `32vh`;
               }
            }
            //largura da tela entre 372px e 460px
            if(windowWidth >= 372 && windowWidth <= 460){
               if(incremento < 20){
                  incremento += 2;
                  titulo.style.top = `${incremento}vh`;
               }else{
                  titulo.style.top = `20vh`;
               }
            }
            //largura da tela entre 200px e 371px
            if(windowWidth >= 200 && windowWidth <= 371){
               if(incremento < 10){
                  incremento += 1;
                  titulo.style.top = `${incremento}vh`;
               }else{
                  titulo.style.top = `20vh`;
               }
            }

      }else{
         // scroll para cima
            //largura da tela maior que 1200px
            if(windowWidth >= 1200){
               if(incremento > -1){
                  incremento -= 2;
                  titulo.style.top = `${incremento}vh`;
               }else{
                  titulo.style.top = `0vh`;
               }
            }
            //largura da tela entre 372px e 460px
            if(windowWidth >= 372 && windowWidth <= 460){
               if(incremento > -1){
                  incremento -= 2;
                  titulo.style.top = `${incremento}vh`;
               }else{
                  titulo.style.top = `0vh`;
               }
            }
            //largura da tela entre 200px e 460px
            if(windowWidth >= 200 && windowWidth <= 371){
               if(incremento > -1){
                  incremento -= 1;
                  titulo.style.top = `${incremento}vh`;
               }else{
                  titulo.style.top = `0vh`;
               }
            }
      }
      lastScrollTop = st;
   });