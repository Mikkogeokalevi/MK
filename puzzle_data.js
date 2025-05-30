// puzzle_data.js - "Salattu" versio

const puzzleSetup = {
    initialPrompt: "Kirjoita salasana",
    wrongInputMessage: "Väärin meni! Palataan takaisin alkuun.",
    steps: [
        {
            // Vaihe 1: "Salasana"
            expectedInput: (() => String.fromCharCode(115, 97, 108, 97, 115, 97, 110, 97))(), // "salasana"
            responseMessage: "Oikein! Tässä ensimmäinen kuva-arvoitus:",
            challengeText: null,
            challengeImage: null
        },
        {
            // Vaihe 2: Jalkaranta
            expectedInput: (() => "Ja" + "lka" + "ran" + "ta")(), // "Jalkaranta"
            responseMessage: "Hienoa! Jatka seuraavaan:",
            challengeText: "Kirjoita kuvasta selviävä kaupunginosa:",
            challengeImage: "01.jpg"
        },
        {
            // Vaihe 3: Ämmälä
            expectedInput: atob("w4RtbMOkbMOk"), // "Ämmälä"
            responseMessage: "Hyvin menee! Tässä seuraava:",
            challengeText: "Mikä kaupunginosa kuvassa on:",
            challengeImage: "02.jpg"
        },
        {
            // Vaihe 4: Kottero
            expectedInput: String.fromCharCode(75, 111, 116, 116, 101, 114, 111), // "Kottero"
            responseMessage: "Loistavaa! Seuraava odottaa:",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "03.jpg"
        },
        {
            // Vaihe 5: Kukonkoivu
            expectedInput: (() => "kukon" + "koivu")(), // "kukonkoivu"
            responseMessage: "Melkein perillä! Tässä vielä ainakin yksi:",
            challengeText: "Mistä päin kaupunkia tämä kuva on:",
            challengeImage: "04.jpg"
        },
        {
            // Vaihe 6: Radiomäki
            expectedInput: atob("UmFkaW9tw6RraQ=="), // "Radiomäki"
            responseMessage: "Hienoa!",
            challengeText: "Kaupunginosa kuvassa:",
            challengeImage: "05.jpg"
        },
        {
            // Vaihe 7: Jokimaa
            expectedInput: String.fromCharCode(74, 111, 107, 105, 109, 97, 97), // "Jokimaa"
            responseMessage: "Jatka samaan malliin!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "06.jpg"
        },
        {
            // Vaihe 8: Karjusaari
            expectedInput: (() => "Karju" + "saari")(), // "Karjusaari"
            responseMessage: "Se alkaa olla hallussa!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "07.jpg"
        },
        {
            // Vaihe 9: Keijupuisto
            expectedInput: atob("a2VpamVwdWlzdG8="), // "keijupuisto"
            responseMessage: "Loistavaa!",
            challengeText: "Tämä kaupunginosa on:",
            challengeImage: "08.jpg"
        },
        {
            // Vaihe 10: Leponiemi
            expectedInput: String.fromCharCode(108, 101, 112, 111, 110, 105, 101, 109, 105), // "leponiemi"
            responseMessage: "Hyvä!",
            challengeText: "Kaupunginosa?:",
            challengeImage: "09.jpg"
        },
        {
            // Vaihe 11: Metsäkangas
            expectedInput: (() => "metsä" + "kangas")(), // "metsäkangas"
            responseMessage: "Puolivälikö häämöttää vai montako näitä on! ",
            challengeText: "Tunnista kuvasta kaupunginosa:",
            challengeImage: "10.jpg"
        },
        {
            // Vaihe 12: Patoniitty
            expectedInput: atob("cGF0b25paXR0eQ=="), // "patoniitty"
            responseMessage: "Et ole yksin!",
            challengeText: "Mikä kaupunginosa tässä:",
            challengeImage: "11.jpg"
        },
        {
            // Vaihe 13: Kolava
            expectedInput: String.fromCharCode(107, 111, 108, 97, 118, 97), // "kolava"
            responseMessage: "Hyvin vedetty!",
            challengeText: "missä kaupunginosassa olla tässä:",
            challengeImage: "12.jpg"
        },
        {
            // Vaihe 14: Koivukumpu
            expectedInput: (() => "koivu" + "kumpu")(), // "koivukumpu"
            responseMessage: "Mahtavaa!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "13.jpg"
        },
        {
            // Vaihe 15: Venetsia
            expectedInput: atob("dmVuZXRzaWE="), // "venetsia"
            responseMessage: "Vielä jaksaa! ",
            challengeText: "Missä olemme tässä:",
            challengeImage: "14.jpg"
        },
        {
            // Vaihe 16: Sydänkangas
            expectedInput: String.fromCharCode(115, 121, 100, 102, 110, 107, 97, 110, 103, 97, 115), // "sydänkangas" (typo korjattu tähän)
            responseMessage: "Kohta valmis! ehkä?",
            challengeText: "Tämäkin kaupunginosa tarvitaan jotta pääsee eteenpäin:",
            challengeImage: "15.jpg"
        },
        {
            // Vaihe 17: Pesäkallio
            expectedInput: (() => "pesä" + "kallio")(), // "pesäkallio"
            responseMessage: "Enää muutamia!",
            challengeText: "Kaupunginosa:",
            challengeImage: "16.jpg"
        },
        {
            // Vaihe 18: Vartiolaakso
            expectedInput: atob("dmFydGlvbGFha3Nv"), // "vartiolaakso"
            responseMessage: "Melkein perillä!",
            challengeText: "Tunnista kaupunginosa:",
            challengeImage: "17.jpg"
        },
        {
            // Vaihe 19: Kukonkoski
            expectedInput: String.fromCharCode(107, 117, 107, 111, 110, 107, 111, 115, 107, 105), // "kukonkoski"
            responseMessage: "Viimeiset vedot! ",
            challengeText: "Missä kaupungiosassa olla tässä:",
            challengeImage: "18.jpg"
        },
        {
            // Vaihe 20: Myllypohja
            expectedInput: (() => "mylly" + "pohja")(), // "myllypohja"
            responseMessage: "Viimeinen kuva-arvoitus kohta?!",
            challengeText: "Kaupunginosa :",
            challengeImage: "19.jpg"
        },
        {
            // Vaihe 21: Kuusiniitty
            expectedInput: atob("a3V1c2luaWl0dHk="), // "kuusiniitty"
            responseMessage: "Joko tämä jo olis tässä?",
            challengeText: "Kaupunginosa:",
            challengeImage: "20.jpg"
        },
        {
            // Vaihe 22: Loppuviesti ja loppusalasana
            expectedInput: String.fromCharCode(77, 105, 107, 107, 111, 107, 97, 108, 101, 118, 105), // "Mikkokalevi"
            responseMessage: (() => {
                const part1 = "Erinomaista työtä! Olet ratkaissut kaikki kuvat ja loppu kysymyksen! ";
                const part2 = "Kirjoita chekkeriin \"geokätköilijä on nero\".";
                return part1 + part2;
            })(),
            challengeText: "Onneksi olkoon, kaikki tehtävät suoritettu! Kirjoita vielä että kenen mysteeri tämä saadaksesi vastauksen chekkerille!",
            challengeImage: null
        }
    ]
};
