let sign;

function setHeader(s) {
    let element = document.getElementById("header");
    element.innerHTML = s;
}

function setNotice(n) {
    let notice = document.getElementById("notice");
    notice.innerHTML = n;
}

function setHoroscopeHeader(s) {
    let element = document.getElementById("header2");
    element.innerHTML = s;
}

function setHoroscope(s) {
    let element = document.getElementById("horoscope");
    element.innerHTML = s;
}

function getInput() {
    let text = document.getElementById("input").value;
    let list = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", 
        "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
    text = text.toLowerCase();
    if(list.includes(text)) {
        sign = text;
        setNotice("");
        getHoroscope();
    }
    else {
        setNotice("Please enter a valid sign.");
        setHoroscopeHeader("");
        setHoroscope("");
    } 
    
}

async function getHoroscope() {
    try{
        sign = sign.charAt(0).toUpperCase() + sign.slice(1);

        let url = "https://devbrewer-horoscope.p.rapidapi.com/today/short/" + sign;

        let response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "devbrewer-horoscope.p.rapidapi.com",
                "x-rapidapi-key": "8fc6020e63mshfd567d69846c16bp1184e0jsnc96d92d43cba"
            }
        })
        let json = await response.json();
        let reading = json[sign]["Today"];
        setHoroscopeHeader("today's horoscope for " + sign + ":");
        setHoroscope(reading);
    }
    catch(error) {
        console.log(error);
    }
}
