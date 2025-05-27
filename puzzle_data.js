// puzzle_data.js

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana:", // Aloitusviesti käyttäjälle
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.", // Viesti väärästä syötteestä
    steps: [
        {
            // Vaihe 1 (indeksi 0)
            expectedInput: "salasana", // Mitä käyttäjän pitää kirjoittaa
            responseMessage: "Salasana on väärin.", // Viesti oikeasta syötteestä
            promptForNext: "Yritä seuraavaa avainta:" // Kehote seuraavaa syötettä varten
        },
        {
            // Vaihe 2 (indeksi 1)
            expectedInput: "väärin",
            responseMessage: "Kokeile uudestaan",
            promptForNext: "Entä nyt, mikä sopisi?"
        },
        {
            // Vaihe 3 (indeksi 2)
            expectedInput: "uudestaan",
            responseMessage: "Salasana on edelleen väärin.",
            promptForNext: "Jatka eteenpäin..."
        },
        {
            // Vaihe 4 (indeksi 3) - UUSI VAIHE
            expectedInput: "edelleen väärin", // Esimerkki uudesta vaiheesta
            responseMessage: "Hyvä! Olet polulla...",
            promptForNext: "Melkein perillä, anna seuraava:"
        },
        {
            // Vaihe 5 (indeksi 4) - UUSI VAIHE
            expectedInput: "seuraava", // Esimerkki uudesta vaiheesta
            responseMessage: "Loistavaa! Vielä yksi ponnistus.",
            promptForNext: "Kirjoita viimeinen sana, ennen ratkaisua:"
        },
        {
            // Vaihe 6 (indeksi 5) - Alkuperäinen viimeinen "oikea"
            expectedInput: "seuraava", // Tai vaihda tämä loogisemmaksi, esim. "ratkaisu"
            responseMessage: "Oikein! Kirjoita chekkeriin \"minä tiesin salasanan\".",
            promptForNext: "Valmista! Arvoitus ratkaistu." // Viesti kun kaikki on valmista
        }
    ]
};
