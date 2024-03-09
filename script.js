function carregar() {
    var msg = window.document.querySelector('div#msg') //os dois fazem a mesma função
    var img = window.document.getElementById('imagem') // mesma função que o outro de cima
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if (segundos === 60) {
        segundos = 0; // Reinicia os segundos para 0
        minutos++; // Incrementa os minutos
    }

    msg.innerHTML = `${hora}:${minutos}:${segundos}`

    var videoD = document.getElementById('videoDia');
    var videoT = document.getElementById('videoTarde');
    var videoN = document.getElementById('videoNoite');

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        videoTarde.style.display = 'none'; // Oculta o vídeo da tarde
        videoNoite.style.display = 'none'; // Oculta o vídeo da noite
        videoDia.style.display = 'block'; // Exibe o vídeo do dia
        img.src = 'dia.jpg'
        window.document.body.style.background = '#add8e6'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        videoDia.style.display = 'none'; // Oculta o vídeo do dia
        videoNoite.style.display = 'none'; // Oculta o vídeo da noite
        videoTarde.style.display = 'block'; // Exibe o vídeo da tarde
        img.src = 'tarde.jpg'
        window.document.body.style.background = '#FFA500'
    } else {
        // BOA NOITE
        videoDia.style.display = 'none'; // Oculta o vídeo do dia
        videoTarde.style.display = 'none'; // Oculta o vídeo da tarde
        videoNoite.style.display = 'block'; // Exibe o vídeo da noite
        img.src = 'noite.jpg'
        window.document.body.style.background = '#000080'
    }
}

setInterval(carregar, 1000);
