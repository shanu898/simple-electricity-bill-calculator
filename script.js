function calculateMyBill(){
    let noOfunits = document.getElementById("noOfunits").value;
    let rate = 0;
    let fcharge=30;
    let totalbill = 0;

    
    if (noOfunits<=60){
        rate = 6.50;
        totalbill += noOfunits * rate;
    }else if (noOfunits<=80){
        rate=10.50;
        totalbill += 60 * 6.50 +(noOfunits - 60) * 10.50
    }else if (noOfunits<=120){
        rate=14.50;
    }

    totalbill += fcharge;
    alert(totalbill);

}