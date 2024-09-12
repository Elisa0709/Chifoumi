console.log('Pierre Feuille Ciseaux');

//fonctions
const chooseStone = () => {
    let computerChoice = getComputerChoice();
    let result = getResult('Pierre', computerChoice[0]);
    $('#pierre')
        .on('click', function () {
            //user div
            $('#userChoice h3').text('Utilisateur : ');
            $('#userChoice p').text('Pierre');
            $('#userChoice img')
                .attr('src','img/pierre.png')
                .addClass('rounded mx-auto d-block')
                .attr('width', '200px')
                .appendTo( $('#userChoice') )
            //computerDiv
            $('#computerChoice h3').text('Ordinateur : ');
            $('#computerChoice p').text(computerChoice[0]);
            $('#computerChoice img')
                .attr('src',computerChoice[1])
                .addClass('rounded mx-auto d-block')
                .attr('width', '200px')
                .appendTo( $('#computerChoice') )

            //résultat
            $('#firstImg').attr('src',result[1]);
            $('#resultDiv h2').text(result[0]);

        });
}
const choosePaper = () => {
    let computerChoice = getComputerChoice();
    let result = getResult('Feuille', computerChoice[0]);
    $('#feuille').on('click', function () {
            //user div
            $('#userChoice h3').text('Utilisateur : ');
            $('#userChoice p').text('Feuille');
            $('#userChoice img')
                .attr('src','img/feuille.png')
                .addClass('rounded mx-auto d-block')
                .attr('width', '200px')
                .appendTo( $('#userChoice') )
            //computerDiv
            $('#computerChoice h3').text('Ordinateur : ');
            $('#computerChoice p').text(computerChoice[0]);
            $('#computerChoice img')
                .attr('src',computerChoice[1])
                .addClass('rounded mx-auto d-block')
                .attr('width', '200px')
                .appendTo( $('#computerChoice') )

            //résultat
            $('#firstImg').attr('src',result[1]);
            $('#resultDiv h2').text(result[0]);

        });
}
const chooseCissors = () => {
    let computerChoice = getComputerChoice();
    let result = getResult('Ciseaux', computerChoice[0]);
    $('#ciseaux').on('click', function () {
        //user div
        $('#userChoice h3').text('Utilisateur : ');
        $('#userChoice p').text('Ciseaux');
        $('#userChoice img')
            .attr('src','img/ciseaux.png')
            .addClass('rounded mx-auto d-block')
            .attr('width', '200px')
            .appendTo( $('#userChoice') )
        //computerDiv
        $('#computerChoice h3').text('Ordinateur : ');
        $('#computerChoice p').text(computerChoice[0]);
        $('#computerChoice img')
            .attr('src',computerChoice[1])
            .addClass('rounded mx-auto d-block')
            .attr('width', '200px')
            .appendTo( $('#computerChoice') )

        //résultat
        $('#firstImg').attr('src',result[1]);
        $('#resultDiv h2').text(result[0]);

    });
}
const getComputerChoice = () => {
    let randomChoice =  Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return ['Pierre', 'img/pierre.png']
        case 1:
            return ['Feuille', 'img/feuille.png']
        case 2:
            return ['Ciseaux', 'img/ciseaux.png']
    }
}
const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return ['Égalité', 'img/egalite.png'];
    }
    if (userChoice === 'Pierre' && computerChoice === 'Feuille') {
        return ['Perdu', 'img/triste.png'];
    }
    if (userChoice === 'Pierre' && computerChoice === 'Ciseaux') {
        return ['Gagné', 'img/heureux.png'];
    }
    if (userChoice === 'Feuille' && computerChoice === 'Ciseaux') {
        return ['Perdu', 'img/triste.png'];
    }
    if (userChoice === 'Feuille' && computerChoice === 'Pierre') {
        return ['Gagné', 'img/heureux.png'];
    }
    if(userChoice === 'Ciseaux' && computerChoice === 'Pierre') {
        return ['Perdu', 'img/triste.png'];
    }
    if (userChoice === 'Ciseaux' && computerChoice === 'Feuille') {
        return ['Gagné', 'img/heureux.png'];
    }
}
const reload = () =>window.location.reload();

// appel des fonctions
chooseStone();
choosePaper();
chooseCissors();
