// puzzle_data.js - Kevyesti "salattu" versio

// Tämä on salattu datamerkkijono. ÄLÄ MUOKKAA TÄTÄ SUORAAN.
// Jos haluat muokata arvoituksen sisältöä, katso ohjeet alla.
const encryptedData = "v4rtalainen_koodi_{'initialPrompt': 'Kirjoita salasana', 'wrongInputMessage': 'Väärin meni! Palataan takaisin alkuun.', 'steps': [ {'expectedInput': 'salasana', 'responseMessage': 'Oikein! Tässä ensimmäinen kuva-arvoitus:', 'challengeText': null, 'challengeImage': null }, {'expectedInput': 'jalkaranta', 'responseMessage': 'Hienoa! Jatka seuraavaan:', 'challengeText': 'Kirjoita kuvasta selviävä kaupunginosa:', 'challengeImage': 'jalkaranta.jpg' }, {'expectedInput': 'ammala', 'responseMessage': 'Hyvin menee! Tässä seuraava:', 'challengeText': 'Mikä kaupunginosa kuvassa on:', 'challengeImage': 'ammala.jpg' }, {'expectedInput': 'kottero', 'responseMessage': 'Loistavaa! Seuraava odottaa:', 'challengeText': 'Tunnista kuvasta kaupunginosa:', 'challengeImage': 'kottero.jpg' }, {'expectedInput': 'kukonkoivu', 'responseMessage': 'Melkein perillä! Tässä vielä ainakin yksi:', 'challengeText': 'Mistä päin kaupunkia tämä kuva on:', 'challengeImage': 'kukonkoivu.jpg' }, {'expectedInput': 'radiomaki', 'responseMessage': 'Hienoa!', 'challengeText': 'Kaupunginosa kuvassa:', 'challengeImage': 'radiomaki.jpg' }, {'expectedInput': 'jokimaa', 'responseMessage': 'Jatka samaan malliin!', 'challengeText': 'Tunnista kaupunginosa:', 'challengeImage': 'jokimaa.jpg' }, {'expectedInput': 'karjusaari', 'responseMessage': 'Se alkaa olla hallussa!', 'challengeText': 'Mikä kaupunginosa tässä:', 'challengeImage': 'karjusaari.jpg' }, {'expectedInput': 'keijupuisto', 'responseMessage': 'Loistavaa!', 'challengeText': 'Tämä kaupunginosa on:', 'challengeImage': 'keijupuisto.jpg' }, {'expectedInput': 'leponiemi', 'responseMessage': 'Hyvä!', 'challengeText': 'Kaupunginosa?:', 'challengeImage': 'leponiemi.jpg' }, {'expectedInput': 'metsakangas', 'responseMessage': 'Puolivälikö häämöttää vai montako näitä on!', 'challengeText': 'Tunnista kuvasta kaupunginosa:', 'challengeImage': 'metsakangas.jpg' }, {'expectedInput': 'patoniitty', 'responseMessage': 'Et ole yksin!', 'challengeText': 'Mikä kaupunginosa tässä:', 'challengeImage': 'patoniitty.jpg' }, {'expectedInput': 'kolava', 'responseMessage': 'Hyvin vedetty!', 'challengeText': 'Missä kaupunginosassa olla tässä:', 'challengeImage': 'kolava.jpg' }, {'expectedInput': 'koivukumpu', 'responseMessage': 'Mahtavaa!', 'challengeText': 'Tunnista kaupunginosa:', 'challengeImage': 'koivukumpu.jpg' }, {'expectedInput': 'venetsia', 'responseMessage': 'Vielä jaksaa!', 'challengeText': 'Missä olemme tässä:', 'challengeImage': 'venetsia.jpg' }, {'expectedInput': 'sydankangas', 'responseMessage': 'Kohta valmis! Ehkä?', 'challengeText': 'Tämäkin kaupunginosa tarvitaan jotta pääsee eteenpäin:', 'challengeImage': 'sydankangas.jpg' }, {'expectedInput': 'pesakallio', 'responseMessage': 'Enää muutamia!', 'challengeText': 'Kaupunginosa:', 'challengeImage': 'pesakallio.jpg' }, {'expectedInput': 'vartiolaakso', 'responseMessage': 'Melkein perillä!', 'challengeText': 'Tunnista kaupunginosa:', 'challengeImage': 'vartiolaakso.jpg' }, {'expectedInput': 'kukonkoski', 'responseMessage': 'Viimeiset vedot!', 'challengeText': 'Missä kaupunginosassa olla tässä:', 'challengeImage': 'kukonkoski.jpg' }, {'expectedInput': 'myllypohja', 'responseMessage': 'Viimeinen kuva-arvoitus kohta?!', 'challengeText': 'Kaupunginosa :', 'challengeImage': 'myllypohja.jpg' }, {'expectedInput': 'kuusiniitty', 'responseMessage': 'Joko tämä jo olis tässä?', 'challengeText': 'Kaupunginosa:', 'challengeImage': 'kuusiniitty.jpg' }, {'expectedInput': 'mikkokalevi', 'responseMessage': 'Erinomaista työtä! Olet ratkaissut kaikki kuvat ja loppukysymyksen! Kirjoita chekkeriin \"geokätköilijä on nero\".', 'challengeText': 'Onneksi olkoon, kaikki tehtävät suoritettu! Kirjoita vielä että kenen mysteeri tämä, saadaksesi vastauksen chekkerille!', 'challengeImage': null } ] }_loppu';

// Dekoodausfunktio
let puzzleSetup;
try {
    // Poistetaan "roska" merkkijonon alusta ja lopusta
    let cleanedData = encryptedData.replace("v4rtalainen_koodi_", "").replace("_loppu", "");

    // Korvataan single quotet double quoteilla JSON.parsea varten
    cleanedData = cleanedData.replace(/'/g, '"');

    // Parsitaan JSON-objektiksi
    puzzleSetup = JSON.parse(cleanedData);

} catch (e) {
    console.error("Virhe arvoituksen datan purkamisessa:", e);
    // Jos purkaminen epäonnistuu, asetetaan puzzleSetup undefinediksi,
    // jotta salasana.html voi näyttää virheviestin.
    puzzleSetup = undefined; 
}
