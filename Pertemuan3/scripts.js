

function jumlah(){
var Bilangan1=parseFloat(document.form.Bilangan1.value);
var Bilangan2=parseFloat(document.form.Bilangan2.value);
var jumlah;

if(isNaN(Bilangan1)){
    Bilangan1=0.0
}

if(isNaN(Bilangan2)){
    Bilangan2=0.0
}

jumlah = Bilangan1+Bilangan2;


alert("hasil dari penjumlahan adalah : " + jumlah);

}

// isNan  -> Is Not A Number