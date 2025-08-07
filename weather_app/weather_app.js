let display=document.getElementById("content_box");
let city=document.getElementById("search_box");
let search_btn=document.getElementById("search_btn");
let dis_temp=document.getElementById("dis_temp");
let dis_city=document.getElementById("dis_city");
let humidity=document.getElementById("hum_scale");
let winds=document.getElementById("winds_scale");
let weather_img=document.getElementById("weather_img");
const apikey="efd293152a621cb1acae08843e08802f";
search_btn.onclick=async function getdata()
{
    try{
        let city_name=city.value.trim();
        const apiurl="https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid="+apikey+"&units=metric";
        let f=await fetch(apiurl);
        let fjs=await f.json();
        city.value="";
        // console.log(f);
        if(f.ok==false)
        {
            alert("Please Enter Valide City Name!")
            return;
        }
        if(fjs.weather[0].main=="Clouds")
        {
            weather_img.src="clouds.png";
        }
        else if(fjs.weather[0].main=="Rain")
        {
            weather_img.src="rain.png";
        }
        else if(fjs.weather[0].main=="Thunderstorm")
        {
            weather_img.src="thunderstorm.png";
        }
        else if(fjs.weather[0].main=="Clear")
        {
            weather_img.src="clear_day.png";
        }
        else{
            weather_img.src="blank.png";
        }
        dis_temp.textContent=fjs.main.temp+"° C";
        dis_city.textContent=fjs.name;
        humidity.textContent=fjs.main.humidity+"%";
        winds.textContent=fjs.wind.speed+" km/h";
        console.log(fjs);
    }
    catch(error){
        alert("Something went wrong!.Please try again later.")
        console.log("Catched Error:"+error);
    }
}