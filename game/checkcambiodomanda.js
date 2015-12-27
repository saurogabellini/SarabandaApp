var nononline =0;

function VerificaPagina(data,pagina) {
		if (data == '4' && pagina != data){
			document.location.href = 'play.htm';
		}
		if (data == '2' && pagina != data){
			document.location.href = 'playtruefalse.htm';
		}
		if (data == 'B' && pagina != data){
			document.location.href = 'play2.htm';
		}
		if (data == '0' && pagina != data) {
			document.location.href = 'playprenota.htm';
		}
		if (data == 'U' && pagina != data) {
			document.location.href = 'playupdown.htm';
		}
		if (data == '6' && pagina != data) {
			document.location.href = 'play6.htm';
		}
		if (data == 'T' && pagina != data) {
			document.location.href = 'playtastiera.htm';
		}
		if (data == 'N' && pagina != data) {
			document.location.href = 'playtastieranumerica.htm';
		}
		if (data == 'S3' && pagina != data) {
			document.location.href = 'playsort3.htm';
		}
		if (data == 'M3' && pagina != data) {
			document.location.href = 'playmatch3.htm';
		}
		if (data == 'S4' && pagina != data) {
			document.location.href = 'playsort4.htm';
		}
		if (data == 'M4' && pagina != data) {
			document.location.href = 'playmatch4.htm';
		}
		if (data == 'S5' && pagina != data) {
			document.location.href = 'playsort5.htm';
		}
		if (data == 'M5' && pagina != data) {
			document.location.href = 'playmatch5.htm';
		}
		if (data == 'CH' && pagina != data) {			
			document.location.href = 'chat.htm';
		}
		if (data == 'LG' && pagina != data) {			
			document.location.href = '../gioca.htm';
		}
}

function VerificaPaginaServer(pagina)
{
        RicezioneOk = 0;

        var uri = 'http://' + serverip + '/cambiapagina.ashx';

        $.ajax({
            cache: false,
            dataType: "text",
            beforeSend: function(x) {
                if (x && x.overrideMimeType) {
                    x.overrideMimeType("application/json;charset=UTF-8");
                }
            },
            url: uri,
            success: function(data) {
					if ($("#statusicon").attr('src') == 'assets/images/error.png') {
						$("#statusicon").attr('src','assets/images/ok.png');
						$("#statoconnessione").html("Connesso...");
					}
					VerificaPagina(data,pagina);
		           },
            error: function(jqXHR, textStatus, errorThrown) {
				  $("#statusicon").attr('src','assets/images/error.png');
				  $("#statoconnessione").html("ERRORE CONNESSIONE");				
                //alert(textStatus + ', ' + errorThrown + ':\n' + jqXHR.responseText);
            }
        });
}

function CambioPagina(pagina) {

    var doStuff = function() {
        RicezioneOk = 1;

        var uri = 'http://' + serverip + '/cambiapagina.ashx';

	//Inserito TimeOut a 3 secondi

        $.ajax({
            cache: false,
            dataType: "text",
	    	timeout: 3000,
            beforeSend: function(x) {
                if (x && x.overrideMimeType) {
                    x.overrideMimeType("application/json;charset=UTF-8");
                }
            },
            url: uri,
            success: function(data) {
            	RicezioneOk = 0;
				if ($("#statusicon").attr('src') == 'assets/images/error.png') {
				    $("#statusicon").attr('src','assets/images/ok.png');
				    $("#statoconnessione").html("Connesso...");
				}
				VerificaPagina(data,pagina);
	        },
            error: function(jqXHR, textStatus, errorThrown) {
            	RicezioneOk = 0;
				$("#statusicon").attr('src','assets/images/error.png');
				$("#statoconnessione").html("ERRORE CONNESSIONE");				
				nononline++;
				if (nononline > 10) {
					document.location.href = 'index.htm';
				}
            }
        });
        

    };

    // portato a 3 secondi da 1,5 l'intervallo di richiesta
    setInterval(doStuff, 3000);
}