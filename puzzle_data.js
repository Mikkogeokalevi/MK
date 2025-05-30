// puzzle_data.js - Vahvemmin obfuskoitu versio (numerot ja loppuviesti piilotettu)

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana",
    wrongInputMessage: "Väärin meni! Yritä uudelleen.",
    finalFailMessage: "Väärin meni liian monta kertaa! Palataan alkuun.",
    
    // Monimutkaistettu codeStringin luominen
    codeString: (() => {
        const parts = [
            [70 + 5, 70 + 1, 70 + 5, 70 + 10], // 75, 71, 75, 80
            [40 + 12, 80 - 12, 60 + 8, 70 + 7], // 52, 68, 68, 77
            [80 - 24, 80 + 3, 80 + 9, 80 + 9], // 56, 83, 89, 89
            [80 + 5, 70 + 8, 70 + 8, 80 + 4], // 85, 78, 78, 84
            [50 + 9, 60 + 7, 70 - 28, 80 - 1], // 59, 67, 52, 79
            [80 - 8, 60 + 6, 70 + 10, 70 + 14], // 72, 66, 80, 84
            [70 + 10, 80 - 2, 70 + 20, 80 - 3], // 80, 78, 90, 77
            [70 + 14, 70 + 4, 80 - 2, 80 - 11], // 84, 74, 78, 69
            [80 - 1, 70 + 6, 80 - 11, 80 + 1] // 79, 76, 69, 81
        ];
        let result = [];
        for (let i = 0; i < parts.length; i++) {
            for (let j = 0; j < parts[i].length; j++) {
                result.push(String.fromCharCode(parts[i][j]));
            }
        }
        return result.join('');
    })(),

    // Salattu loppuviesti (Erinomaista... chekkeriohje)
    // XOR-salaus yksinkertaisuuden vuoksi.
    // Avain on myös salattu, jotta sitä ei ole helppo nähdä.
    // HUOM: Tämä on edelleen yksinkertainen salaus, ei murtautumaton.
    encryptedFinalMessage: (() => {
        const msg = "Erinomaista työtä! Olet ratkaissut kaikki kuvat ja loppukysymyksen! Kirjoita chekkeriin \"geokätköilijä on nero\".";
        const key = String.fromCharCode(71, 101, 111, 67, 97, 99, 104, 101); // "GeoCache"
        let encrypted = [];
        for (let i = 0; i < msg.length; i++) {
            encrypted.push(msg.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return encrypted;
    })(),

    steps: [
        {
            // Vaihe 1
            expectedInput: (() => String.fromCharCode(115, 97, 108, 97, 115, 97, 110, 97))(),
            responseMessage: "Oikein! Tässä ensimmäinen kuva-arvoitus:",
            challengeText: null,
            challengeImage: null,
            wrongAttemptsMade: 0,
            maxWrongAttempts: 2
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
            expectedInput: (() => String.fromCharCode(112, 97, 116, 111, 105, 105, 116, 116, 121))(), // Korjattu (patoniitty)
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
            // expectedInput on codeString itse, haetaan suoraan codeString-kentästä
            expectedInput: (() => puzzleSetup.codeString)(), // Otetaan nyt suoraan yllä luotu obfuskoitu string
            responseMessage: (() => {
                const encrypted = puzzleSetup.encryptedFinalMessage;
                const key = String.fromCharCode(71, 101, 111, 67, 97, 99, 104, 101); // Sama avain kuin salauksessa
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
