function updateCity(){
    const city=document.getElementById('city');
    const selectedCity=city.ariaValueMax;
    const other=document.getElementById('OtherCity');
    const citySpan=document.querySelectorAll('.head-span');
    if(selectedCity==='Others'){
        other.style.display="inline-block";
        other.style.color="white";
        citySpan.forEach(span=>span.textContent=other.value);
    }
    else{
        other.style.display='none';
        citySpan.forEach(span=>span.textContent=selectedCity);
    }
}