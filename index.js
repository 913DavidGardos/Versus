let ion = document.getElementById("nrion")
let ionCount = 0
let corne = document.getElementById("nrcorne")
let corneCount = 0

function incrementIon(){
  ionCount += 1
  ion.innerHTML = ionCount
  console.log(ion.innerHTML )
}

function incrementCorne(){
  corneCount += 1
  corne.innerHTML = corneCount
  console.log(corne.innerHTML )
}

function resetCounts(){
  ionCount = 0
  corneCount = 0
  ion.innerHTML = 0
  corne.innerHTML = 0
}
