const download = document.querySelector("#download-btn");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const qrContainer = document.querySelector("#qr-code");
const qrText = document.querySelector(".qr-text");
const sizes = document.querySelector(".sizes");
const shareBtn = document.querySelector("#share-btn");

let colorLight = "#fff",
    colorDark = "#000",
    text = "www.ifms.edu.br",
    size = 300;

window.onload = generateQRCode

// Add event
dark.addEventListener("input", handleDarkColor);
light.addEventListener("input", handleLightColor);
qrText.addEventListener("input", handleQRText);
sizes.addEventListener("change", handleSize);

// Function create
function handleDarkColor(e){
    colorDark = e.target.value;
    generateQRCode()
}

function handleLightColor(e){
    colorLight = e.target.value;
    generateQRCode()
}

function handleQRText(e){
    text = e.target.value;
    generateQRCode()
}

function handleSize(e){
    size = e.target.value;
    generateQRCode()
}

async function generateQRCode(){
    qrContainer.innerHTML = '';

    new QRCode('qr-code',{
        text,
        height: size,
        width: size,
        colorLight,
        colorDark,
    });

    download.href = await resolveDataUrl();
}

// HAAAAAAAAAAAAA
function resolveDataUrl(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = document.querySelector("#qr-code img")
            if (img.currentSrc){
                resolve(img.currentSrc)
                return;
            }
            const canvas = document.querySelector("canvas")
            resolve(canvas.toDataURL());
        }, 50);
    })
}



