let audios = [
    {path: 'sounds/projeto_ratinho_audios_grito.mp3', subtitle: 'GRITO'},
    {path: 'sounds/projeto_ratinho_audios_jesus.mp3', subtitle: 'JESUS'},
    {path: 'sounds/projeto_ratinho_audios_nao-e-o-pai.mp3', subtitle: 'ELE NÃO É O PAI'},
    {path: 'sounds/projeto_ratinho_audios_pare.mp3', subtitle: 'PARE!'},
    {path: 'sounds/projeto_ratinho_audios_que-isso-meu-filho.mp3', subtitle: 'QUE É ISSO MEU FILHO, CALMA!'},
    {path: 'sounds/projeto_ratinho_audios_ratinhoo.mp3', subtitle: 'RATINHOOO'},
    {path: 'sounds/projeto_ratinho_audios_uepa.mp3', subtitle: 'UEPAAA'},
    {path: 'sounds/projeto_ratinho_audios_vixi-ratinho.mp3', subtitle: 'VIXI'},
    {path: 'sounds/projeto_ratinho_audios_xaropinho.mp3', subtitle: 'RAPAZ'}
];

let buttons = document.querySelectorAll('.button');
let subtitles = document.querySelectorAll('p');

for (let i = 0; i < 9; i++) {
    subtitles[i].textContent = audios[i].subtitle;
    buttons[i].setAttribute('data-item', i);
};

let audioTag = document.querySelector('audio');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let sound = audios[button.getAttribute('data-item')];
        audioTag.setAttribute('src', sound.path);
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play(); 
        });
    });
});