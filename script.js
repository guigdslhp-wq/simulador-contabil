let planoContas = [
    // --- I. ATIVO CIRCULANTE ---
    { nome: "CAIXA", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "DEPÓSITOS BANCÁRIOS À VISTA", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "NUMERÁRIO EM TRÂNSITO", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "APLICAÇÕES DE LIQUIDEZ IMEDIATA", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "DUPLICATAS A RECEBER (CLIENTES)", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "CLIENTES - CONTROLADAS E COLIGADAS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "(-) PCLD (PERDAS ESTIMADAS EM CRÉDITOS)", grupo: "Ativo Circulante", natureza: "Credora" },
    { nome: "(-) AVP - CLIENTES (AJUSTE VALOR PRESENTE)", grupo: "Ativo Circulante", natureza: "Credora" },
    { nome: "(-) FATURAMENTO PARA ENTREGA FUTURA", grupo: "Ativo Circulante", natureza: "Credora" },
    { nome: "SAQUES DE EXPORTAÇÃO", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "TÍTULOS A RECEBER / RENEGOCIAÇÕES", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "DEVEDORES MOBILIÁRIOS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "EMPRÉSTIMOS A RECEBER DE TERCEIROS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "(-) RECEITAS FINANCEIRAS A TRANSCORRER", grupo: "Ativo Circulante", natureza: "Credora" },
    { nome: "CHEQUES EM COBRANÇA", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "DIVIDENDOS PROPOSTOS A RECEBER", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "BANCOS CONTAS VINCULADAS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "JUROS A RECEBER", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ADIANTAMENTOS A TERCEIROS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ADIANTAMENTOS PARA VIAGENS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ADIANTAMENTOS PARA DESPESAS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ANTECIPAÇÃO DE SALÁRIOS E ORDENADOS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "EMPRÉSTIMOS A FUNCIONÁRIOS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ANTECIPAÇÃO DE 13º SALÁRIO", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ANTECIPAÇÃO DE FÉRIAS", grupo: "Ativo Circulante", natureza: "Devedora" },
    
    // TRIBUTOS A COMPENSAR (SEPARADOS)
    { nome: "IPI A COMPENSAR", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ICMS A COMPENSAR", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "IRRF A COMPENSAR", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "IR E CSLL A RESTITUIR / COMPENSAR", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "PIS/PASEP A RECUPERAR", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "COFINS A RECUPERAR", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ISS A RECUPERAR", grupo: "Ativo Circulante", natureza: "Devedora" },
    
    // ESTOQUES DETALHADOS
    { nome: "ESTOQUE DE MERCADORIAS PARA REVENDA", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ESTOQUE DE PRODUTOS ACABADOS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ESTOQUE DE PRODUTOS EM ELABORAÇÃO", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ESTOQUE DE MATÉRIAS-PRIMAS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ESTOQUE DE MATERIAIS AUXILIARES", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ESTOQUE DE MATERIAIS DE EMBALAGEM", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ESTOQUE DE ALMOXARIFADO / CONSUMO", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "IMPORTAÇÕES EM ANDAMENTO", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ADIANTAMENTOS A FORNECEDORES DE ESTOQUE", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "(-) PROVISÃO PARA AJUSTE AO VALOR DE MERCADO", grupo: "Ativo Circulante", natureza: "Credora" },
    { nome: "PRÊMIOS DE SEGUROS A APROPRIAR", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "ENCARGOS FINANCEIROS A APROPRIAR", grupo: "Ativo Circulante", natureza: "Devedora" },

    // --- II. ATIVO NÃO CIRCULANTE ---
    { nome: "REALIZÁVEL A LONGO PRAZO (RLP)", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "PARTICIPAÇÕES EM CONTROLADAS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "PARTICIPAÇÕES EM COLIGADAS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "INVESTIMENTOS EM INCENTIVOS FISCAIS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "PROPRIEDADES PARA INVESTIMENTO", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "OBRAS DE ARTE E OUTROS INVESTIMENTOS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "(-) PERDA POR IMPAIRMENT - INVESTIMENTOS", grupo: "Ativo Não Circulante", natureza: "Credora" },
    
    // IMOBILIZADO DETALHADO
    { nome: "IMOBILIZADO: TERRENOS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: EDIFICAÇÕES", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: MÁQUINAS E EQUIPAMENTOS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: VEÍCULOS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: MÓVEIS E UTENSÍLIOS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: COMPUTADORES E PERIFÉRICOS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: FERRAMENTAS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: BENFEITORIAS EM PROPRIEDADES DE TERCEIROS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: DIREITO DE USO (ARRENDAMENTO)", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO EM CURSO", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "ADIANTAMENTOS PARA IMOBILIZADO", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "(-) DEPRECIAÇÃO ACUMULADA", grupo: "Ativo Não Circulante", natureza: "Credora" },
    { nome: "(-) PERDA POR IMPAIRMENT - IMOBILIZADO", grupo: "Ativo Não Circulante", natureza: "Credora" },
    
    // INTANGÍVEL
    { nome: "INTANGÍVEL: MARCAS E PATENTES", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "INTANGÍVEL: SOFTWARES E SISTEMAS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "INTANGÍVEL: GOODWILL (ÁGIO POR RENTABILIDADE)", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "INTANGÍVEL: DIREITOS DE EXPLORAÇÃO E CONCESSÃO", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "(-) AMORTIZAÇÃO ACUMULADA", grupo: "Ativo Não Circulante", natureza: "Credora" },

    // --- III. PASSIVO CIRCULANTE ---
    { nome: "FORNECEDORES NACIONAIS", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "FORNECEDORES ESTRANGEIROS", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "(-) AVP - FORNECEDORES (PASSIVO)", grupo: "Passivo Circulante", natureza: "Devedora" },
    { nome: "EMPRÉSTIMOS BANCÁRIOS (CP)", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "FINANCIAMENTOS (CP)", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "FINANCIAMENTO POR ARRENDAMENTO (CP)", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "(-) ENCARGOS FINANCEIROS A TRANSCORRER (CP)", grupo: "Passivo Circulante", natureza: "Devedora" },
    { nome: "DEBÊNTURES E OUTROS TÍTULOS (CP)", grupo: "Passivo Circulante", natureza: "Credora" },
    
    // TRABALHISTA E PREVIDENCIÁRIO
    { nome: "SALÁRIOS A PAGAR", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "PROVISÃO PARA FÉRIAS", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "PROVISÃO PARA 13º SALÁRIO", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "INSS A RECOLHER", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "FGTS A RECOLHER", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "CONTRIBUIÇÕES SINDICAIS A RECOLHER", grupo: "Passivo Circulante", natureza: "Credora" },
    
    // FISCAL (SEPARADO)
    { nome: "ICMS A RECOLHER", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "IPI A RECOLHER", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "ISS A RECOLHER", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "PIS A RECOLHER", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "COFINS A RECOLHER", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "IRPJ A PAGAR", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "CSLL A PAGAR", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "IRRF A RECOLHER (FOLHA/TERCEIROS)", grupo: "Passivo Circulante", natureza: "Credora" },
    
    { nome: "DIVIDENDOS E JSCP A PAGAR", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "ADIANTAMENTOS DE CLIENTES", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "RECEITAS DIFERIDAS / ANTECIPADAS", grupo: "Passivo Circulante", natureza: "Credora" },

    // --- IV. PASSIVO NÃO CIRCULANTE ---
    { nome: "EMPRÉSTIMOS E FINANCIAMENTOS (LP)", grupo: "Passivo Não Circulante", natureza: "Credora" },
    { nome: "FINANCIAMENTO POR ARRENDAMENTO (LP)", grupo: "Passivo Não Circulante", natureza: "Credora" },
    { nome: "(-) ENCARGOS FINANCEIROS A TRANSCORRER (LP)", grupo: "Passivo Não Circulante", natureza: "Devedora" },
    { nome: "PROVISÕES PARA RISCOS FISCAIS", grupo: "Passivo Não Circulante", natureza: "Credora" },
    { nome: "PROVISÕES PARA RISCOS TRABALHISTAS", grupo: "Passivo Não Circulante", natureza: "Credora" },
    { nome: "PROVISÕES PARA RISCOS CÍVEIS", grupo: "Passivo Não Circulante", natureza: "Credora" },
    { nome: "IMPOSTOS DIFERIDOS (LP)", grupo: "Passivo Não Circulante", natureza: "Credora" },

    // --- V. PATRIMÔNIO LÍQUIDO ---
    { nome: "CAPITAL SUBSCRITO", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "(-) CAPITAL A INTEGRALIZAR", grupo: "Patrimônio Líquido", natureza: "Devedora" },
    { nome: "(-) GASTOS COM EMISSÃO DE AÇÕES", grupo: "Patrimônio Líquido", natureza: "Devedora" },
    { nome: "ÁGIO NA EMISSÃO DE AÇÕES", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "RESERVA LEGAL", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "RESERVAS ESTATUTÁRIAS", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "RESERVA PARA CONTINGÊNCIAS", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "RESERVA DE INCENTIVOS FISCAIS", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "RESERVA DE LUCROS A REALIZAR", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "AJUSTES DE AVALIAÇÃO PATRIMONIAL (AAP)", grupo: "Patrimônio Líquido", natureza: "Ambas" },
    { nome: "(-) AÇÕES EM TESOURARIA", grupo: "Patrimônio Líquido", natureza: "Devedora" },
    { nome: "LUCROS ACUMULADOS", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "(-) PREJUÍZOS ACUMULADOS", grupo: "Patrimônio Líquido", natureza: "Devedora" },

    // --- VI. RESULTADO: RECEITAS ---
    { nome: "VENDAS DE MERCADORIAS / PRODUTOS", grupo: "Receita", natureza: "Credora" },
    { nome: "RECEITA DE SERVIÇOS PRESTADOS", grupo: "Receita", natureza: "Credora" },
    { nome: "(-) ICMS SOBRE VENDAS", grupo: "Receita", natureza: "Devedora" },
    { nome: "(-) IPI SOBRE VENDAS", grupo: "Receita", natureza: "Devedora" },
    { nome: "(-) PIS SOBRE VENDAS", grupo: "Receita", natureza: "Devedora" },
    { nome: "(-) COFINS SOBRE VENDAS", grupo: "Receita", natureza: "Devedora" },
    { nome: "(-) ISS SOBRE VENDAS", grupo: "Receita", natureza: "Devedora" },
    { nome: "(-) VENDAS CANCELADAS E DEVOLUÇÕES", grupo: "Receita", natureza: "Devedora" },
    { nome: "(-) ABATIMENTOS E DESCONTOS CONCEDIDOS", grupo: "Receita", natureza: "Devedora" },
    { nome: "RECEITAS FINANCEIRAS (JUROS/DESCONTOS)", grupo: "Receita", natureza: "Credora" },
    { nome: "VARIAÇÕES MONETÁRIAS E CAMBIAIS ATIVAS", grupo: "Receita", natureza: "Credora" },
    { nome: "RECEITA DE EQUIVALÊNCIA PATRIMONIAL", grupo: "Receita", natureza: "Credora" },
    { nome: "GANHOS NA ALIENAÇÃO DE ATIVOS", grupo: "Receita", natureza: "Credora" },

    // --- VII. RESULTADO: CUSTOS E DESPESAS ---
    { nome: "CUSTO DAS MERCADORIAS VENDIDAS (CMV)", grupo: "Despesa", natureza: "Devedora" },
    { nome: "CUSTO DOS SERVIÇOS PRESTADOS (CSP)", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESAS COM SALÁRIOS E ORDENADOS", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESAS COM ENCARGOS SOCIAIS (INSS/FGTS)", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESAS COM PROVISÕES TRABALHISTAS", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESAS DE ALUGUÉIS E TAXAS", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESAS COM MANUTENÇÃO E REPAROS", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESAS DE PROPAGANDA E PUBLICIDADE", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESAS COM DEPRECIAÇÃO E AMORTIZAÇÃO", grupo: "Despesa", natureza: "Devedora" },
    { nome: "(-) PERDA POR IMPAIRMENT (DESPESA)", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESA COM PCLD (PERDA DE CRÉDITO)", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESAS FINANCEIRAS / JUROS PASSIVOS", grupo: "Despesa", natureza: "Devedora" },
    { nome: "VARIAÇÕES MONETÁRIAS E CAMBIAIS PASSIVAS", grupo: "Despesa", natureza: "Devedora" },
    { nome: "PERDAS NA ALIENAÇÃO / BAIXA DE ATIVOS", grupo: "Despesa", natureza: "Devedora" }
];

let lancamentos = [];

function toggleUnico(id, nome) {
    var secao = document.getElementById(id);
    var btns = document.getElementsByTagName('button');
    var btn;
    for(var i=0; i<btns.length; i++){
        if(btns[i].getAttribute('onclick') == "toggleUnico('" + id + "', '" + nome + "')"){
            btn = btns[i];
            break;
        }
    }
    if (secao.style.display === 'block') {
        secao.style.display = 'none';
        btn.innerText = "Visualizar " + nome;
    } else {
        secao.style.display = 'block';
        btn.innerText = "Ocultar " + nome;
    }
}

function mascaraData(i) {
    var v = i.value.replace(/\D/g, "");
    if (v.length > 2) v = v.substring(0, 2) + "/" + v.substring(2);
    if (v.length > 5) v = v.substring(0, 5) + "/" + v.substring(5, 9);
    i.value = v;
}

function mascaraMoeda(i) {
    var v = i.value.replace(/\D/g, "");
    v = (v / 100).toFixed(2) + "";
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = "R$ " + v;
    validarBalanco();
}

function formatarR$(num) {
    var n = num.toFixed(2).split('.');
    n[0] = n[0].split(/(?=(?:...)*$)/).join('.');
    return "R$ " + n.join(',');
}

function cadastrarConta() {
    var nI = document.getElementById('nomeConta'), gI = document.getElementById('grupoConta'), natI = document.getElementById('naturezaConta');
    var n = nI.value.toUpperCase(), g = gI.value, nat = natI.value;
    if (!n || !g || !nat) { alert("Preencha tudo!"); return; }
    planoContas.push({ nome: n, grupo: g, natureza: nat });
    nI.value = ""; gI.selectedIndex = 0; natI.selectedIndex = 0;
    atualizarInterfacePlano();
}

function atualizarInterfacePlano() {
    var lista = document.getElementById('listaPlanoContas'), dlist = document.getElementById('datalistContas');
    if(!lista || !dlist) return;
    lista.innerHTML = ""; dlist.innerHTML = "";
    var grupos = ["Ativo Circulante", "Ativo Não Circulante", "Passivo Circulante", "Passivo Não Circulante", "Patrimônio Líquido", "Receita", "Despesa"];
    grupos.forEach(function(g) {
        var contas = planoContas.filter(function(c){ return c.grupo === g; });
        if(contas.length > 0) {
            lista.innerHTML += '<div class="faixa-grupo">' + g + '</div>';
            contas.forEach(function(c) {
                var idx = planoContas.indexOf(c);
                lista.innerHTML += '<div class="item-conta"><span><strong>' + c.nome + '</strong> (' + c.natureza + ')</span>' +
                '<div><button class="btn-mover" onclick="mover('+idx+',-1)">▲</button><button class="btn-mover" onclick="mover('+idx+',1)">▼</button><button class="btn-lixeira" onclick="removerConta('+idx+')">🗑️</button></div></div>';
                dlist.innerHTML += '<option value="' + c.nome + '">';
            });
        }
    });
}

function removerConta(idx) { planoContas.splice(idx, 1); atualizarInterfacePlano(); }

function mover(idx, dir) {
    var nova = idx + dir;
    if (nova >= 0 && nova < planoContas.length) {
        var temp = planoContas[idx];
        planoContas[idx] = planoContas[nova];
        planoContas[nova] = temp;
        atualizarInterfacePlano();
    }
}

function adicionarLinha(id) {
    var div = document.createElement('div'); div.className = 'linha-lancamento';
    div.innerHTML = '<input type="text" class="input-clean" list="datalistContas" style="width:180px;"><input type="text" class="input-clean" placeholder="R$ 0,00" onkeyup="mascaraMoeda(this)" style="width:120px;"><button class="btn-lixeira" onclick="this.parentElement.remove();validarBalanco();">🗑️</button>';
    document.getElementById(id).appendChild(div);
}

function validarBalanco() {
    var tD = 0, tC = 0;
    var inputsD = document.querySelectorAll('#contas-debito input[placeholder="R$ 0,00"]');
    var inputsC = document.querySelectorAll('#contas-credito input[placeholder="R$ 0,00"]');
    inputsD.forEach(function(i){ tD += parseFloat(i.value.replace("R$ ","").replace(/\./g,"").replace(",",".")) || 0; });
    inputsC.forEach(function(i){ tC += parseFloat(i.value.replace("R$ ","").replace(/\./g,"").replace(",",".")) || 0; });
    var btn = document.getElementById('btnRegistrar');
    if (tD > 0 && tD.toFixed(2) === tC.toFixed(2)) { btn.disabled = false; btn.style.backgroundColor = "#27ae60"; btn.innerText = "REGISTRAR"; }
    else { btn.disabled = true; btn.style.backgroundColor = "#e74c3c"; btn.innerText = "DIFERENÇA D/C"; }
}

function registrarDiario() {
    var data = document.getElementById('dataLanc').value, idFato = Date.now();
    document.querySelectorAll('#contas-debito .linha-lancamento').forEach(function(l) { 
        var c = l.querySelectorAll('input')[0].value, v = l.querySelectorAll('input')[1].value;
        if(c && v) lancamentos.push({idFato: idFato, data: data, conta: c, tipo: 'D', valor: v, estornado: false});
    });
    document.querySelectorAll('#contas-credito .linha-lancamento').forEach(function(l) { 
        var c = l.querySelectorAll('input')[0].value, v = l.querySelectorAll('input')[1].value;
        if(c && v) lancamentos.push({idFato: idFato, data: data, conta: c, tipo: 'C', valor: v, estornado: false});
    });
    document.getElementById('btnRegistrar').style.display = 'none';
    document.getElementById('btnProximo').style.display = 'block';
    atualizarLivros();
}

function estornar(id) { lancamentos.forEach(function(l){ if(l.idFato === id) l.estornado = true; }); atualizarLivros(); }

function atualizarLivros() {
    var corpoD = document.getElementById('corpoDiario'), corpoB = document.getElementById('corpoBalancete'), quadro = document.getElementById('quadroRazonetes');
    if(!corpoD || !corpoB || !quadro) return;
    corpoD.innerHTML = ""; corpoB.innerHTML = ""; quadro.innerHTML = "";
    var dadosR = {};
    lancamentos.forEach(function(l) {
        corpoD.innerHTML += '<tr class="'+(l.estornado?'estornado':'')+'"><td>'+l.data+'</td><td>'+l.conta+'</td><td>'+l.tipo+'</td><td>'+l.valor+'</td><td><button onclick="estornar('+l.idFato+')">ESTORNO</button></td></tr>';
        if(!l.estornado) {
            if(!dadosR[l.conta]) dadosR[l.conta] = {D: [], C: []};
            dadosR[l.conta][l.tipo].push(parseFloat(l.valor.replace("R$ ","").replace(/\./g,"").replace(",",".")));
        }
    });
    var sDT = 0, sCT = 0;
    for(var c in dadosR) {
        var dArr = dadosR[c].D, cArr = dadosR[c].C, tD = dArr.reduce(function(a,b){return a+b;},0), tC = cArr.reduce(function(a,b){return a+b;},0);
        var cInf = planoContas.find(function(p){return p.nome === c;}) || {natureza: 'Devedora'};
        var isCred = (cInf.natureza === 'Credora' || cInf.natureza === 'Retificadora do Ativo');
        var sFinal = isCred ? (tC - tD) : (tD - tC);
        var debH = dArr.map(function(v){ return '<div>'+v.toFixed(2)+'</div>'; }).join('');
        var creH = cArr.map(function(v){ return '<div>'+v.toFixed(2)+'</div>'; }).join('');
        quadro.innerHTML += '<div class="razonete"><div class="t-head">'+c+'</div><div class="t-corpo"><div class="t-debito">'+debH+'</div><div class="t-credito">'+creH+'</div></div><div class="t-footer">S: '+formatarR$(sFinal)+'</div></div>';
        var valD = (!isCred) ? sFinal : 0; var valC = (isCred) ? sFinal : 0;
        corpoB.innerHTML += '<tr><td>'+c+'</td><td>'+formatarR$(valD)+'</td><td>'+formatarR$(valC)+'</td></tr>';
        sDT += valD; sCT += valC;
    }
    document.getElementById('totalBalancete').innerHTML = '<td style="text-align:right">TOTAIS</td><td>'+formatarR$(sDT)+'</td><td>'+formatarR$(sCT)+'</td>';
}

function prepararNovoFato() { 
    document.getElementById('dataLanc').value = ""; 
    document.getElementById('contas-debito').innerHTML = "<p><strong>DÉBITOS:</strong></p>"; 
    document.getElementById('contas-credito').innerHTML = "<p><strong>CRÉDITOS:</strong></p>";
    document.getElementById('btnProximo').style.display = "none";
    document.getElementById('btnRegistrar').style.display = "block";
    validarBalanco(); 
}

// Inicia o plano de contas na tela assim que o código carrega
atualizarInterfacePlano();