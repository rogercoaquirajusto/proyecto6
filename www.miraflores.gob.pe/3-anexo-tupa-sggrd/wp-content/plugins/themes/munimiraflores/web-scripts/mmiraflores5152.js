var mm = {
    init: function(){
        $('#carouselExampleIndicators').carousel({
            interval: false
        });
        
        //Manipulando el tamaño del menu principal
        var elementosMenu = $("#home-menu-principal li").toArray().length;
        $("#home-menu-principal li").attr("style","width:calc(100%/"+elementosMenu+" + 5px);");
		
		//$("#modalVideoAlerta").modal("show");
    },
    mostrarAccesosDirectos: function(){
        $('.capa-slide').removeClass('oculto');
        $(".mas-accesos-d a").attr("onclick", "mm.ocultarAccesosDirectos();");
        $(".mas-accesos-d a").text("Menos accesos directos");
    },
    ocultarAccesosDirectos: function(){
        $('.capa-slide').addClass('oculto');
        $(".mas-accesos-d a").attr("onclick", "mm.mostrarAccesosDirectos('.oculto');");
        $(".mas-accesos-d a").text("Mas accesos directos");
    }
};

$(document).ready(function(){
    mm.init();
});

$(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() > $(document).height()-$(window).height()-100){
			if($("#capa-cifras #texto-cifras-uno").val()!=undefined){
				var cifras_i = $("#capa-cifras #texto-cifras-uno").val().substring(1);
				var cifras_ii = $("#capa-cifras #texto-cifras-dos").val().substring(1);
				var cifras_iii = $("#capa-cifras #texto-cifras-tres").val().substring(1);
				
				var conta_i=1; var conta_ii=1; var conta_iii=1;
				var id_i = setInterval(function(){
					$("#capa-cifras .texto.cifras.uno").text("+"+conta_i);
					conta_i++;
					if(conta_i>cifras_i){ clearInterval(id_i); }
				},15);
				
				var id_ii = setInterval(function(){
					$("#capa-cifras .texto.cifras.dos").text("+"+conta_ii);
					conta_ii++;
					if(conta_ii>cifras_ii){ clearInterval(id_ii); }
				},15);
				
				var id_iii = setInterval(function(){
					$("#capa-cifras .texto.cifras.tres").text("+"+conta_iii);
					conta_iii++;
					if(conta_iii>cifras_iii){ clearInterval(id_iii); }
				},15);
			}
		}
	});
});