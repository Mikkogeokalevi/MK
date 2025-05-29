// puzzle_data.js

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana:", // Aivan ensimmäinen aloitusviesti
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.", // Viesti väärästä syötteestä
    steps: [
        {
            // Vaihe 1 (indeksi 0) - "Salasana" vaihe
            expectedInput: "salasana", // Mitä käyttäjän pitää kirjoittaa
            responseMessage: "Oikein! Tässä seuraava vihje:", // Viesti oikeasta syötteestä
            // Huom: Tähän vaiheeseen ei tule kuvaa, joten imagePrompt on null tai pois
            imagePrompt: null 
        },
        {
            // Vaihe 2 (indeksi 1) - Ensimmäinen kuva-arvoitus
            expectedInput: "osa1", // Odotettu vastaus kuvaan
            responseMessage: "Hienoa! Jatka seuraavaan:", // Viesti oikeasta syötteestä
            textPrompt: "Kirjoita kuvasta selviävä kaupunginosa:", // Teksti, joka tulee kuvan alle
            imagePrompt: "kuva01.jpg" // Kuva tähän vaiheeseen
        },
        {
            // Vaihe 3 (indeksi 2) - Toinen kuva-arvoitus
            expectedInput: "osa2",
            responseMessage: "Hyvin menee! Tässä seuraava:",
            textPrompt: "Mikä kaupunginosa kuvassa on?",
            imagePrompt: "kuva02.jpg"
        },
        {
            // Vaihe 4 (indeksi 3) - Kolmas kuva-arvoitus
            expectedInput: "osa3",
            responseMessage: "Loistavaa! Seuraava odottaa:",
            textPrompt: "Tunnista kuvasta kaupunginosa:",
            imagePrompt: "kuva03.jpg"
        },
        {
            // Vaihe 5 (indeksi 4) - Neljäs kuva-arvoitus
            expectedInput: "osa4",
            responseMessage: "Melkein perillä! Tässä vielä yksi:",
            textPrompt: "Mistä päin kaupunkia tämä kuva on?",
            imagePrompt: "kuva04.jpg"
        },
        {
            // Vaihe 6 (indeksi 5) - Viides kuva-arvoitus
            expectedInput: "osa5",
            responseMessage: "Erinomaista! Viimeinen kaupunginosa:",
            textPrompt: "Viimeinen kaupunginosa, kirjoita nimi:",
            imagePrompt: "kuva05.jpg"
        },
        {
            // Vaihe 7 (indeksi 6) - Loppuratkaisu (EI KUVA, VAAN TEKSTI)
            expectedInput: "finaali", // Loppuratkaisun sana
            responseMessage: "Erinomaista työtä! Olet ratkaissut tämän mysteerin! Kirjoita chekkeriin \"geokätköilijä on nero\".",
            textPrompt: "Onneksi olkoon, tehtävä suoritettu!", // Loppuviesti
            imagePrompt: null // Ei kuvaa viimeisessä vaiheessa
        }
    ]
};
