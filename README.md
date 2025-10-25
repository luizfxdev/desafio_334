# 🌙 Calculadora Lunar de Sailor Moon ✨

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 📖 Sobre o Desafio

A **Calculadora Lunar** é uma aplicação web interativa inspirada no universo de Sailor Moon, desenvolvida para resolver operações matemáticas mágicas! O desafio consiste em realizar cinco encantamentos matemáticos com dois números de entrada:

1. 🌙 **Soma Rádio Lunar**: Soma dos dois números
2. 🌑 **Subtração do Eclipse**: Diferença entre maior e menor, dividida por 2 (arredondado)
3. ⭐ **Multiplicação Estelar**: Multiplicação dos valores
4. ✨ **Divisão Estelar**: Divisão do maior pelo menor (arredondado)
5. 💎 **Número Mágico de Prata**: Soma multiplicada pelo MDC

## 🎵 Trilha Sonora

Este projeto utiliza **Moonlight Densetsu** (ムーンライト伝説), a icônica música de abertura da série Sailor Moon, composta por Tetsuya Komuro e interpretada por DALI.

## 🎯 Aplicações em Projetos Reais

Esta calculadora pode ser adaptada para diversos cenários práticos:

### 1. **Sistemas Educacionais**
- Plataformas de ensino de matemática básica
- Gamificação de aprendizado de operações aritméticas
- Demonstração interativa de conceitos matemáticos

### 2. **Calculadoras Financeiras**
- Cálculo de juros e taxas (adaptando as operações)
- Análise de proporções e divisões de valores
- Sistemas de conversão monetária

### 3. **Aplicações Científicas**
- Cálculo de MDC/MMC para frações
- Operações com grandezas físicas
- Análise de proporções em química

### 4. **Dashboards Analíticos**
- Processamento de métricas
- Cálculos estatísticos básicos
- Visualização de operações matemáticas

### 5. **APIs de Processamento**
- Backend para cálculos matemáticos
- Microserviços de operações aritméticas
- Validação de dados numéricos

## 🔧 Lógica de Solução do Desafio

### Função Principal: `processarCalculos()`

A função principal do desafio implementa a lógica completa de validação e cálculo:

```javascript
function processarCalculos() {
    // 1. Captura e validação da entrada
    const input = inputValores.value.trim();
    const valores = input.split(',').map(v => v.trim());
    const A = parseInt(valores[0]);
    const B = parseInt(valores[1]);
    
    // 2. Operações básicas
    const somaRadioLunar = A + B;
    const maior = Math.max(A, B);
    const menor = Math.min(A, B);
    const subtracaoEclipse = Math.round((maior - menor) / 2);
    const multiplicacaoEstelar = A * B;
    const divisaoEstelar = Math.round(maior / menor);
    
    // 3. Cálculo do Número Mágico usando MDC
    const mdc = calculateGCD(A, B);
    const numeroMagicoPrata = somaRadioLunar * mdc;
}
```

### Algoritmo de Euclides para MDC

A função mais importante do projeto é o cálculo do **Máximo Divisor Comum (MDC)** usando o **Algoritmo de Euclides**:

```javascript
function calculateGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

#### **Explicação Técnica:**

1. **Princípio do Algoritmo**: Baseado na propriedade de que `MDC(a, b) = MDC(b, a mod b)`
2. **Complexidade**: O(log min(a, b)) - extremamente eficiente
3. **Iteração**: Substitui continuamente os valores até que o resto seja zero
4. **Terminação**: Quando `b = 0`, o valor de `a` é o MDC

#### **Exemplo de Execução (MDC de 48 e 18):**

```
Iteração 1: a=48, b=18  → 48 % 18 = 12  → a=18, b=12
Iteração 2: a=18, b=12  → 18 % 12 = 6   → a=12, b=6
Iteração 3: a=12, b=6   → 12 % 6 = 0    → a=6, b=0
Resultado: MDC = 6
```

### Estrutura de Validação

O código implementa múltiplas camadas de validação:

1. **Validação de Entrada Vazia**: Verifica se o campo foi preenchido
2. **Validação de Formato**: Garante exatamente dois números separados por vírgula
3. **Validação Numérica**: Confirma que os valores são números válidos
4. **Validação de Intervalo**: Assegura que os números estão entre 1 e 1000

### Processamento de Resultado

O resultado é construído dinamicamente com:
- **Cálculos detalhados passo a passo**
- **Formatação visual com classes CSS específicas**
- **Animações CSS aplicadas via JavaScript**
- **Scroll automático para melhor UX**

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/luizfxdev/desafio_334.git
cd desafio_334
```

2. Crie a pasta `assets` e adicione:
   - `background.mp4` (vídeo de fundo)
   - `theme.mp3` (Moonlight Densetsu)

3. Abra o arquivo `index.html` em seu navegador

## 📊 Exemplos de Uso

### Entrada: `7, 3`
**Saída:**
- Soma Rádio Lunar: **10**
- Subtração do Eclipse: **2**
- Multiplicação Estelar: **21**
- Divisão Estelar: **2**
- Número Mágico de Prata: **10**

### Entrada: `12, 8`
**Saída:**
- Soma Rádio Lunar: **20**
- Subtração do Eclipse: **2**
- Multiplicação Estelar: **96**
- Divisão Estelar: **2**
- Número Mágico de Prata: **80**

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Animações e design responsivo
- **JavaScript (ES6+)**: Lógica de negócio
- **Google Fonts**: Press Start 2P (fonte pixelada)

## 📱 Responsividade

O projeto é totalmente responsivo, adaptando-se a:
- 💻 Desktop (1920px+)
- 💻 Laptop (1366px - 1920px)
- 📱 Tablet (768px - 1366px)
- 📱 Mobile (320px - 768px)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Enviar pull requests

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- Linkedin: [in/luizfxdev](https://www.linkedin.com/in/luizfxdev)
- Portfólio: [luizfxdev.com.br](https://luizfxdev.com.br)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

🌙 *"Pelo poder da Programação Estelar!"* - Sailor Moon 
