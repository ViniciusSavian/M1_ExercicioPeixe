var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene:{
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'Assets/bg_azul-escuro.png');
    this.load.image('inteli','Assets/logo-inteli_branco.png');
    this.load.image('submarino','Assets/submarino.png');
    this.load.image('peixe','Assets/peixes/baiacu.png');
}

function create() {
    this.add.image(400,300,'mar');
    this.add.image(400,525,'inteli').setScale(0.5);
    this.add.image(300,400,'submarino');

    //guardar o peixe em uma variável
    peixinho = this.add.image(400,300,'peixe');
    
    //transformando a variável
    peixinho.setFlip(true, false);

}

function update() {
    //adicionando controles no peixe
    peixinho.x=this.input.x;
    peixinho.y=this.input.y;
}