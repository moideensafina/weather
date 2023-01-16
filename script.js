const navbtn=document.getElementById("navbtn");
const navlist=document.querySelector(".nav-list");

navbtn.addEventListener("click",(e)=>{
    if(navlist.classList.contains('active')){
        navlist.classList.remove('active')
    } 
    else{
        navlist.classList.add('active')
    }
})
const city=document.getElementById("input");
city.focus()
city.addEventListener("keyup",(key)=>{
    if(key.key==="Enter"){
        weather()
    }
    if(key.key==="Delete"){
        city.value="";
    }
})  

function weather(){
  
    if(city.value.length > 3){
        weatherworking()
    }
    function weatherworking(){
        const url= "https:api.openweathermap.org/data/2.5/weather?" ;
        const apikey ="d8c423c6249117a6317fc58593355c98"
        const fullurl =`${url}&appid=${apikey}&units=metric&q=${city.value}`
      
     document.getElementById("info").style.display='block';   
    fetch(fullurl)
    .then((responsive)=>{
        return responsive.json()
    })
    .then((data)=>{
        console.log(data);
        cityname=data.name;
        document.getElementById("city").innerText=cityname;
        description=data.weather[0].main;
        document.getElementById("description").innerText=description;
        deg=data.main.temp;
        document.getElementById("deg").innerText=Math.round(deg);
        min=data.main.temp_min;
        document.getElementById("min").innerText=Math.round(min);
        max=data.main.temp_min;
        document.getElementById("max").innerText=Math.round(max);
        humidity=data.main.humidity;
        document.getElementById("humidity").innerText=Math.round(humidity);
        wind=data.wind.deg;
        document.getElementById("wind").innerText=Math.round(wind);
        runits=data.sys.sunrise;
        sunits=data.sys.sunset;
        let rdate = new Date(runits*1000);
        let sdate = new Date(sunits*1000);
        document.getElementById("rhours").innerText=rdate.getHours();
        document.getElementById("rmins").innerText=`${rdate.getMinutes()} AM`;
        document.getElementById("shours").innerText=(sdate.getHours())-12;
        document.getElementById("smins").innerText=`${sdate.getMinutes()} PM`;
            const coverter=document.getElementById("coverter");
            const covertervalue=document.getElementById("covertervalue");
            coverter.addEventListener("click",()=>{
                    deg=data.main.temp;
                    fah=((9/5)*deg)+32;
                    cel=((5/9)*(fah-32));
                    if(covertervalue.classList.contains('fah')){
                        covertervalue.innerText=`${Math.round(cel)} ° C`;
                        covertervalue.classList.remove('fah')
                    }
                    else{
                        covertervalue.innerText=`${Math.round(fah)} ° F`;
                        covertervalue.classList.add('fah')
                    }
            })
    })
    }
    
}