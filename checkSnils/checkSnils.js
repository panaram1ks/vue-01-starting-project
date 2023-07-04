document.addEventListener('DOMContentLoaded', function () {

    let button = document.getElementById('checkSnils');
    button.addEventListener('click', () => {
        confirmSave();
    })
});

confirmSave = function () {
    var msg, id;
    msg = "СНИЛС не соответствует правилам!";
    const fiInput = document.getElementById("personSnilsFirst").value
    console.log(fiInput);
    const seInput = document.getElementById("personSnilsSecond").value
    console.log(seInput);
    const thInput = document.getElementById("personSnilsThird").value
    console.log(thInput);
    const foInput = document.getElementById("personSnilsFourth").value
    console.log(foInput);

    if (fiInput || seInput || thInput || foInput) {
        var first = fiInput;
        if (!first || first.length != 3 || !isNormalInteger(first) || parseInt(first) == 0) {
            id = "personSnilsFirst";
            msg = 'первоя секция СНИЛС должна содержать 3 цифры'
            console.log(1 + id + ' ' + msg);
            return false;
        }
        var second = seInput;
        if (!second || second.length != 3 || !isNormalInteger(second) || parseInt(second) == 0) {
            id = "personSnilsSecond";
            msg = 'вторая секция СНИЛС должна содержать 3 цифры'
            console.log(2 + id + ' ' + msg);
            return false;
        }
        var third = thInput;
        if (!third || third.length != 3 || !isNormalInteger(third) || parseInt(third) == 0) {
            id = "personSnilsThird";
            msg = 'третья секция СНИЛС должна содержать 3 цифры'
            console.log(3 + id + ' ' + msg);
            return false;
        }
        var fourth = foInput;
        if (!fourth || fourth.length != 2 || !isNormalInteger(fourth)) {
            id = "personSnilsFourth";
            msg = 'четвертая секция СНИЛС должна содержать 2 цифры'
            console.log(4 + id + ' ' + msg);
            return false;
        }
        var result = false;
        var sum = 0
        var snils = first.toString() + second.toString() + third.toString() + fourth.toString()
        for (var i = 0; i < 9; i++) {
            sum += parseInt(snils[i]) * (9 - i);
        }
        var checkDigit = 0;
        if (sum < 100) {
            checkDigit = sum;
        } else if (sum > 101) {
            checkDigit = parseInt(sum % 101);
            if (checkDigit === 100) {
                checkDigit = 0;
            }
            if (checkDigit != fourth) {
                id = "personSnilsFourth"
                msg = 'Неправильное контрольное число'
                console.log(5 + id + ' ' + msg);
                return false;
            }
        }
        if (checkDigit === parseInt(snils.slice(-2))) {
            return true;
        } else {
            id = "personSnilsFirst"
            msg = 'Неправильное контрольное число'
            console.log(6 + id + ' ' + msg);
            return false;
        }
    } else {
        id = "personSnilsFirst"
        console.log(7 + id + ' ' + msg);
        return false;
    }
}

isNormalInteger = function(str) {
    return /^\+?\d+$/.test(str);
}