var countAllFromTown = function(regiNumbers, regiStart){
  //console.log(regiNumbers);
  var allFromTown = [];
    var splitRegiNumbers = regiNumbers.split(',');
  	for (var i=0;i<splitRegiNumbers.length;i++){
    	var townRegiNumber = splitRegiNumbers[i].trim();
     	if (townRegiNumber.startsWith(regiStart)){
        	allFromTown.push(townRegiNumber);
        }
    }
  return allFromTown.length;
}
