const puzzleSetup = {
    initialPrompt: "kirjoita salasana",
    wrongInputMessage: "Väärin meni! Yritä uudelleen.",
    finalFailMessage: "Väärin meni liian monta kertaa! Palataan alkuun.",
    
    // codeString obfuskoitu jakamalla useampaan String.fromCharCode-kutsuun
    codeString: (() => {
        const p1 = String.fromCharCode(55, 71, 75, 80);
        const p2 = String.fromCharCode(52, 88, 68, 77);
        const p3 = String.fromCharCode(56, 51, 81, 89);
        const p4 = String.fromCharCode(85, 90, 78, 86);
        const p5 = String.fromCharCode(84, 57, 67, 50);
        const p6 = String.fromCharCode(82, 87, 65, 69);
        const p7 = String.fromCharCode(72, 70, 74, 66);
        const p8 = String.fromCharCode(75, 77, 84, 71);
        const p9 = String.fromCharCode(56, 69, 57, 68);
        return p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
    })(),

    // Loppuviestin salaus XOR-algoritmilla
    // Viesti ja avain ovat String.fromCharCode-muodossa, mutta piilotettuna anon-funktion sisään
    encryptedFinalMessage: (() => {
        const msg = String.fromCharCode(69, 114, 105, 110, 111, 109, 97, 105, 115, 116, 97, 32, 116, 121, 246, 116, 228, 33, 32, 79, 108, 101, 116, 32, 114, 97, 116, 107, 97, 105, 115, 115, 117, 108, 108, 117, 116, 32, 107, 97, 105, 107, 105, 32, 107, 117, 118, 97, 116, 32, 106, 97, 32, 108, 111, 112, 112, 117, 107, 121, 115, 121, 109, 121, 107, 115, 101, 110, 33, 32, 75, 105, 114, 106, 111, 105, 116, 97, 32, 99, 104, 101, 107, 107, 101, 114, 105, 105, 110, 32, 34, 103, 101, 111, 107, 228, 116, 107, 111, 105, 108, 105, 106, 228, 32, 111, 110, 32, 110, 101, 114, 111, 34, 46);
        const key = String.fromCharCode(71, 101, 111, 67, 97, 99, 104, 101); // "GeoCache"
        let encrypted = [];
        for (let i = 0; i < msg.length; i++) {
            encrypted.push(msg.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return encrypted;
    })(),

    steps: [
        {
            expectedInput: (() => String.fromCharCode(115, 97, 108, 97, 115, 97, 110, 97))(),
            responseMessage: "Oikein! Tässä ensimmäinen kuva-arvoitus:",
            challengeText: null, // InitialPrompt näytetään nyt automaattisesti initializePuzzle-funktiossa, joten tämä voi olla null.
            challengeImage: null,
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "ja" + "lka" + String.fromCharCode(114, 97, 110) + "ta")(),
            responseMessage: "Hienoa! Jatka seuraavaan:",
            challengeText: "Kirjoita kuvasta selviävä kaupunginosa:",
            challengeImage: "01.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => String.fromCharCode(228, 109, 109, 228, 108, 228))(),
            responseMessage: "Hyvin menee! Tässä seuraava:",
            challengeText: "Mikä kaupunginosa kuvassa on:",
            challengeImage: "02.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => String.fromCharCode(107, 111, 116, 116, 101, 114, 111))(),
            responseMessage: "Loistavaa! Seuraava odottaa:",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "03.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "ku" + String.fromCharCode(107, 111) + "nk" + "oivu")(),
            responseMessage: "Melkein perillä! Tässä vielä ainakin yksi:",
            challengeText: "Mistä päin kaupunkia tämä kuva on:",
            challengeImage: "04.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "radio" + String.fromCharCode(109, 228, 107, 105))(),
            responseMessage: "Hienoa!",
            challengeText: "Kaupunginosa kuvassa:",
            challengeImage: "05.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "joki" + String.fromCharCode(109, 97, 97))(),
            responseMessage: "Jatka samaan malliin!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "06.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "karju" + "saari")(),
            responseMessage: "Se alkaa olla hallussa!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "07.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => String.fromCharCode(107, 101, 105, 106, 117) + "puisto")(),
            responseMessage: "Loistavaa!",
            challengeText: "Tämä kaupunginosa on:",
            challengeImage: "08.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "lepo" + String.fromCharCode(110, 105, 101, 109, 105))(),
            responseMessage: "Hyvä!",
            challengeText: "Kaupunginosa?:",
            challengeImage: "09.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "metsä" + String.fromCharCode(107, 97, 110, 103, 97, 115))(),
            responseMessage: "Puolivälikö häämöttää vai montako näitä on! ",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "10.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => String.fromCharCode(112, 97, 116, 111, 105, 105, 116, 116, 121))(),
            responseMessage: "Et ole yksin!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "11.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "ko" + String.fromCharCode(108, 97, 118, 97))(),
            responseMessage: "Hyvin vedetty!",
            challengeText: "missä kaupunginosassa olla tässä:",
            challengeImage: "12.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => String.fromCharCode(107, 111, 105, 118) + "ukumpu")(),
            responseMessage: "Mahtavaa!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "13.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "vene" + String.fromCharCode(116, 115, 105, 97))(),
            responseMessage: "Vielä jaksaa! ",
            challengeText: "Missä olemme tässä:",
            challengeImage: "14.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => String.fromCharCode(115, 121, 100, 228, 110, 107, 97, 110, 103, 97, 115))(),
            responseMessage: "Kohta valmis! ehkä?",
            challengeText: "Tämäkin kaupunginosa tarvitaan jotta pääsee eteenpäin:",
            challengeImage: "15.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "pesä" + String.fromCharCode(107, 97, 108, 108, 105, 111))(),
            responseMessage: "Enää muutamia!",
            challengeText: "Kaupunginosa:",
            challengeImage: "16.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "vartio" + String.fromCharCode(108, 97, 97, 107, 115, 111))(),
            responseMessage: "Melkein perillä!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "17.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => String.fromCharCode(107, 117, 107, 111, 110) + "koski")(),
            responseMessage: "Viimeiset vedot! ",
            challengeText: "Missä kaupungiosassa olla tässä:",
            challengeImage: "18.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => "mylly" + String.fromCharCode(112, 111, 104, 106, 97))(),
            responseMessage: "Viimeinen kuva-arvoitus kohta?!",
            challengeText: "Kaupunginosa :",
            challengeImage: "19.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            expectedInput: (() => String.fromCharCode(107, 117, 117, 115, 105, 110, 105, 105, 116, 116, 121))(),
            responseMessage: "Joko tämä jo olis tässä?",
            challengeText: "Kaupunginosa:",
            challengeImage: "20.jpg",
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        },
        {
            // Viimeinen vaihe: expectedInput on codeString itself
            expectedInput: () => puzzleSetup.codeString, 
            responseMessage: (() => {
                const encrypted = puzzleSetup.encryptedFinalMessage;
                const key = String.fromCharCode(71, 101, 111, 67, 97, 99, 104, 101); // "GeoCache"
                let decrypted = [];
                for (let i = 0; i < encrypted.length; i++) {
                    decrypted.push(String.fromCharCode(encrypted[i] ^ key.charCodeAt(i % key.length)));
                }
                return decrypted.join('');
            })(),
            challengeText: "Syötä keräämäsi koodisarja (Koodi: XX -merkinnän jälkeen) tähän ilman välilyöntejä. Saat chekkeriohjeen.",
            challengeImage: null,
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
        }
    ]
};
