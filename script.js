// Elementos do DOM
const inputValores = document.getElementById('input-valores');
const btnCalcular = document.getElementById('btn-calcular');
const btnRetornar = document.getElementById('btn-retornar');
const resultadoSection = document.getElementById('resultado-section');
const resultadoConteudo = document.getElementById('resultado-conteudo');
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Função para calcular o MDC (Máximo Divisor Comum)
function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Função para processar os cálculos
function processarCalculos() {
  // Limpa resultado anterior
  resultadoConteudo.innerHTML = '';

  // Obtém os valores de entrada
  const input = inputValores.value.trim();

  // Validação básica
  if (!input) {
    alert('⚠️ Por favor, insira dois números separados por vírgula!');
    return;
  }

  // Separa os valores
  const valores = input.split(',').map(v => v.trim());

  if (valores.length !== 2) {
    alert('⚠️ Por favor, insira exatamente dois números separados por vírgula!');
    return;
  }

  const A = parseInt(valores[0]);
  const B = parseInt(valores[1]);

  // Validação dos números
  if (isNaN(A) || isNaN(B)) {
    alert('⚠️ Por favor, insira apenas números válidos!');
    return;
  }

  if (A < 1 || A > 1000 || B < 1 || B > 1000) {
    alert('⚠️ Os números devem estar entre 1 e 1000!');
    return;
  }

  // 1. Soma Rádio Lunar
  const somaRadioLunar = A + B;

  // 2. Subtração do Eclipse ((maior - menor) / 2 arredondado)
  const maior = Math.max(A, B);
  const menor = Math.min(A, B);
  const subtracaoEclipse = Math.round((maior - menor) / 2);

  // 3. Multiplicação Estelar
  const multiplicacaoEstelar = A * B;

  // 4. Divisão Estelar (maior / menor, arredondado)
  const divisaoEstelar = Math.round(maior / menor);

  // 5. Número Mágico de Prata (soma × MDC)
  const mdc = calculateGCD(A, B);
  const numeroMagicoPrata = somaRadioLunar * mdc;

  // Monta o HTML do resultado
  let html = '';

  // Cálculo 1
  html += `
        <div class="calculo-item">
            <h4>🌙 1. Soma Rádio Lunar</h4>
            <p>Cálculo: ${A} + ${B}</p>
            <p><strong>Resultado: ${somaRadioLunar}</strong></p>
        </div>
    `;

  // Cálculo 2
  html += `
        <div class="calculo-item">
            <h4>🌑 2. Subtração do Eclipse</h4>
            <p>Maior número: ${maior}</p>
            <p>Menor número: ${menor}</p>
            <p>Diferença: ${maior} - ${menor} = ${maior - menor}</p>
            <p>Cálculo: (${maior - menor}) ÷ 2 = ${((maior - menor) / 2).toFixed(2)}</p>
            <p>Arredondado: <strong>${subtracaoEclipse}</strong></p>
        </div>
    `;

  // Cálculo 3
  html += `
        <div class="calculo-item">
            <h4>⭐ 3. Multiplicação Estelar</h4>
            <p>Cálculo: ${A} × ${B}</p>
            <p><strong>Resultado: ${multiplicacaoEstelar}</strong></p>
        </div>
    `;

  // Cálculo 4
  html += `
        <div class="calculo-item">
            <h4>✨ 4. Divisão Estelar</h4>
            <p>Maior número: ${maior}</p>
            <p>Menor número: ${menor}</p>
            <p>Cálculo: ${maior} ÷ ${menor} = ${(maior / menor).toFixed(2)}</p>
            <p>Arredondado para o inteiro mais próximo</p>
            <p><strong>Resultado: ${divisaoEstelar}</strong></p>
        </div>
    `;

  // Cálculo 5
  html += `
        <div class="calculo-item">
            <h4>💎 5. Número Mágico de Prata</h4>
            <p>Soma: ${somaRadioLunar}</p>
            <p>MDC de ${A} e ${B}: ${mdc}</p>
            <p>Cálculo: ${somaRadioLunar} × ${mdc}</p>
            <p><strong>Resultado: ${numeroMagicoPrata}</strong></p>
        </div>
    `;

  // Resultado final
  html += `
        <div class="resultado-final">
            <h4>✨ SAÍDAS ESPERADAS ✨</h4>
            <p class="resultado-valor">Resultado da Soma Rádio Lunar: ${somaRadioLunar}</p>
            <p class="resultado-valor">Resultado da Subtração do Eclipse: ${subtracaoEclipse}</p>
            <p class="resultado-valor">Resultado da Multiplicação Estelar: ${multiplicacaoEstelar}</p>
            <p class="resultado-valor">Resultado da Divisão Estelar: ${divisaoEstelar}</p>
            <p class="resultado-valor">Número Mágico de Prata: ${numeroMagicoPrata}</p>
        </div>
    `;

  // Insere o resultado
  resultadoConteudo.innerHTML = html;

  // Exibe a seção de resultado
  resultadoSection.classList.remove('hidden');

  // Scroll suave até o resultado
  setTimeout(() => {
    resultadoSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// Função para retornar ao estado inicial
function retornarEstadoInicial() {
  inputValores.value = '';
  resultadoConteudo.innerHTML = '';
  resultadoSection.classList.add('hidden');
  inputValores.focus();
}

// Event Listeners
btnCalcular.addEventListener('click', processarCalculos);
btnRetornar.addEventListener('click', retornarEstadoInicial);

// Permite calcular com Enter
inputValores.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    processarCalculos();
  }
});
