const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = addBatteries(batteryBatches);
function addBatteries(batteryBatches) {
    return batteryBatches.reduce((accumulator, element) => accumulator + element, 0);
}