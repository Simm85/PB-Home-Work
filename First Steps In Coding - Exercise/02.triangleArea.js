function triangleArea(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);

    let area = a * h / 2;
    let result = area.toFixed(2);
    console.log(result);
}  
triangleArea(['20', '30']);

/*Напишете програма, която чете от конзолата страна и височина на триъгълник и пресмята неговото лице. 
Използвайте формулата за лице на триъгълник: area = a * h / 2. Форматирате изхода до втория знак след десетичната запетая.*/