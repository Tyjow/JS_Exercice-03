//Ex1
function CreationTableauLangages() {
	var tab = ["Html","CSS","Java","PHP"];
	return tab;
}

//Ex2
 function CreationTableauNombres() {
 	var tab = [0,1,2,3,4,5];
 	return tab;
 }

 //Ex3
 function RemplacementElement(tab) {
 	tab.splice(2,1,"Javascript");
 	return tab.slice();

 	/*for (var i = 0; i < tab.length; i++)
 		if (tab[i] == "Java")
 			tab[i] = "Javascript";
 			return tab;*/
 }

 //Ex4
 function AjoutElementLangages(tab) {
 	tab.push("Ruby","Python");
 	return tab;
 	

 	/*for (var i = 0; i < tab.length; i++)
 		if (i == 1)
	 		tab.push("Ruby","Python");
	 		return tab;*/
 }

 //Ex5
 function AjoutElementNombres(tab) {
 	tab.unshift(-2,-1);
 	return tab;

 	/*for (var i = 0; i < tab.length; i++)
 		if (i == 1)
	 		tab.unshift(-2,-1);
	 		return tab;*/
 }

 //Ex6
 function SuppressionPremierElement(tab) {
 	tab.splice(0,1);
 	return tab.slice();

 	/*for (var i = 0; i < tab.length; i++)
 		if (tab[i] == "Html")
 			tab.splice(i,1)
 			i--;
 			return tab;*/

 	/*tab.shift();
 	return tab;*/
 }

 //Ex7
 function SuppressionDernierElement(tab) {
 	tab.splice(-1,1);
 	return tab.slice();

 	/*tab.splice(4,1);
 	return tab.slice();*/

 	/*for (var i = 0; i < tab.length; i++)
 		if (tab[i] == "Python")
 			tab.splice(i,1)
 			i--;
 			return tab;*/

 	/*tab.pop();
 	return tab;*/
 }

 //Ex8
 function ConversionChaineTableau(str) {
 	var tab = str.split(",");
 	return tab;
 }

 //Ex9
 function ConversionTableauChaine(tab) {
 	var table = tab.join(",");
 	return table;

 	/*var table = tab.toString();
 	return table;*/
 }

 //Ex10
 function TriTableau(tab) {
 	tab.sort();
 	return tab;
 }

 //Ex1 Bonus
 function InversionTableau(tab) {
 	tab.reverse();
 	return tab;
 }

 //Ex2 Bonus
 function TriSpecial(tab) {
 	tab.sort(function(a, b) {
 		return a.length - b.length;
 	});
 	return tab;
 }