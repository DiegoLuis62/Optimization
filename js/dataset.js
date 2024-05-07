function setSelect(num) {
    const btns = [
        document.getElementById('btn_model1'),
        document.getElementById('btn_model2'),
        document.getElementById('btn_comparation')
    ]

    const models = [
        document.getElementById('containerModel1'),
        document.getElementById('containerModel2'),
        document.getElementById('containerComparation')
    ]

    btns.forEach((btn) => btn.classList.remove('select'))
    btns[num].classList.add('select')

    models.forEach((md) => md.classList.remove('select'))
    models[num].classList.add('select')
}