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
            responseMessage: "Väärin, kokeile uudestaan",
            promptForNext: "Oletko nyt aivan varma tuosta?"
        },
        {
            // Vaihe 3 (indeksi 2)
            expectedInput: "uudestaan",
            responseMessage: "Ei, salasana on edelleen väärin",
            promptForNext: "Et taida muistaa?"
        },
        {
            // Vaihe 4 (indeksi 3) - UUSI VAIHE
            expectedInput: "edelleen väärin", // Esimerkki uudesta vaiheesta
            responseMessage: "Ei vieläkään, kokeile seuraavaa",
            promptForNext: "Miten tämä on nyt näin vaikeaa?"
        },
        {
            // Vaihe 5 (indeksi 4) - UUSI VAIHE
            expectedInput: "seuraavaa", // Esimerkki uudesta vaiheesta
            responseMessage: "Nyt ei nappaa, yritä jotain uutta",
            promptForNext: "Jokohan nyt osuisit oikeaan"
        },
 	{
            // Vaihe 6 (indeksi 5) - UUSI VAIHE
            expectedInput: "jotain uutta", // Esimerkki uudesta vaiheesta
            responseMessage: "vieläkään ei osunut, voisiko ratkaisu olla jokin muu",
            promptForNext: "alkaako ideat oikeasta jo loppumaan?"
        },

        {
            // Vaihe 7 (indeksi 6) - Alkuperäinen viimeinen "oikea"
            expectedInput: "jokin muu", // Tai vaihda tämä loogisemmaksi, esim. "ratkaisu"
            responseMessage: "Sait kaikki Oikein! Kirjoita chekkeriin \"minä tiesin salasanan\".",
            promptForNext: "Valmista! Arvoitus ratkaistu." // Viesti kun kaikki on valmista
        }
    ]
};
