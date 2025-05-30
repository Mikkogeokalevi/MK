// puzzle_data.js - "Salattu" versio (kommentit siistitty, lisätty väärien vastausten laskurit)

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana",
    wrongInputMessage: "Väärin meni! Yritä uudelleen.", // Muutettu viestiä selkeämmäksi
    finalFailMessage: "Väärin meni liian monta kertaa! Palataan alkuun.", // Uusi viesti, kun menee alkuun
    steps: [
        {
            // Vaihe 1
            expectedInput: (() => String.fromCharCode(115, 97, 108, 97, 115, 97, 110, 97))(),
            responseMessage: "Oikein! Tässä ensimmäinen kuva-arvoitus:",
            challengeText: null,
            challengeImage: null,
            wrongAttemptsMade: 0, // UUSI KENTTÄ: Tämänhetkiset väärät yritykset tähän vaiheeseen
            maxWrongAttempts: 2 // UUSI KENTTÄ: Sallittujen väärien yritysten enimmäismäärä ennen nollausta
        },
        {
            // Vaihe 2
            expectedInput: (() => "ja" + "lka" + String.fromCharCode(114, 97, 110) + "ta")(),
            responseMessage: "Hienoa! Jatka seuraavaan:",
            challengeText: "Kirjoita kuvasta selviävä kaupunginosa:",
            challengeImage: "01.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 3
            expectedInput: (() => String.fromCharCode(228, 109, 109, 228, 108, 228))(),
            responseMessage: "Hyvin menee! Tässä seuraava:",
            challengeText: "Mikä kaupunginosa kuvassa on:",
            challengeImage: "02.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 4
            expectedInput: (() => String.fromCharCode(107, 111, 116, 116, 101, 114, 111))(),
            responseMessage: "Loistavaa! Seuraava odottaa:",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "03.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 5
            expectedInput: (() => "ku" + String.fromCharCode(107, 111) + "nk" + "oivu")(),
            responseMessage: "Melkein perillä! Tässä vielä ainakin yksi:",
            challengeText: "Mistä päin kaupunkia tämä kuva on:",
            challengeImage: "04.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 6
            expectedInput: (() => "radio" + String.fromCharCode(109, 228, 107, 105))(),
            responseMessage: "Hienoa!",
            challengeText: "Kaupunginosa kuvassa:",
            challengeImage: "05.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 7
            expectedInput: (() => "joki" + String.fromCharCode(109, 97, 97))(),
            responseMessage: "Jatka samaan malliin!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "06.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 8
            expectedInput: (() => "karju" + "saari")(),
            responseMessage: "Se alkaa olla hallussa!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "07.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 9
            expectedInput: (() => String.fromCharCode(107, 101, 105, 106, 117) + "puisto")(),
            responseMessage: "Loistavaa!",
            challengeText: "Tämä kaupunginosa on:",
            challengeImage: "08.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 10
            expectedInput: (() => "lepo" + String.fromCharCode(110, 105, 101, 109, 105))(),
            responseMessage: "Hyvä!",
            challengeText: "Kaupunginosa?:",
            challengeImage: "09.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 11
            expectedInput: (() => "metsä" + String.fromCharCode(107, 97, 110, 103, 97, 115))(),
            responseMessage: "Puolivälikö häämöttää vai montako näitä on! ",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "10.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 12
            expectedInput: (() => String.fromCharCode(112, 97, 116, 111, 110, 105, 105, 116, 116, 121))(),
            responseMessage: "Et ole yksin!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "11.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 13
            expectedInput: (() => "ko" + String.fromCharCode(108, 97, 118, 97))(),
            responseMessage: "Hyvin vedetty!",
            challengeText: "missä kaupunginosassa olla tässä:",
            challengeImage: "12.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 14
            expectedInput: (() => String.fromCharCode(107, 111, 105, 118) + "ukumpu")(),
            responseMessage: "Mahtavaa!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "13.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 15
            expectedInput: (() => "vene" + String.fromCharCode(116, 115, 105, 97))(),
            responseMessage: "Vielä jaksaa! ",
            challengeText: "Missä olemme tässä:",
            challengeImage: "14.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 16
            expectedInput: (() => String.fromCharCode(115, 121, 100, 228, 110, 107, 97, 110, 103, 97, 115))(),
            responseMessage: "Kohta valmis! ehkä?",
            challengeText: "Tämäkin kaupunginosa tarvitaan jotta pääsee eteenpäin:",
            challengeImage: "15.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 17
            expectedInput: (() => "pesä" + String.fromCharCode(107, 97, 108, 108, 105, 111))(),
            responseMessage: "Enää muutamia!",
            challengeText: "Kaupunginosa:",
            challengeImage: "16.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 18
            expectedInput: (() => "vartio" + String.fromCharCode(108, 97, 97, 107, 115, 111))(),
            responseMessage: "Melkein perillä!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "17.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 19
            expectedInput: (() => String.fromCharCode(107, 117, 107, 111, 110) + "koski")(),
            responseMessage: "Viimeiset vedot! ",
            challengeText: "Missä kaupungiosassa olla tässä:",
            challengeImage: "18.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 20
            expectedInput: (() => "mylly" + String.fromCharCode(112, 111, 104, 106, 97))(),
            responseMessage: "Viimeinen kuva-arvoitus kohta?!",
            challengeText: "Kaupunginosa :",
            challengeImage: "19.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 21
            expectedInput: (() => String.fromCharCode(107, 117, 117, 115, 105, 110, 105, 105, 116, 116, 121))(),
            responseMessage: "Joko tämä jo olis tässä?",
            challengeText: "Kaupunginosa:",
            challengeImage: "20.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Vaihe 22 (Loppuviesti ja loppusalasana)
            expectedInput: (() => String.fromCharCode(109, 105, 107, 107, 111, 107, 97, 108, 101, 118, 105))(),
            responseMessage: (() => {
                const p1 = String.fromCharCode(69, 114, 105, 110, 111, 109, 97, 105, 115, 116, 97);
                const p2 = " työtä! Olet ratkaissut kaikki kuvat ja loppukysymyksen! ";
                const p3 = String.fromCharCode(75, 105, 114, 106, 111, 105, 116, 97, 32, 99, 104, 101, 107, 107, 101, 114, 105, 105, 110, 32, 34, 103, 101, 111, 107, 228, 116, 107, 111, 105, 108, 105, 106, 228, 32, 111, 110, 32, 110, 101, 114, 111, 34, 46);
                return p1 + p2 + p3;
            })(),
            challengeText: "Onneksi olkoon, kaikki tehtävät suoritettu! Kirjoita vielä että kenen mysteeri tämä, saadaksesi vastauksen chekkerille!",
            challengeImage: null,
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2 // Voit halutessasi laittaa tähän 0, jos haluat että viimeinen vaihe nollaa heti väärästä.
        }
    ]
};
