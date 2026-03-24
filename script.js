let planoContas = [
    // --- ATIVO CIRCULANTE ---
    { nome: "CAIXA", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "BANCOS CONTA MOVIMENTO", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "APLICAÇÕES FINANCEIRAS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "CLIENTES / DUPLICATAS A RECEBER", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "(-) PCLD / PDD", grupo: "Ativo Circulante", natureza: "Credora" },
    { nome: "ESTOQUE DE MERCADORIAS", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "IFDRE - VJ (NEGOCIAÇÃO)", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "IFPL - VJRA (VENDA)", grupo: "Ativo Circulante", natureza: "Devedora" },
    { nome: "MTV - CUSTO AMORTIZADO", grupo: "Ativo Circulante", natureza: "Devedora" },

    // --- ATIVO NÃO CIRCULANTE ---
    { nome: "REALIZÁVEL A LONGO PRAZO", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "INVESTIMENTOS: COLIGADAS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "INVESTIMENTOS: CONTROLADAS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "PROPRIEDADES PARA INVESTIMENTO", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "IMOBILIZADO: VEÍCULOS", grupo: "Ativo Não Circulante", natureza: "Devedora" },
    { nome: "(-) DEPRECIAÇÃO ACUMULADA", grupo: "Ativo Não Circulante", natureza: "Credora" },
    { nome: "INTANGÍVEL", grupo: "Ativo Não Circulante", natureza: "Devedora" },

    // --- PASSIVO CIRCULANTE ---
    { nome: "FORNECEDORES", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "EMPRÉSTIMOS E FINANCIAMENTOS (CP)", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "ARRENDAMENTO MERCANTIL (CP)", grupo: "Passivo Circulante", natureza: "Credora" },
    { nome: "(-) JUROS A TRANSCORRER (CP)", grupo: "Passivo Circulante", natureza: "Devedora" },
    { nome: "DIVIDENDOS A PAGAR", grupo: "Passivo Circulante", natureza: "Credora" },

    // --- PASSIVO NÃO CIRCULANTE ---
    { nome: "EMPRÉSTIMOS E FINANCIAMENTOS (LP)", grupo: "Passivo Não Circulante", natureza: "Credora" },
    { nome: "ARRENDAMENTO MERCANTIL (LP)", grupo: "Passivo Não Circulante", natureza: "Credora" },
    { nome: "(-) JUROS A TRANSCORRER (LP)", grupo: "Passivo Não Circulante", natureza: "Devedora" },

    // --- PATRIMÔNIO LÍQUIDO ---
    { nome: "CAPITAL SOCIAL SUBSCRITO", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "(-) CAPITAL A INTEGRALIZAR", grupo: "Patrimônio Líquido", natureza: "Devedora" },
    { nome: "RESERVA LEGAL", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "RESERVA ESTATUTÁRIA", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "RESERVA DE CONTINGÊNCIAS", grupo: "Patrimônio Líquido", natureza: "Credora" },
    { nome: "AJUSTE DE AVALIAÇÃO PATRIMONIAL (AAP)", grupo: "Patrimônio Líquido", natureza: "Ambas" },
    { nome: "PREJUÍZOS ACUMULADOS", grupo: "Patrimônio Líquido", natureza: "Devedora" },

    // --- RESULTADO ---
    { nome: "RECEITA DE VENDAS", grupo: "Receita", natureza: "Credora" },
    { nome: "RECEITA DE JUROS ATIVOS", grupo: "Receita", natureza: "Credora" },
    { nome: "RECEITA DE REVERSÃO DE PDD", grupo: "Receita", natureza: "Credora" },
    { nome: "CMV", grupo: "Despesa", natureza: "Devedora" },
    { nome: "DESPESA COM PDD / PCLD", grupo: "Despesa", natureza: "Devedora" },
    { nome: "PERDA POR IMPAIRMENT", grupo: "Despesa", natureza: "Devedora" }
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