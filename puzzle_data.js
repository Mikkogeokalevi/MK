// puzzle_data.js

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana:", // Aivan ensimmäinen aloitusviesti
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.", // Viesti väärästä syötteestä
    steps: [
        {
            // Vaihe 1 (indeksi 0): "Salasana" -haaste.
            // Kun tämä on vastattu oikein, siirrytään vaiheeseen 2 (indeksi 1), joka näyttää ensimmäisen kuva-arvoituksen.
            expectedInput: "salasana", // Mitä käyttäjän pitää kirjoittaa
            responseMessage: "Oikein! Tässä ensimmäinen kuva-arvoitus:", // Viesti oikeasta syötteestä
            challengeText: null, // Ei omaa tekstiä tähän vaiheeseen ennen vastausta
            challengeImage: null // Ei omaa kuvaa tähän vaiheeseen ennen vastausta
        },
        {
            // Vaihe 2 (indeksi 1): Ensimmäinen kuva-arvoitus (vastataan tähän)
            expectedInput: "jalkaranta", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hienoa! Jatka seuraavaan:",
            challengeText: "Kirjoita kuvasta selviävä kaupunginosa (1/20):", // <--- MUUTA TÄMÄ HALUTESSASI
            challengeImage: "jalkaranta.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 3 (indeksi 2): Toinen kuva-arvoitus
            expectedInput: "vastaus2", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hyvin menee! Tässä seuraava:",
            challengeText: "Mikä kaupunginosa kuvassa on (2/20):", // <--- MUUTA TÄMÄ HALUTESSASI
            challengeImage: "kuva02.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 4 (indeksi 3): Kolmas kuva-arvoitus
            expectedInput: "vastaus3", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Loistavaa! Seuraava odottaa:",
            challengeText: "Tunnista kuvasta kaupunginosa (3/20):", // <--- MUUTA TÄMÄ HALUTESSASI
            challengeImage: "kuva03.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 5 (indeksi 4): Neljäs kuva-arvoitus
            expectedInput: "vastaus4", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Melkein perillä! Tässä vielä yksi (4/20):",
            challengeText: "Mistä päin kaupunkia tämä kuva on (4/20):", // <--- MUUTA TÄMÄ HALUTESSASI
            challengeImage: "kuva04.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 6 (indeksi 5): Viides kuva-arvoitus
            expectedInput: "vastaus5", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hienoa! (5/20)",
            challengeText: "Kaupunginosa kuvassa (5/20):",
            challengeImage: "kuva05.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 7 (indeksi 6): Kuudes kuva-arvoitus
            expectedInput: "vastaus6", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Jatka samaan malliin! (6/20)",
            challengeText: "Tunnista kaupunginosa (6/20):",
            challengeImage: "kuva06.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 8 (indeksi 7): Seitsemäs kuva-arvoitus
            expectedInput: "vastaus7", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Se alkaa olla hallussa! (7/20)",
            challengeText: "Mikä kaupunginosa tässä (7/20):",
            challengeImage: "kuva07.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 9 (indeksi 8): Kahdeksas kuva-arvoitus
            expectedInput: "vastaus8", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Loistavaa! (8/20)",
            challengeText: "Tämä on (8/20):",
            challengeImage: "kuva08.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 10 (indeksi 9): Yhdeksäs kuva-arvoitus
            expectedInput: "vastaus9", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hyvä! (9/20)",
            challengeText: "Kaupunginosa? (9/20):",
            challengeImage: "kuva09.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 11 (indeksi 10): Kymmenes kuva-arvoitus
            expectedInput: "vastaus10", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Puoliväli häämöttää! (10/20)",
            challengeText: "Tunnista kuvasta (10/20):",
            challengeImage: "kuva10.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 12 (indeksi 11): Yhdestoista kuva-arvoitus
            expectedInput: "vastaus11", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Et ole yksin (11/20)!",
            challengeText: "Mikä tämä on (11/20):",
            challengeImage: "kuva11.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 13 (indeksi 12): Kahdestoista kuva-arvoitus
            expectedInput: "vastaus12", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hyvin vedetty! (12/20)",
            challengeText: "Paikka (12/20):",
            challengeImage: "kuva12.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 14 (indeksi 13): Kolmastoista kuva-arvoitus
            expectedInput: "vastaus13", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Mahtavaa! (13/20)",
            challengeText: "Tunnista (13/20):",
            challengeImage: "kuva13.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 15 (indeksi 14): Neljästoista kuva-arvoitus
            expectedInput: "vastaus14", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Vielä jaksaa! (14/20)",
            challengeText: "Missä olemme (14/20):",
            challengeImage: "kuva14.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 16 (indeksi 15): Viidestoista kuva-arvoitus
            expectedInput: "vastaus15", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Kohta valmis! (15/20)",
            challengeText: "Tämäkin (15/20):",
            challengeImage: "kuva15.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 17 (indeksi 16): Kuudestoista kuva-arvoitus
            expectedInput: "vastaus16", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Enää muutama! (16/20)",
            challengeText: "Kaupunginosa (16/20):",
            challengeImage: "kuva16.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 18 (indeksi 17): Seitsemästoista kuva-arvoitus
            expectedInput: "vastaus17", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Melkein perillä! (17/20)",
            challengeText: "Tunnista (17/20):",
            challengeImage: "kuva17.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 19 (indeksi 18): Kahdeksastoista kuva-arvoitus
            expectedInput: "vastaus18", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Viimeiset vedot! (18/20)",
            challengeText: "Missä (18/20):",
            challengeImage: "kuva18.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 20 (indeksi 19): Yhdeksästoista kuva-arvoitus
            expectedInput: "vastaus19", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Viimeinen kuva-arvoitus! (19/20)",
            challengeText: "Viimeinen kaupunginosa (19/20):",
            challengeImage: "kuva19.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 21 (indeksi 20): Viimeinen kuva-arvoitus (20/20)
            expectedInput: "vastaus20", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Erinomaista työtä! Olet ratkaissut kaikki kuvat! Kirjoita chekkeriin \"geokätköilijä on nero\".",
            challengeText: "Onneksi olkoon, kaikki tehtävät suoritettu! (20/20)", // Loppuviesti
            challengeImage: null // Ei kuvaa viimeisessä vaiheessa
        }
    ]
};
