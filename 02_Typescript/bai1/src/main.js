var width;
var height;
width = 10.5;
height = 20.5;
var area = width * height;
console.log("Dien tich hinh chu nhat " + area);
var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var isPrime = true;
    if (i == 2) {
        sum = sum + i;
        continue;
    }
    for (var j = 0; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum = sum + i;
    count++;
}
console.log("Tong 30 so nguyen to la " + sum);
let obj=new Promise(resovle,reject=>{
    let xml=new XMLHttpRequest;
    xml.onload(function (){
        if (this.status==200){
            resovle()
        }
    })
})
