
/*
Базовые нормы расхода бензина на 100км по маркам автомобилей,
без корректирующих коэффициентов(кондиционер, зима/лето и тд).
*/
export const fuelNormGranta = 8.2;     // базовый расход Лада Гранта
export const fuelNormGaz = 15.2;       // базовый расход Газель
export const fuelNormMoskvitch = 9.8;  // базовый расход Москвич

/*
Корректирующие коэф-ты
*/
export const regionFuel = 0.35;        // надбавка за регион(более 5млн. человек) 35%
export const winterSeasonFuel = 0.1;         // надбавка зимний сезон 10%
export const odometer100kmFuel = 0.05  // надбавка за пробег выше 100т.км, но меньше 150т.км. 5%
export const odometer150kmFuel = 0.1   // надбавка за пробег выше 150т.км, 10%
export const conditionFuel = 0.07      // надбавка за польз-е кондиционером в летний сезон 7%


