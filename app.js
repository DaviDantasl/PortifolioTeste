"use strict";
//busca elementos necessarios para o botão de dark mode
const btn_trevoso = document.querySelector("#btn-trevoso");
const spans = btn_trevoso.querySelectorAll('span'); //icones do botao darkmode em forma de lista
const trevoso = document.querySelector('body');
const trevosinhos = document.querySelector('#meupeixe')?.querySelectorAll('section');
//busca formulario de habilidade e projetos
const form = document.querySelector('#projetosEhabilidades');
//busca elementos do formulario de adicionar habilidade ou projeto
const tipo = document.querySelector('#tipo'); //tipo de dado q vai ser inserido
const title = document.querySelector('#nome');
const skill = document.querySelector('#form_habilidade'); //form exclusivo da habilidade
const projeto = document.querySelector('#form_projetos'); //form exclusivo de projetos
//dados do formulario habilidade
const skillLV = document.querySelector('#nivelHabilidade');
//dados do formulario de projetos
const projeto_descricao = document.querySelector('#descricao');
const concluido = document.querySelector('#concluido');
const add = document.querySelector('#btn_add'); //busca botao adicionar tarefa ou projeto
//buscar elementos conteiner projeto e habilidades
const habilidades = document.querySelector('#habilidades')?.querySelector('ul');
const projetos = document.querySelector('#projects');
btn_trevoso?.addEventListener('click', () => {
    trevoso.classList.toggle('trevoso');
    spans.forEach((span) => {
        span.classList.toggle('selecionado');
    });
    trevosinhos.forEach((section) => {
        section.classList.toggle('trevoso');
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
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (tipo.value === 'habilidade') {
        const newSkill = document.createElement('li');
        const progresso = document.createElement('progress');
        progresso.max = 100;
        progresso.value = Number(skillLV.value);
        newSkill.append(title.value, progresso);
        habilidades.append(newSkill);
    }
    else if (tipo.value === 'projeto') {
        const newprojeto = document.querySelector('#descricao');
        const terminado = document.querySelector('#concluido');
        const finaltitle = title.value + (terminado.checked ? ' ✅ -' : ' ❌ -');
        const nome_projeto = document.createElement('h4');
        nome_projeto.textContent = finaltitle;
        const desc = document.createElement('span');
        desc.textContent = newprojeto.value;
        projetos.append(nome_projeto, desc);
    }
    form.reset(); // limpa os campos
    skill.hidden = true; // esconde os grupos extras de novo
    projeto.hidden = true;
});
//# sourceMappingURL=app.js.map