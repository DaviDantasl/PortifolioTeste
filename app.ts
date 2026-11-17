//busca elementos necessarios para o botão de dark mode
const btn_trevoso = document.querySelector("#btn-trevoso") as HTMLButtonElement;
const spans = btn_trevoso.querySelectorAll('span') as NodeListOf<HTMLSpanElement>;//icones do botao darkmode em forma de lista
const trevoso = document.querySelector('body') as HTMLElement;
const trevosinhos = document.querySelector('#meupeixe')?.querySelectorAll('section') as NodeListOf<HTMLElement>;

//busca formulario de habilidade e projetos
const form = document.querySelector('#projetosEhabilidades') as HTMLFormElement;

//busca elementos do formulario de adicionar habilidade ou projeto
const tipo = document.querySelector('#tipo') as HTMLInputElement;//tipo de dado q vai ser inserido
const title = document.querySelector('#nome') as HTMLInputElement;
const skill = document.querySelector('#form_habilidade') as HTMLDivElement;//form exclusivo da habilidade
const projeto = document.querySelector('#form_projetos') as HTMLDivElement//form exclusivo de projetos

//dados do formulario habilidade
const skillLV = document.querySelector('#nivelHabilidade') as HTMLInputElement;

//dados do formulario de projetos
const projeto_descricao = document.querySelector('#descricao') as HTMLTextAreaElement;
const concluido = document.querySelector('#concluido');

const add = document.querySelector('#btn_add');//busca botao adicionar tarefa ou projeto

//buscar elementos conteiner projeto e habilidades
const habilidades = document.querySelector('#habilidades')?.querySelector('ul') as HTMLElement;
const projetos = document.querySelector('#projects') as HTMLDivElement
    ;


btn_trevoso?.addEventListener('click', () => {
    trevoso.classList.toggle('trevoso');
    spans.forEach((span) => {
        span.classList.toggle('selecionado')
    })
    trevosinhos.forEach((section) => {
        section.classList.toggle('trevoso')
    });
});

tipo?.addEventListener('change', () => {
    if (String(tipo.value) == 'habilidade') {
        skill.hidden = false;
        projeto.hidden = true;
    } else {
        skill.hidden = true;
        projeto.hidden = false;

    }
})

form.addEventListener('submit', (event) => {   // MUDOU: submit do form, em vez de click do botão
    event.preventDefault();

    if (tipo.value === 'habilidade') {
        const newSkill = document.createElement('li');
        const progresso = document.createElement('progress');
        progresso.max = 100;
        progresso.value = Number(skillLV.value);
        newSkill.append(title.value, progresso);
        habilidades.append(newSkill);
    } else if (tipo.value === 'projeto') {
        const newprojeto = document.querySelector('#descricao') as HTMLTextAreaElement;
        const terminado = document.querySelector('#concluido') as HTMLInputElement;

        const finaltitle = title.value + (terminado.checked ? ' ✅ -' : ' ❌ -');

        const nome_projeto = document.createElement('h4');
        nome_projeto.textContent = finaltitle;

        const desc = document.createElement('span');
        desc.textContent = newprojeto.value;

        projetos.append(nome_projeto, desc);
    }

    form.reset();          // limpa os campos
    skill.hidden = true;   // esconde os grupos extras de novo
    projeto.hidden = true;
});

