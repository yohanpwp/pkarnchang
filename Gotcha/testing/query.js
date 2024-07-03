let _energyLevel = 100 ;
function energyLevel() {
    if ((typeof(_energyLevel)) === 'number' ) { return 'My current energy level is ' + _energyLevel }
  }
console.log(energyLevel());