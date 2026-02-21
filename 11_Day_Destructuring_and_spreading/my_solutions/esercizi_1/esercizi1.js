const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
//#region ESERCIZIO 1
//Destruttura e assegna a singole variabili gli elementi dell'array
let [e, pi_greco, gravity, body_temp, boiling_temp] = constants;
// console.log(e, pi_greco, gravity, body_temp, boiling_temp);
//#region ESERCIZIO 2
//Destruttura l'array countries
let [fin, est, swe, den, nor] = countries;
// console.log(fin, est, swe, den, nor);
//#endregion
//#region ESERCIZIO 3
//Destruttura l'oggetto rectangle
let {width, height, area, perimeter} = rectangle;
// console.log(width, height, area, perimeter);
//#endregion


