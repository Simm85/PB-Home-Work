function radiansToDegrees(input) {
    let pi = Math.PI;
    let radians = Number(input[0]);
    let convertRadiansToDegrees = radians * 180 / pi;

    console.log(convertRadiansToDegrees);
}
radiansToDegrees(['6.2832']);



/*Напишете програма, която чете ъгъл в радиани (десетично число) и го преобразува в градуси. 
Използвайте формулата: градус = радиан * 180 / π. Числото π в Java програми е достъпно чрез Math.PI. */