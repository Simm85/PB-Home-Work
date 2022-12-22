function petShop(input) {
    let dogFoodPackagePrice = 2.50;
    let catFoodPackagePrice = 4;
    let dogFoodOrder = input[0];
    let catFoodOrder = input[1];
    let bill = Number( (dogFoodOrder * dogFoodPackagePrice) + (catFoodOrder * catFoodPackagePrice) ) + ` lv.`;

    console.log(bill);
}
petShop(['13', '9']);


/* Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета и котки.
 Храната се пазарува от зоомагазин, като една опаковка храна за кучета е на цена 2.50 лв,
а опаковка храна за котки струва 4 лв.

Вход
От конзолата се четат 2 реда:
1.	Броят на опаковките храна за кучета – цяло число в интервала [0… 100]
2.	Броят на опаковките храна за котки –  цяло число в интервала [0… 100]

Изход
На конзолата се отпечатва: 
"{крайната сума} lv." */
