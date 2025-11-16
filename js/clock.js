// Kullanıcıdan isim al
let userName = prompt("Adınız Nedir?");
if (!userName || userName.trim() === "") {
    userName = "Misafir";
}
document.querySelector("#myName").innerHTML = userName;

// Gün isimlerini Türkçe olarak tanımla
const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

// Saat ve gün bilgisini gösteren fonksiyon
function showTime() {
    const date = new Date();
    
    // Saat, dakika ve saniye bilgisini al
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Gün bilgisini al
    let dayName = gunler[date.getDay()];
    
    // İki haneli gösterim için başına 0 ekle
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    // Zamanı formatla ve HTML'e yazdır
    const timeString = `${hours}:${minutes}:${seconds} ${dayName}`;
    document.querySelector("#myClock").innerHTML = timeString;
    
    // Her saniye güncelle
    setTimeout(showTime, 1000);
}

// Sayfa yüklendiğinde saati başlat
showTime();

