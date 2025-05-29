// puzzle_data.js

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana", // Aivan ensimmäinen aloitusviesti
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.", // Viesti väärästä syötteestä
    steps: [
        {
            // Vaihe 1 (indeksi 0) - "Salasana" vaihe
            expectedInput: "salasana", // Mitä käyttäjän pitää kirjoittaa
            responseMessage: "Oikein!", // Viesti oikeasta syötteestä
            // HUOM: Tähän tulee nyt kuva, joka näytetään heti "salasana"-vastauksen jälkeen
            textPrompt: "Kirjoita kuvasta selviävä kaupunginosa:", // Teksti, joka tulee kuvan alle
            imagePrompt: "jalkaranta.jpg" // Ensimmäinen kuva tähän!
        },
        {
            // Vaihe 2 (indeksi 1) - Toinen kuva-arvoitus (kuva02.jpg)
            expectedInput: "jalkaranta", // Odotettu vastaus kuva01.jpg:hen
            responseMessage: "Hienoa! Jatka seuraavaan:",
            textPrompt: "Mikä kaupunginosa kuvassa on?",
            imagePrompt: "kuva02.jpg"
        },
        {
            // Vaihe 3 (indeksi 2) - Kolmas kuva-arvoitus (kuva03.jpg)
            expectedInput: "osa2", // Odotettu vastaus kuva02.jpg:hen
            responseMessage: "Hyvin menee! Tässä seuraava:",
            textPrompt: "Tunnista kuvasta kaupunginosa:",
            imagePrompt: "kuva03.jpg"
        },
        {
            // Vaihe 4 (indeksi 3) - Neljäs kuva-arvoitus (kuva04.jpg)
            expectedInput: "osa3", // Odotettu vastaus kuva03.jpg:hen
            responseMessage: "Loistavaa! Seuraava odottaa:",
            textPrompt: "Mistä päin kaupunkia tämä kuva on?",
            imagePrompt: "kuva04.jpg"
        },
        {
            // Vaihe 5 (indeksi 4) - Viides kuva-arvoitus (kuva05.jpg)
            expectedInput: "osa4", // Odotettu vastaus kuva04.jpg:hen
            responseMessage: "Melkein perillä! Tässä vielä yksi:",
            textPrompt: "Viimeinen kaupunginosa, kirjoita nimi:",
            imagePrompt: "kuva05.jpg"
        },
        {
            // Vaihe 6 (indeksi 5) - Loppuratkaisu (EI KUVA, VAAN TEKSTI)
            expectedInput: "osa5", // Odotettu vastaus kuva05.jpg:hen
            responseMessage: "Erinomaista työtä! Olet ratkaissut tämän mysteerin! Kirjoita chekkeriin \"geokätköilijä on nero\".",
            textPrompt: "Onneksi olkoon, tehtävä suoritettu!", // Loppuviesti
            imagePrompt: null // Ei kuvaa viimeisessä vaiheessa
        }
    ]
};
