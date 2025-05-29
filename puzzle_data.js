// puzzle_data.js

const puzzleSetup = {
    initialPrompt: "Mistä kaikki alkaa? Kirjoita ensimmäinen vihje:", // Aloitusviesti käyttäjälle
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.", // Viesti väärästä syötteestä
    steps: [
        {
            // Vaihe 1 (indeksi 0)
            expectedInput: "sa" + "lasana", // Koodattu
            responseMessage: "Salasana on väärin.",
            imagePrompt: "kuva01.jpg" // Ensimmäinen kuva
        },
        {
            // Vaihe 2 (indeksi 1)
            expectedInput: String.fromCharCode(118, 228, 228, 114, 105, 110), // "väärin" - Koodattu
            responseMessage: "Kokeile uudestaan",
            imagePrompt: "kuva02.jpg"
        },
        {
            // Vaihe 3 (indeksi 2)
            expectedInput: atob("dXVkZXN0YWFhbg=="), // "uudestaan" - Koodattu
            responseMessage: "Salasana on edelleen väärin",
            imagePrompt: "kuva03.jpg"
        },
        {
            // Vaihe 4 (indeksi 3)
            expectedInput: "edelle" + "en vää" + "rin", // Koodattu
            responseMessage: "Melkein perillä, anna seuraava:",
            imagePrompt: "kuva04.jpg"
        },
        {
            // Vaihe 5 (indeksi 4)
            expectedInput: ['s', 'e', 'u', 'r', 'a', 'a', 'v', 'a'].join(''), // "seuraava" - Koodattu
            responseMessage: "Kirjoita viimeinen sana, ennen ratkaisua:",
            imagePrompt: "kuva05.jpg"
        },
        {
            // Vaihe 6 (indeksi 5)
            expectedInput: "viimeinen" + " sana", // Koodattu
            responseMessage: "Hienoa! Olet löytänyt ensimmäisen ratkaisun. Mikä on geokätköilijän paras ystävä?",
            imagePrompt: "kuva06.jpg"
        },
        {
            // Vaihe 7 (indeksi 6)
            expectedInput: "gps", // Vastaus edelliseen kysymykseen
            responseMessage: "Juuri niin! GPS ohjaa meitä. Entä ilman mitä emme kätköile edes GPS:n kanssa?",
            imagePrompt: "kuva07.jpg"
        },
        {
            // Vaihe 8 (indeksi 7)
            expectedInput: "patte", // tai esim. "paristot", "energia" jne.
            responseMessage: "Akku on tärkeä. Mikä on kätköilijän piilotettu aarre, joka odottaa löytäjäänsä?",
            imagePrompt: "kuva08.jpg"
        },
        {
            // Vaihe 9 (indeksi 8)
            expectedInput: "lokikirja",
            responseMessage: "Oikein! Lokikirja sisältää tarinoita. Mikä on viimeinen sana ennen finaalia?",
            imagePrompt: "kuva09.jpg"
        },
        {
            // Vaihe 10 (indeksi 9) - Loppuratkaisu (EI KUVA, VAAN TEKSTI)
            expectedInput: "finaali",
            responseMessage: "Erinomaista työtä! Olet ratkaissut tämän mysteerin! Kirjoita chekkeriin \"" + btoa("geokätköilijä on nero") + "\" ja purkaa se.", // Koodattu
            imagePrompt: null // Ei kuvaa viimeisessä vaiheessa, tässä voi olla null tai undefined
        }
    ]
};
