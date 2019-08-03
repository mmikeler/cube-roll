function cubeRoll(){
    var cube_count = $('#cube_count').val();
    var max = $('#cube_max').val();
    // check style
    var cube_style;
    if(max < 10){
        cube_style = $('#cube_style').val()}
    else{
        $('#cube_style').val('1').attr('disabled', 'disabled')
    } 
    $('.cube-result__item').remove();

    for(var i = 1; i < +cube_count + 1; i++){
        $('#cube_result').append('<div class="cube-result__item">'+ randomInteger(1, max) +'</div>')
    }
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = +min + Math.random() * (+max + 1 - min);
    return Math.floor(rand);
}