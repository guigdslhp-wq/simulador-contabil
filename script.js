let planoContas = [
    // --- ATIVO CIRCULANTE (C1 / C2) [cite: 218] ---
    { nome: "Caixa", grupo: "Ativo", natureza: "Devedora" },
    { nome: "Bancos Conta Movimento", grupo: "Ativo", natureza: "Devedora" },
    { nome: "Aplicações Financeiras", grupo: "Ativo", natureza: "Devedora" }, [cite: 258]
    { nome: "Clientes / Duplicatas a Receber", grupo: "Ativo", natureza: "Devedora" },
    { nome: "(-) PCLD / PDD", grupo: "Ativo", natureza: "Credora" }, 
    { nome: "Estoque de Mercadorias", grupo: "Ativo", natureza: "Devedora" }, [cite: 22, 269]
    { nome: "Adiantamento a Fornecedores", grupo: "Ativo", natureza: "Devedora" },
    
    // --- INSTRUMENTOS FINANCEIROS (C4 - CPC 48 / CURTO PRAZO) [cite: 31, 293, 296] ---
    { nome: "IFDRE - Destinado à Negociação (VJR)", grupo: "Ativo", natureza: "Devedora" }, [cite: 306]
    { nome: "IFPL - Destinado à Venda (VJRA)", grupo: "Ativo", natureza: "Devedora" }, [cite: 301]
    { nome: "MTV - Mantido até o Vencimento (Custo Amortizado)", grupo: "Ativo", natureza: "Devedora" }, [cite: 308]

    // --- ATIVO NÃO CIRCULANTE (C2 / C3 / C4) [cite: 219] ---
    { nome: "Realizável a Longo Prazo", grupo: "Ativo", natureza: "Devedora" }, [cite: 220]
    { nome: "Investimentos: Coligadas", grupo: "Ativo", natureza: "Devedora" }, [cite: 37, 175]
    { nome: "Investimentos: Controladas", grupo: "Ativo", natureza: "Devedora" }, [cite: 37, 175]
    { nome: "Propriedades para Investimento", grupo: "Ativo", natureza: "Devedora" }, [cite: 248, 251]
    { nome: "Imobilizado: Veículos", grupo: "Ativo", natureza: "Devedora" }, [cite: 16]
    { nome: "Imobilizado: Máquinas e Equipamentos", grupo: "Ativo", natureza: "Devedora" }, [cite: 16]
    { nome: "(-) Depreciação Acumulada", grupo: "Ativo", natureza: "Credora" }, [cite: 10, 226]
    { nome: "Intangível", grupo: "Ativo", natureza: "Devedora" }, [cite: 16, 209]
    { nome: "Despesa Diferida", grupo: "Ativo", natureza: "Devedora" },

    // --- PASSIVO CIRCULANTE (C1 / C2 / C3) [cite: 232] ---
    { nome: "Fornecedores", grupo: "Passivo", natureza: "Credora" }, [cite: 233]
    { nome: "Empréstimos e Financiamentos (CP)", grupo: "Passivo", natureza: "Credora" }, [cite: 234]
    { nome: "Arrendamento Mercantil Financeiro (CP)", grupo: "Passivo", natureza: "Credora" }, [cite: 238]
    { nome: "(-) Juros a Transcorrer (CP)", grupo: "Passivo", natureza: "Devedora" }, [cite: 235]
    { nome: "Salários a Pagar", grupo: "Passivo", natureza: "Credora" },
    { nome: "Impostos a Recolher", grupo: "Passivo", natureza: "Credora" }, [cite: 240]
    { nome: "Dividendos a Pagar", grupo: "Passivo", natureza: "Credora" },

    // --- PASSIVO NÃO CIRCULANTE (C2 / C3 / C4) ---
    { nome: "Empréstimos e Financiamentos (LP)", grupo: "Passivo", natureza: "Credora" }, [cite: 234]
    { nome: "Arrendamento Mercantil Financeiro (LP)", grupo: "Passivo", natureza: "Credora" }, [cite: 238]
    { nome: "(-) Juros a Transcorrer (LP)", grupo: "Passivo", natureza: "Devedora" }, [cite: 235]
    { nome: "Tributos Diferidos", grupo: "Passivo", natureza: "Credora" },

    // --- PATRIMÔNIO LÍQUIDO (C1 / C3 / C4) [cite: 241] ---
    { nome: "Capital Social Subscrito", grupo: "PL", natureza: "Credora" }, [cite: 241, 242]
    { nome: "(-) Capital a Integralizar", grupo: "PL", natureza: "Devedora" }, [cite: 243]
    { nome: "Reserva Legal", grupo: "PL", natureza: "Credora" }, [cite: 244]
    { nome: "Reserva Estatutária", grupo: "PL", natureza: "Credora" }, [cite: 244]
    { nome: "Reserva de Contingências", grupo: "PL", natureza: "Credora" }, [cite: 244]
    { nome: "Reserva de Incentivos Fiscais", grupo: "PL", natureza: "Credora" }, [cite: 244]
    { nome: "Ajuste de Avaliação Patrimonial (AAP)", grupo: "PL", natureza: "Ambas" }, [cite: 305]
    { nome: "Prejuízos Acumulados", grupo: "PL", natureza: "Devedora" }, [cite: 245]

    // --- RESULTADO (DRE) ---
    { nome: "Receita de Vendas", grupo: "Receita", natureza: "Credora" },
    { nome: "Receita de Juros Ativos", grupo: "Receita", natureza: "Credora" }, [cite: 322]
    { nome: "Receita de Reversão de PDD", grupo: "Receita", natureza: "Credora" },
    { nome: "Ganho com Valorização (VJR)", grupo: "Receita", natureza: "Credora" }, [cite: 327]
    { nome: "CMV (Custo da Mercadoria Vendida)", grupo: "Despesa", natureza: "Devedora" },
    { nome: "Despesa com PDD / PCLD", grupo: "Despesa", natureza: "Devedora" },
    { nome: "Despesa de Aluguel", grupo: "Despesa", natureza: "Devedora" },
    { nome: "Perda por Desvalorização (Impairment)", grupo: "Despesa", natureza: "Devedora" } [cite: 54, 309]
];

let lancamentos = [];
// ... resto do seu código
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

// FORMATAÇÃO MANUAL PARA NÃO DAR ERRO NO TABLET
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
    if (tD > 0 && tD.toFixed(2) === tC.toFixed(2)) { btn.disabled = false; btn.style.backgroundColor = "var(--verde-sucesso)"; btn.innerText = "REGISTRAR"; }
    else { btn.disabled = true; btn.style.backgroundColor = "var(--vermelho-erro)"; btn.innerText = "DIFERENÇA D/C"; }
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
        var debH = dArr.map(function(v){ return '<div class="'+(isCred?'valor-subtrai':'valor-soma')+'">'+v.toFixed(2)+'</div>'; }).join('');
        var creH = cArr.map(function(v){ return '<div class="'+(isCred?'valor-soma':'valor-subtrai')+'">'+v.toFixed(2)+'</div>'; }).join('');
        quadro.innerHTML += '<div class="razonete"><div class="t-head">'+c+'</div><div class="t-corpo"><div class="t-debito">'+debH+'</div><div class="t-credito">'+creH+'</div></div><div class="t-footer">S: '+formatarR$(sFinal)+'</div></div>';
        var valD = (!isCred) ? sFinal : 0; var valC = (isCred) ? sFinal : 0;
        corpoB.innerHTML += '<tr><td>'+c+'</td><td>'+formatarR$(valD)+'</td><td>'+formatarR$(valC)+'</td></tr>';
        sDT += valD; sCT += valC;
    }
    document.getElementById('totalBalancete').innerHTML = '<td style="text-align:right">TOTAIS</td><td>'+formatarR$(sDT)+'</td><td>'+formatarR$(sCT)+'</td>';
}

function prepararNovoFato() { 
    document.getElementById('dataLanc').value = ""; document.getElementById('historico').value = "";
    document.getElementById('contas-debito').innerHTML = "<p><strong>DÉBITOS:</strong></p>"; document.getElementById('contas-credito').innerHTML = "<p><strong>CRÉDITOS:</strong></p>";
    document.getElementById('btnProximo').style.display = "none";
    document.getElementById('btnRegistrar').style.display = "block";
    validarBalanco(); 
}