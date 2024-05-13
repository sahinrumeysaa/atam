document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
 
    
        "Anılar.",
        "Nutuk.",
        "Kürtler.",
        "Geometri.",
        "Zabit ve Kubandan ile Hasbihal.",
        "Din ve Laiklik Üzerine.",
        "Gençlik Üzerine.",
        "Hatıra Notlarım."


    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});