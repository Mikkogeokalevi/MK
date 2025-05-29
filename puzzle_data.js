// puzzle_data.js

const puzzleSetup = {
    initialPrompt: "Mistä kaikki alkaa? Kirjoita ensimmäinen vihje:", // Aloitusviesti käyttäjälle
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.", // Viesti väärästä syötteestä
    steps: [
        {
            // Vaihe 1 (indeksi 0)
            expectedInput: "salasana",
            responseMessage: "Salasana on väärin.",
            promptForNext: "kuva01.jpg" // Ensimmäinen kuva
        },
        {
            // Vaihe 2 (indeksi 1)
            expectedInput: "väärin",
            responseMessage: "Kokeile uudestaan",
            promptForNext: "kuva02.jpg"
        },
        {
            // Vaihe 3 (indeksi 2)
            expectedInput: "uudestaan",
            responseMessage: "Salasana on edelleen väärin",
            promptForNext: "kuva03.jpg"
        },
        {
            // Vaihe 4 (indeksi 3)
            expectedInput: "edelleen väärin",
            responseMessage: "Melkein perillä, anna seuraava:",
            promptForNext: "kuva04.jpg"
        },
        {
            // Vaihe 5 (indeksi 4)
            expectedInput: "seuraava",
            responseMessage: "Kirjoita viimeinen sana, ennen ratkaisua:",
            promptForNext: "kuva05.jpg"
        },
        {
            // Vaihe 6 (indeksi 5)
            expectedInput: "viimeinen sana",
            responseMessage: "Hienoa! Olet löytänyt ensimmäisen ratkaisun. Mikä on geokätköilijän paras ystävä?",
            promptForNext: "kuva06.jpg"
        },
        {
            // Vaihe 7 (indeksi 6)
            expectedInput: "gps",
            responseMessage: "Juuri niin! GPS ohjaa meitä. Entä ilman mitä emme kätköile edes GPS:n kanssa?",
            promptForNext: "kuva07.jpg"
        },
        {
            // Vaihe 8 (indeksi 7)
            expectedInput: "patte",
            responseMessage: "Akku on tärkeä. Mikä on kätköilijän piilotettu aarre, joka odottaa löytäjäänsä?",
            promptForNext: "kuva08.jpg"
        },
        {
            // Vaihe 9 (indeksi 8)
            expectedInput: "lokikirja",
            responseMessage: "Oikein! Lokikirja sisältää tarinoita. Mikä on viimeinen sana ennen finaalia?",
            promptForNext: "kuva09.jpg"
        },
        {
            // Vaihe 10 (indeksi 9) - Loppuratkaisu (EI KUVA, VAAN TEKSTI)
            expectedInput: "finaali",
            responseMessage: "Erinomaista työtä! Olet ratkaissut tämän mysteerin! Kirjoita chekkeriin \"geokätköilijä on nero\".",
            promptForNext: "Onneksi olkoon, tehtävä suoritettu!" // Teksti
        }
    ]
};
