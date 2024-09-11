console.log('Pierre Feuille Ciseaux');

//fonctions
const chooseStone = () => {




    $('#pierre')
        .on('click', function () {

            $('#userChoice').html('<h3>User choice : </h3><br><img id="pierreBis" src="img/pierre2.png" alt="pierre" class="rounded mx-auto d-block" width="200px">');


            $('<img>')
                .attr('src', getImgOfComputerChoice() )
                .css({
                    'width': '300px',
                    'height': '300px'
                }).appendTo( $('#computerChoice') )


            // //enlever la balise src et
            // $('#computerChoice').html('<h3>Computer choice : </h3>')
            //
            // <br><img id="pierreBis" src=getImgOfComputerChoice() alt="pierre" class="rounded mx-auto d-block" width="200px">');
            //

            //
            // $('<h3></h3>').text('Computer choice :')
            //     .appendTo( $('#computerChoice') );

        });
}

const getImgOfComputerChoice = () => {
    let randomChoice =  Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return 'img/pierre2.png';
        case 1:
            return 'img/feuille2.png'
        case 2:
            return 'img/ciseaux.png'
    }

}










// appel des fonctions
chooseStone();
