function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let tankVolume = lenght * width * height;
    let tankVolumeInLiters = tankVolume / 1000;
    let reservedSpace = percent / 100;
    let nesessaryLiters = tankVolumeInLiters * (1 - reservedSpace);

    console.log(nesessaryLiters);
}
fishTank(["85","75","47","17"]);