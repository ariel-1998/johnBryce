$(`#click1`).on(`click`, () => {
    const inpVal = $(`#input1`).val()
    $(`#transfer1`).text(inpVal);
    $(`#input1`).remove();
});

$(`#click2`).on(`click`, () => {
    const inpVal = $(`#input2`).val()
    $(`#transfer2`).text(inpVal);
    $(`#input2`).remove();
})

$(`#click3`).on(`click`, () => {
    const min = $(`#min`).val();
    const max = $(`#max`).val();

    for(let i = min; i <= max; i++) {
        $(`<option></option>`).text(i).appendTo(`#select`)
    }

})

$(`#random`).on(`click`, () => {
    $(`.rndm`).each( function () {
        let red = Number.parseInt(Math.random() * 255)
        let green = Number.parseInt(Math.random() * 255)
        let blue = Number.parseInt(Math.random() * 255)

        let random = Number.parseInt(Math.random() * 101)
        $(this).text(random)
        $(this).css(`background-color`, `rgb(${red}, ${green}, ${blue})`)
    })
})

$(`.btn-red`).on(`click`, () => {
    if($(`.btn-red`).text() === `fade out red squares`){
        $(`.red`).fadeOut(2000)
        $(`.btn-red`).text(`fade in red squares`)
    }else{
        $(`.red`).fadeIn(2000)
        $(`.btn-red`).text(`fade out red squares`)
    }
});

$(`.btn-blue`).on(`click`, () => {
    if($(`.btn-blue`).text() === `fade out blue squares`){
        $(`.blue`).fadeOut(2000)
        $(`.btn-blue`).text(`fade in blue squares`)
    }else{
        $(`.blue`).fadeIn(2000)
        $(`.btn-blue`).text(`fade out blue squares`)
    }
    })



