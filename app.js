"use strict";
//busca elementos necessarios para o botão de dark mode
const btn_trevoso = document.querySelector("#btn-trevoso");
const spans = btn_trevoso.querySelectorAll('span'); //icones do botao darkmode em forma de lista
const trevoso = document.querySelector('body');
//busca elementos do formulario de adicionar habilidade ou projeto
const tipo = document.querySelector('#tipo'); //tipo de dado q vai ser inserido
const title = document.querySelector('#nome');
const skill = document.querySelector('#form_habilidade'); //form exclusivo da habilidade
const projeto = document.querySelector('#form_projetos'); //form exclusivo de projetos
//dados do formulario habilidade
const skillLV = document.querySelector('#nivelHabilidade');
//dados do formulario de projetos
const projeto_descricao = document.querySelector('#descricap');
const concluido = document.querySelector('#concluido');
const add = document.querySelector('#btn_add'); //busca botao adicionar tarefa ou projeto
//buscar elementos conteiner projeto e habilidades
const habilidades = document.querySelector('#habilidades')?.querySelector('ul');
const projetos = document.querySelector('#projetos')?.querySelector('section');
btn_trevoso?.addEventListener('click', () => {
    trevoso.classList.toggle('trevoso');
    spans.forEach((span) => {
        span.classList.toggle('selecionado');
    });
});
tipo?.addEventListener('change', () => {
    if (String(tipo.value) == 'habilidade') {
        skill.hidden = false;
        projeto.hidden = true;
    }
    else {
        skill.hidden = true;
        projeto.hidden = false;
    }
});
add?.addEventListener('click', () => {
    //previni refresh na pagina
    event?.preventDefault();
    //verifica qual opção escolhida
    if ((tipo.value == 'habilidade')) {
        //busca elemento exclusivo do forms habilidade
        const newSkill = document.createElement('li');
        const progresso = document.createElement("progress");
        progresso.max = 100;
        progresso.value = Number(skillLV.value);
        newSkill.append(title.value, progresso);
        habilidades.append(newSkill);
    }
    else {
        //busca elemento exclusivo do forms projeto
        const newprojeto = document.querySelector('#descricao');
        const terminado = document.querySelector('#concluido');
        let finaltitle;
        if (terminado.checked) {
            finaltitle = title.value + ' ✅ -';
        }
        else {
            finaltitle = title.value + ' ❌ -';
        }
        const nome_projeto = document.createElement('h4');
        const desc = document.createElement('span');
        desc.textContent = newprojeto.value;
        nome_projeto.textContent = finaltitle;
        projetos.append(nome_projeto, desc);
    }
});
//# sourceMappingURL=app.js.map