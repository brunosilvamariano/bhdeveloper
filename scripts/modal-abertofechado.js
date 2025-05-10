// Função que atualiza o status de horário com base na hora e no dia da semana
function atualizarStatusHorario() {
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0 = Domingo, ..., 6 = Sábado
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
  
    // Elementos do DOM
    const status = document.getElementById('status-horario');
    const texto = document.getElementById('texto-status');
    const icone = document.getElementById('icone-status');
  
    // Define horários de funcionamento
    let abertura, fechamento;
    if (diaSemana >= 1 && diaSemana <= 5) {
      // Segunda a sexta
      abertura = 18;
      fechamento = 23;
    } else {
      // Sábado e domingo
      abertura = 15;
      fechamento = 20;
    }
  
    // Função auxiliar para aplicar status visual e mensagem
    const setStatus = (mensagem, classe, iconeClasse) => {
      texto.textContent = mensagem;
      status.className = `status-horario ${classe}`;
      icone.className = `bi ${iconeClasse} me-2`;
    };
  
    // Aplica a lógica de horários
    if (hora < abertura) {
      setStatus(`Abriremos às ${abertura}h`, 'status-em-breve', 'bi-clock');
    } else if (hora === fechamento - 1 && minutos >= 30) {
      setStatus(`Fechamos em breve às ${fechamento}h`, 'status-fechando', 'bi-exclamation-triangle-fill');
    } else if (hora >= abertura && hora < fechamento) {
      setStatus('Estamos abertos!', 'status-aberto', 'bi-check-circle-fill');
    } else {
      setStatus('Estamos fechados', 'status-fechado', 'bi-x-circle-fill');
    }
  }
  
  // Executa ao carregar e atualiza a cada 60 segundos
  document.addEventListener('DOMContentLoaded', () => {
    atualizarStatusHorario();
    setInterval(atualizarStatusHorario, 60000);
  });
  