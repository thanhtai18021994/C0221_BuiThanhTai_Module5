let width:number;
let height:number;
width=10.5;
height=20.5;
let area:number=width*height;
console.log(`Dien tich hinh chu nhat ${area}`);
 let sum:number=0;
 let count:number=0;
for (let i = 2; count <30 ; i++) {
    let isPrime:boolean=true;
    if(i==2){
        sum=sum+i;
        continue;
    }
    for (let j=0;j<i;j++){
        if(i%j==0){
            isPrime=false;
        }
    }
    if(!isPrime){
        continue;
    }
    sum=sum+i;
    count++;
}
console.log(`Tong 30 so nguyen to la ${sum}`);

