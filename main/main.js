// module.exports = function main() {
//     console.log("Debug Info");
//     return 'Hello World!';
// };

// module.exports = function main(distance_in_km, time_in_minute) {
//     var base_fee = 6;
//
//     var fee_per_minute = 0.25;
//     var fee_per_distance1 = 0.8;
//     var fee_per_distance2 = 1.2;
//
//     if(distance_in_km <= 2) {
//         return Math.round(base_fee + fee_per_minute * time_in_minute);
//     } else if(distance_in_km <= 8){
//         return Math.round(base_fee + fee_per_minute * time_in_minute + fee_per_distance1 * (distance_in_km - 2) );
//     } else if(distance_in_km > 8){
//         return Math.round(base_fee + fee_per_minute * time_in_minute + fee_per_distance1 * (8 - 2) + fee_per_distance2 * (distance_in_km - 8));
//     }
// }

module.exports = function main(distance_in_km, time_in_minute) {
    let base_fee = 6;
    if(distance_in_km <= 2)
        return base_fee;
    if(distance_in_km <= 8)
        return Math.round(base_fee + 0.8*(distance_in_km -2) );
    if(distance_in_km > 8)
        return Math.round(base_fee + 1.2*(distance_in_km -8) + 0.8 * 6);
};