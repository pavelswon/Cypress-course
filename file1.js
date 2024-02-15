function fueling(carFuel = "gas", carSize = "S") {
    const carSizes = {
        S: "S авто",
        M: "M авто",
        L: "L авто",
        XL: "XL авто"
    };
    
    const sizeText = carSizes[carSize] || "невідомий розмір авто";
    
    console.log(`Заправка для ${sizeText}, тип палива "${carFuel}"`);
}

fueling();
fueling("gas", "M");
fueling("gas", "L");
fueling("gas", "XL");
fueling("disel", "S");
fueling("disel", "M");
fueling("disel", "L");
fueling("disel", "XL");
fueling("gas", " ");
