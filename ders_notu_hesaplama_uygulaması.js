let not1 ,not2 ,not3, adSoyad


 adSoyad = prompt('Adınız Soyadınız')

 not1 = prompt('Vize Notunuzu Giriniz')
 not2 = prompt('Final  Veya  Bütünleme Notunuzu Giriniz')
let ortalamaNot = not1*0.30+not2*0.70

not3 = ortalamaNot


if (not3>50 && not3<60)
{
alert('Harf Notunuz DC')
}

else if (not3>60 && not3 <70)
{
    alert('Harf Notunuz CC')
}

else if (not3>70 && not3<80){
    alert('Harf notunuz BB')
}

else if (not3>80 && not3<86)
{
    alert('Harf Notunuz BA')
}

else if (not3>90 && not3<101){

    alert('Harf notunuz AA')
}

else if(not3<=49){
    alert('Malesef dersten kaldınız!')
}

else(
    alert('HATA TEKRAR DENEYİNİZ.')
)



