<h1 align="center">Telefones de Emergência Brasil
</h1>
Uma página web simples, rápida e sem distrações para encontrar o número certo de telefone na hora que mais importa.

## O problema a ser resolvido

No Brasil, os serviços de emergência são fragmentados: Polícia Militar (190), SAMU (192), Corpo de Bombeiros (193), Polícia Federal, Defesa Civil, concessionárias de água, luz e gás — cada um com seu próprio número, sem um padrão único como o 911 nos EUA ou o 112 na União Europeia.

Essa fragmentação tem um custo real. Um estudo publicado em 2024 na *Revista Contexto & Saúde* (Editora Unijuí), conduzido por pesquisadores da UNIRIO, avaliou o reconhecimento dos números 190, 192 e 193 pela população brasileira e mostrou que uma parcela significativa das pessoas não sabe diferenciar corretamente as atribuições de cada serviço — mesmo entre os números mais divulgados.

Na prática, isso se traduz em:

- Ligações para o número errado, que precisam ser transferidas, atrasando o despacho da equipe correta;
- Confusão em situações de altíssimo estresse, quando a capacidade de raciocínio já está reduzida;
- Perda de minutos que, em emergências médicas e de resgate, são chamados de "Hora de Ouro" — o intervalo em que o atendimento rápido faz a maior diferença nas chances de sobrevivência;
- Pessoas recorrendo por reflexo ao 911 (padrão americano difundido pela mídia), que não funciona da mesma forma aqui.

## Objetivo do projeto

Este projeto nasceu para ser um atalho contra essa confusão: uma central única, rápida e sem ruído, onde qualquer pessoa consegue encontrar, em segundos, o número certo para a situação certa, com uma busca que entende a linguagem do dia a dia ("água", "incêndio", "violência") e não exige que o usuário já saiba o número de cor.

Não é um substituto para educação em saúde pública ou para uma eventual padronização nacional de número único. Se trata de uma ferramenta de apoio, pensada para reduzir o atrito entre "algo está errado" e "a ajuda certa está a caminho".

## Funcionalidades

- **+60 números úteis**: dos clássicos (190, 192, 193) a linhas de apoio (CVV, Disque 100, Disque Idoso) e serviços de utilidade pública (energia, água, gás, telecomunicações);
- **Busca inteligente**: filtro por número, categoria ou palavra-chave associada à situação (ex.: buscar "incêndio" retorna o Corpo de Bombeiros, mesmo sem digitar "193" ou "bombeiro");
- **Ligação direta em 1 toque**: em dispositivos móveis, cada card abre automaticamente o discador do celular já com o número preenchido. Em desktop, essa opção some — como computadores não fazem ligações telefônicas, o botão de discagem simplesmente não é exibido, mantendo a interface limpa e sem elementos inúteis;
- **Sem anúncios e sem coleta de dados**: nenhum rastreador, nenhum formulário, nenhuma venda de dado — só a informação, rápido;
- **Performance como prioridade**: carregamento leve, pensado para funcionar bem mesmo em conexões ruins, já que emergências não escolhem hora nem lugar.

## Tecnologias utilizadas

| Tecnologia | Papel no projeto |
|---|---|
| **HTML** | Estrutura semântica da página e dos cards de contato |
| **CSS** | Estilização, responsividade (mobile-first) e comportamento condicional de exibição (ex.: ocultar o botão de ligação em telas sem suporte a `tel:`) |
| **JavaScript** | Lógica de busca/filtro em tempo real, detecção de dispositivo móvel e renderização dinâmica dos cards a partir dos dados |
| **JSON** | Base de dados estática com todos os números, descrições, palavras-chave e links — sem necessidade de backend ou banco de dados |

A escolha por uma stack 100% front-end (sem back-end, sem banco de dados) foi intencional: reduz a superfície de falha, elimina custo de servidor e mantém o carregamento extremamente rápido — características importantes justamente porque a ferramenta é pensada para o pior momento possível de quem a acessa.

## 🤝 Contribuindo

Encontrou um número desatualizado, uma concessionária que mudou de nome, ou tem uma sugestão de UX/UI? Toda contribuição é bem-vinda — abra uma *issue* ou um *pull request*.

---

*Este projeto é uma iniciativa de utilidade pública, sem fins comerciais.*

**Fonte da pesquisa citada:** Luna, A. A., Bica, R. B., & dos Santos, C. H. A. (2024). Reconhecimento dos Números de Emergência (190, 192 e 193) pela População Brasileira. 
<a href="https://doi.org/10.21527/2176-7114.2024.48.14835" target="_blank">Revista Contexto & Saúde</a>
