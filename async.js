const Api_key = "325e170126e812ae5378d0f369507692";
const lat = -0.038823; 
const lon = -78.982557; 
const Api_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_key}`;

function cargarApiClima(){
    console.log("Cargando Api del Clima...");
    setTimeout(async()=>{
        try {
            let respuesta = await fetch(`${Api_URL}`)
            let data = await respuesta.json()
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    },4000)
    
}
cargarApiClima();