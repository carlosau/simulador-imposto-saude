document.getElementById('simulador-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Obtendo os valores dos inputs
    const faturamento = parseFloat(document.getElementById('faturamento').value);
    const despesas = parseFloat(document.getElementById('despesas').value);
    const regime = document.getElementById('regime').value;
  
    if (isNaN(faturamento) || isNaN(despesas)) {
      alert("Por favor, insira valores válidos.");
      return;
    }
  
    // Função para calcular os impostos
    let impostos = 0;
    let impostoTexto = "";
  
    switch (regime) {
      case "simples-anexo-iii":
        // Alíquota do Simples Nacional Anexo III (exemplo simplificado)
        impostos = faturamento * 0.06; // 6% de alíquota média
        impostoTexto = `Imposto a pagar no Simples Nacional Anexo III: R$ ${impostos.toFixed(2)}`;
        break;
      
      case "simples-anexo-v":
        // Alíquota do Simples Nacional Anexo V (exemplo simplificado)
        impostos = faturamento * 0.10; // 10% de alíquota média
        impostoTexto = `Imposto a pagar no Simples Nacional Anexo V: R$ ${impostos.toFixed(2)}`;
        break;
  
      case "lucro-presumido":
        // Cálculo do Lucro Presumido (exemplo simplificado)
        const lucroPresumido = faturamento - despesas;
        impostos = lucroPresumido * 0.15; // 15% de alíquota presumida (IRPJ)
        impostoTexto = `Imposto a pagar no Lucro Presumido: R$ ${impostos.toFixed(2)}`;
        break;
  
      case "lucro-presumido-hospitalar":
        // Cálculo do Lucro Presumido Hospitalar (exemplo simplificado)
        const lucroPresumidoHospitalar = faturamento - despesas;
        impostos = lucroPresumidoHospitalar * 0.05; // 5% de alíquota para hospitais
        impostoTexto = `Imposto a pagar no Lucro Presumido Hospitalar: R$ ${impostos.toFixed(2)}`;
        break;
  
      default:
        impostoTexto = "Selecione um regime fiscal válido.";
    }
  
    // Exibir o resultado
    const resultado = document.getElementById('resultado');
    document.getElementById('impostos').textContent = impostoTexto;
    resultado.style.display = 'block';
  });
  