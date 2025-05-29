// puzzle_data.js

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana", // Aivan ensimmäinen aloitusviesti
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
            expectedInput: "Jalkaranta", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hienoa! Jatka seuraavaan:",
            challengeText: "Kirjoita kuvasta selviävä kaupunginosa:", // <--- MUUTA TÄMÄ HALUTESSASI
            challengeImage: "jalkaranta.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 3 (indeksi 2): Toinen kuva-arvoitus
            expectedInput: "Ämmälä", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hyvin menee! Tässä seuraava:",
            challengeText: "Mikä kaupunginosa kuvassa on:", // <--- MUUTA TÄMÄ HALUTESSASI
            challengeImage: "ammala.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 4 (indeksi 3): Kolmas kuva-arvoitus
            expectedInput: "Kottero", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Loistavaa! Seuraava odottaa:",
            challengeText: "Tunnista kuvasta kaupunginosa:", // <--- MUUTA TÄMÄ HALUTESSASI
            challengeImage: "kottero.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 5 (indeksi 4): Neljäs kuva-arvoitus
            expectedInput: "kukonkoivu", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Melkein perillä! Tässä vielä ainakin yksi:",
            challengeText: "Mistä päin kaupunkia tämä kuva on:", // <--- MUUTA TÄMÄ HALUTESSASI
            challengeImage: "kukonkoivu.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 6 (indeksi 5): Viides kuva-arvoitus
            expectedInput: "Radiomäki", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hienoa!",
            challengeText: "Kaupunginosa kuvassa:",
            challengeImage: "radiomaki.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 7 (indeksi 6): Kuudes kuva-arvoitus
            expectedInput: "Jokimaa", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Jatka samaan malliin!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "jokimaa.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 8 (indeksi 7): Seitsemäs kuva-arvoitus
            expectedInput: "Karjusaari", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Se alkaa olla hallussa!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "karjusaari.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 9 (indeksi 8): Kahdeksas kuva-arvoitus
            expectedInput: "keijupuisto", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Loistavaa!",
            challengeText: "Tämä kaupunginosa on:",
            challengeImage: "keijupuisto.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 10 (indeksi 9): Yhdeksäs kuva-arvoitus
            expectedInput: "leponiemi", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hyvä! ",
            challengeText: "Kaupunginosa?:",
            challengeImage: "leponiemi.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 11 (indeksi 10): Kymmenes kuva-arvoitus
            expectedInput: "metsäkangas", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Puolivälikö häämöttää vai montako näitä on! ",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "metsakangas.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 12 (indeksi 11): Yhdestoista kuva-arvoitus
            expectedInput: "patoniitty", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Et ole yksin!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "patoniitty.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 13 (indeksi 12): Kahdestoista kuva-arvoitus
            expectedInput: "kolava", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Hyvin vedetty!",
            challengeText: "missä kaupunginosassa olla tässä:",
            challengeImage: "kolava.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 14 (indeksi 13): Kolmastoista kuva-arvoitus
            expectedInput: "koivukumpu", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Mahtavaa! ",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "koivukumpu.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 15 (indeksi 14): Neljästoista kuva-arvoitus
            expectedInput: "venetsia", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Vielä jaksaa! ",
            challengeText: "Missä olemme tässä:",
            challengeImage: "venetsia.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 16 (indeksi 15): Viidestoista kuva-arvoitus
            expectedInput: "sydänkangas", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Kohta valmis! ehkä?",
            challengeText: "Tämäkin kaupunginosa tarvitaan jotta pääsee eteenpäin:",
            challengeImage: "sydankangas.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 17 (indeksi 16): Kuudestoista kuva-arvoitus
            expectedInput: "pesäkallio", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Enää muutamia! ",
            challengeText: "Kaupunginosa:",
            challengeImage: "pesakallio.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 18 (indeksi 17): Seitsemästoista kuva-arvoitus
            expectedInput: "vartiolaakso", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Melkein perillä!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "vartiolaakso.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 19 (indeksi 18): Kahdeksastoista kuva-arvoitus
            expectedInput: "kukonkoski", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Viimeiset vedot! ",
            challengeText: "Missä kaupungiosassa olla tässä:",
            challengeImage: "kukonkoski.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 20 (indeksi 19): Yhdeksästoista kuva-arvoitus
            expectedInput: "myllypohja", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Viimeinen kuva-arvoitus kohta?!",
            challengeText: "Kaupunginosa :",
            challengeImage: "myllypohja.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },
        {
            // Vaihe 21 (indeksi 20): Yhdeksästoista kuva-arvoitus
            expectedInput: "kuusiniitty", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Joko tämä jo olis tässä?",
            challengeText: "Kaupunginosa:",
            challengeImage: "kuusiniitty.jpg" // <--- MUUTA TÄMÄ OIKEAKSI KUVAN NIMEKSI
        },

        {
            // Vaihe 22 (indeksi 21): Viimeinen kuva-arvoitus (20/20)
            expectedInput: "Mikkokalevi", // <--- MUUTA TÄMÄ OIKEAKSI VASTAUKSEKSI
            responseMessage: "Erinomaista työtä! Olet ratkaissut kaikki kuvat ja loppu kysymyksen! Kirjoita chekkeriin \"geokätköilijä on nero\".",
            challengeText: "Onneksi olkoon, kaikki tehtävät suoritettu! Kirjoita vielä että kenen mysteeri tämä saadaksesi vastauksen chekkerille!", // Loppuviesti
            challengeImage: null // Ei kuvaa viimeisessä vaiheessa
        }
    ]
};
