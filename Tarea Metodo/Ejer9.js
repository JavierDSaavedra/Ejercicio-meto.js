// ! 9. Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje. Usa await para esperar su resultado e imprimirlo.

async function esperar(){
    await new Promise (msg => setTimeout (msg, 2000))
    return "pasaron 2 segunsdos"
}

async function mensaje () {
    const mensaje = await esperar()
    console.log(mensaje)
}
mensaje()