// puzzle_data.js - "Salattu" versio (kommentit siistitty, lisätty väärien vastausten laskurit ja koodinpätkät)

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana",
    wrongInputMessage: "Väärin meni! Yritä uudelleen.",
    finalFailMessage: "Väärin meni liian monta kertaa! Palataan alkuun.",
    codeString: "7GKP4XDM83QYUZNVT9C2RWAEHFJBKMTG8E9D", // UUSI KENTTÄ: Kokonainen koodimerkkijono
    steps: [
        {
            // Vaihe 1
            expectedInput: (() => String.fromCharCode(115, 97, 108, 97, 115, 97, 110, 97))(),
            responseMessage: "Oikein! Tässä ensimmäinen kuva-arvoitus:",
            challengeText: null,
            challengeImage: null,
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null // Ei koodia tähän vaiheeseen
        },
        {
            // Vaihe 2 (Ensimmäinen kuva, alkaa koodinpätkien antamisen)
            expectedInput: (() => "ja" + "lka" + String.fromCharCode(114, 97, 110) + "ta")(),
            responseMessage: "Hienoa! Jatka seuraavaan:",
            challengeText: "Kirjoita kuvasta selviävä kaupunginosa:",
            challengeImage: "01.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null // Tämä koodinpätkä lisätään vasta kun on vastattu OIKEIN tähän vaiheeseen
                               // ja siirrytään SEURAAVAAN vaiheeseen (Vaihe 3).
                               // Tämän takia koodin lisäys tapahtuu responseMessage-käsittelyssä.
        },
        {
            // Vaihe 3
            expectedInput: (() => String.fromCharCode(228, 109, 109, 228, 108, 228))(),
            responseMessage: "Hyvin menee! Tässä seuraava:",
            challengeText: "Mikä kaupunginosa kuvassa on:",
            challengeImage: "02.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 4
            expectedInput: (() => String.fromCharCode(107, 111, 116, 116, 101, 114, 111))(),
            responseMessage: "Loistavaa! Seuraava odottaa:",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "03.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 5
            expectedInput: (() => "ku" + String.fromCharCode(107, 111) + "nk" + "oivu")(),
            responseMessage: "Melkein perillä! Tässä vielä ainakin yksi:",
            challengeText: "Mistä päin kaupunkia tämä kuva on:",
            challengeImage: "04.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 6
            expectedInput: (() => "radio" + String.fromCharCode(109, 228, 107, 105))(),
            responseMessage: "Hienoa!",
            challengeText: "Kaupunginosa kuvassa:",
            challengeImage: "05.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 7
            expectedInput: (() => "joki" + String.fromCharCode(109, 97, 97))(),
            responseMessage: "Jatka samaan malliin!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "06.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 8
            expectedInput: (() => "karju" + "saari")(),
            responseMessage: "Se alkaa olla hallussa!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "07.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 9
            expectedInput: (() => String.fromCharCode(107, 101, 105, 106, 117) + "puisto")(),
            responseMessage: "Loistavaa!",
            challengeText: "Tämä kaupunginosa on:",
            challengeImage: "08.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 10
            expectedInput: (() => "lepo" + String.fromCharCode(110, 105, 101, 109, 105))(),
            responseMessage: "Hyvä!",
            challengeText: "Kaupunginosa?:",
            challengeImage: "09.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 11
            expectedInput: (() => "metsä" + String.fromCharCode(107, 97, 110, 103, 97, 115))(),
            responseMessage: "Puolivälikö häämöttää vai montako näitä on! ",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "10.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 12
            expectedInput: (() => String.fromCharCode(112, 97, 116, 111, 110, 105, 105, 116, 116, 121))(),
            responseMessage: "Et ole yksin!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "11.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 13
            expectedInput: (() => "ko" + String.fromCharCode(108, 97, 118, 97))(),
            responseMessage: "Hyvin vedetty!",
            challengeText: "missä kaupunginosassa olla tässä:",
            challengeImage: "12.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 14
            expectedInput: (() => String.fromCharCode(107, 111, 105, 118) + "ukumpu")(),
            responseMessage: "Mahtavaa!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "13.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 15
            expectedInput: (() => "vene" + String.fromCharCode(116, 115, 105, 97))(),
            responseMessage: "Vielä jaksaa! ",
            challengeText: "Missä olemme tässä:",
            challengeImage: "14.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 16
            expectedInput: (() => String.fromCharCode(115, 121, 100, 228, 110, 107, 97, 110, 103, 97, 115))(),
            responseMessage: "Kohta valmis! ehkä?",
            challengeText: "Tämäkin kaupunginosa tarvitaan jotta pääsee eteenpäin:",
            challengeImage: "15.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 17
            expectedInput: (() => "pesä" + String.fromCharCode(107, 97, 108, 108, 105, 111))(),
            responseMessage: "Enää muutamia!",
            challengeText: "Kaupunginosa:",
            challengeImage: "16.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 18
            expectedInput: (() => "vartio" + String.fromCharCode(108, 97, 97, 107, 115, 111))(),
            responseMessage: "Melkein perillä!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "17.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 19
            expectedInput: (() => String.fromCharCode(107, 117, 107, 111, 110) + "koski")(),
            responseMessage: "Viimeiset vedot! ",
            challengeText: "Missä kaupungiosassa olla tässä:",
            challengeImage: "18.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 20
            expectedInput: (() => "mylly" + String.fromCharCode(112, 111, 104, 106, 97))(),
            responseMessage: "Viimeinen kuva-arvoitus kohta?!",
            challengeText: "Kaupunginosa :",
            challengeImage: "19.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 21
            expectedInput: (() => String.fromCharCode(107, 117, 117, 115, 105, 110, 105, 105, 116, 116, 121))(),
            responseMessage: "Joko tämä jo olis tässä?",
            challengeText: "Kaupunginosa:",
            challengeImage: "20.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2,
            codeSnippet: null
        },
        {
            // Vaihe 22 (Loppuviesti ja loppusalasana)
            // Koodinpätkän kokoaminen tapahtuu nyt tässä vaiheessa viimeisenä vastauksena
            expectedInput: (() => String.fromCharCode(55, 71, 75, 80, 52, 88, 68, 77, 56, 51, 81, 89, 85, 90, 78, 86, 84, 57, 67, 50, 82, 87, 65, 69, 72, 70, 74, 66, 75, 77, 84, 71, 56, 69, 57, 68))(), // "7GKP4XDM83QYUZNVT9C2RWAEHFJBKMTG8E9D" salattuna
            responseMessage: (() => {
                const p1 = String.fromCharCode(69, 114, 105, 110, 111, 109, 97, 105, 115, 116, 97); // "Erinomaista"
                const p2 = " työtä! Olet ratkaissut kaikki kuvat ja loppukysymyksen! ";
                const p3 = String.fromCharCode(75, 105, 114, 106, 111, 105, 116, 97, 32, 99, 104, 101, 107, 107, 101, 114, 105, 105, 110, 32, 34, 103, 101, 111, 107, 228, 116, 107, 111, 105, 108, 105, 106, 228, 32, 111, 110, 32, 110, 101, 114, 111, 34, 46); // "Kirjoita chekkeriin \"geokätköilijä on nero\"."
                return p1 + p2 + p3;
            })(),
            challengeText: "Syötä vielä viimeiseksi numero / kirjain sarja minkä sait edellä kuvien ratkaisuista ilman välilyöntiä jotta saat tiedon mitä syöttää chekkeriin.", // UUSI TEKSTI
            challengeImage: null,
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        }
    ]
};
