// puzzle_data.js

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana:", // Aloitusviesti käyttäjälle
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.", // Viesti väärästä syötteestä
    steps: [
        {
            // Vaihe 1 (indeksi 0)
            expectedInput: "salasana", // Mitä käyttäjän pitää kirjoittaa
            responseMessage: "Salasana on väärin.", // Viesti oikeasta syötteestä
            promptForNext: "Nyt ei mennyt oikein:" // Kehote seuraavaa syötettä varten
        },
        {
            // Vaihe 2 (indeksi 1)
            expectedInput: "väärin",
            responseMessage: "Kokeile uudestaan",
            promptForNext: "Oletko nyt aivan varma tuosta?"
        },
        {
            // Vaihe 3 (indeksi 2)
            expectedInput: "uudestaan",
            responseMessage: "Salasana on edelleen väärin",
            promptForNext: "Et taida muistaa?"
        },
        {
            // Vaihe 4 (indeksi 3) - UUSI VAIHE
            expectedInput: "edelleen väärin", // Esimerkki uudesta vaiheesta
            responseMessage: "Melkein perillä, anna seuraava:",
            promptForNext: "Miten tämä on nyt näin vaikeaa?"
        },
        {
            // Vaihe 5 (indeksi 4) - UUSI VAIHE
            expectedInput: "seuraava", // Esimerkki uudesta vaiheesta
            responseMessage: "Kirjoita viimeinen sana, ennen ratkaisua:",
            promptForNext: "Jokohan nyt osuisi oikeaan"
        },
        {
            // Vaihe 6 (indeksi 5) - Alkuperäinen viimeinen "oikea"
            expectedInput: "viimeinen sana", // Tai vaihda tämä loogisemmaksi, esim. "ratkaisu"
            responseMessage: "Oikein! Kirjoita chekkeriin \"minä tiesin salasanan\".",
            promptForNext: "Valmista! Arvoitus ratkaistu." // Viesti kun kaikki on valmista
        }
    ]
};
