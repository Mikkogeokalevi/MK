document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const input = document.getElementById('input');

    let agentName = '';
    let currentPuzzle = 0;
    let gameState = 'AWAITING_NAME';
    let puzzles = [];
    let isInputLocked = false;
    
    const GEO_WORDS = ["agentti", "purkki", "matkalainen", "kätkö", "lokikirja", "multi", "mysteerikätkö", "tradikätkö", "mikro", "regular", "large", "geokolikko", "kätkönimi", "koordinaatit", "viheltäjä", "kätkökuvaus", "vihje", "eventti", "waypoint", "sovellus", "vaihtoesine", "geosense", "geolodju", "kätkö", "haastekätkö", "bonuskätkö", "patrol", "muggle", "kätkönomistaja", "tarkastaja", "vapaaehtoinen", "ensilöytäjä", "hymiö", "kätköpiste", "reitti", "trail", "kätkösarja", "powertrail", "attribuutti", "vaikeusaste", "maasto", "tarkkailulista", "geokartta", "satelliittikuva", "kompassi", "taskulamppu", "pinsetit", "magneettikätkö", "pulttikätkö", "puukätkö", "sijaintitarkkuus", "geochecker", "kenttäpulma", "loppupiste", "alkupiste", "pistemäärä", "päivämäärä", "metsä", "polku", "kallio", "vesistö", "silta", "puisto", "rakennus", "piilopaikka", "piilotus", "löytö", "arkistoitu", "jäädytetty", "huoltotarve", "kadonnut", "löysin", "enlöytänyt", "kirjoitahuomio", "julkaise", "peruuta", "adoptoi", "vaihtokauppa", "jästinkestävä", "geotaide", "megaeventti", "gigaeventti", "flashmob", "kätkömania", "kilpailu", "merkki", "palkinto", "merkkipaalu", "tilasto", "profiili", "kartta", "lista", "suodatus", "blogi", "foorumi", "käsineet", "reppu", "juomapullo", "eväät", "sadesuoja", "hyttysmyrkky", "ensiapulaukku", "puukko", "lapio", "köysi", "kiipeilyvarusteet", "sukellusvarusteet", "lamppu", "magneetti", "teleskooppi", "peili", "paperi", "puhelin", "tabletti", "virtapankki", "varavirta", "aurinkopaneeli", "paristo", "laturi", "usbkaapeli", "adapteri", "mobiilidata", "signaali", "kantama", "yhteys", "offlinekartat", "onlinekartat", "paikkatieto", "gpstarkkuus", "satelliitit", "sijainti", "korkeus", "pituuspiiri", "leveyspiiri", "asteet", "minuutit", "sekunnit", "desimaalit", "koordinaattimuunnos", "geometria", "topografia", "maamerkki", "kiintopiste", "referenssipiste", "lähtöpaikka", "päätepiste", "välietape", "välipiste", "kontrollipiste", "reitinvalinta", "reittisuunnittelu", "navigointi", "paikannus", "suuntima", "etäisyys", "koodi", "tunnus", "turvallisuus", "vastuu", "ympäristö", "luonto", "kivet", "pensas", "säännöt", "ohjeet", "yhteisö", "harrastus", "seikkailu", "yhteistyö", "opastus", "vaellus", "patikointi", "retkeily", "hiihto", "luistelu", "melonta", "veneily", "purjehdus", "sukellus", "kiipeily", "pyöräily", "maastopyöräily", "kävely", "juoksu"];
    const FINNISH_ALPHABET = "abcdefghijklmnopqrstuvwxyzåäö";

    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const customWords = ["MKTRIX", "MIKKOKALEVI"];
    const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボпоヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = Array(Math.floor(columns)).fill(1).map(() => ({ y: Math.random() * canvas.height, isSpecial: false, word: null, charIndex: 0 }));

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < rainDrops.length; i++) {
            let drop = rainDrops[i];
            let text;
            if (drop.isSpecial) {
                text = drop.word.charAt(drop.charIndex);
                ctx.fillStyle = '#FF4136';
                if (Math.floor(drop.y) % 2 === 0) {
                     if (drop.charIndex < drop.word.length -1) drop.charIndex++;
                     else drop.isSpecial = false;
                }
            } else {
                text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillStyle = '#0F0';
            }
            ctx.fillText(text, i * fontSize, drop.y * fontSize);
            if (drop.y * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = { y: 0, isSpecial: (customWords.length > 0 && Math.random() > 0.95), word: customWords[Math.floor(Math.random() * customWords.length)], charIndex: 0 };
            }
            drop.y++;
        }
    }
    const matrixInterval = setInterval(drawMatrix, 33);

    function scrollToBottom() {
        setTimeout(() => {
            output.scrollTop = output.scrollHeight;
        }, 0);
    }

    async function type(line) {
        const speed = 40;
        const lineDiv = document.createElement('div');
        output.appendChild(lineDiv);
        for (let i = 0; i < line.length; i++) {
            lineDiv.innerHTML += line.charAt(i);
            scrollToBottom();
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    }
    function print(line) {
        const lineDiv = document.createElement('div');
        if (typeof line === 'string') lineDiv.innerText = line;
        else lineDiv.innerHTML = line.html;
        output.appendChild(lineDiv);
        scrollToBottom();
    }
    
    function setInputState(enabled) {
        isInputLocked = !enabled;
        if (enabled) {
            input.focus();
        }
    }

    function clearInteractive() {
        const interactive = output.querySelector('.interactive-wrapper');
        if (interactive) interactive.remove();
    }

    async function handleWrongAnswer() {
        setInputState(false);
        print({html: `<span class="error">VIRHE, AGENTTI ${agentName.toUpperCase()}. Järjestelmä lukittu...</span>`});
        output.classList.add('glitch-effect');
        
        const countdownWrapper = document.createElement('div');
        countdownWrapper.className = 'interactive-wrapper';
        const countdownElement = document.createElement('div');
        countdownElement.className = 'error';
        countdownWrapper.appendChild(countdownElement);
        output.appendChild(countdownWrapper);
        
        clearInteractive();

        let timeLeft = 30; 
        const countdownInterval = setInterval(() => {
            countdownElement.innerText = `...${timeLeft}...`;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                countdownElement.innerText = 'Järjestelmä aktiivinen.';
                setTimeout(() => {
                    output.removeChild(countdownWrapper);
                    setInputState(true);
                }, 1500);
            }
        }, 2000);
    }
    
    async function textCorruptionEffect(text) {
        const lineDiv = document.createElement('div');
        output.appendChild(lineDiv);
        const chars = 'AZX#@$*!?%/|';
        for (let i = 0; i < 3; i++) {
            let garbage = '';
            for (let j = 0; j < text.length; j++) {
                garbage += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            lineDiv.innerText = garbage;
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        lineDiv.remove();
    }

    async function handleSuccess() {
        setInputState(false);
        const puzzle = puzzles[currentPuzzle];
        print({html: `<span class="highlight">OIKEA VASTAUS, AGENTTI ${agentName.toUpperCase()}.</span>`});
        currentPuzzle++;
        if (puzzle.reward) await type(`Koordinaatit päivitetty: ${puzzle.reward}`);
        if (currentPuzzle < puzzles.length) {
            await displayPuzzle();
        } else {
            gameState = 'FINISHED';
            await type("------------------------------------");
            print({html: "<div class='final'>LOISTAVAA! TEHTÄVÄ SUORITETTU!</div>"});
            await type("------------------------------------");
            clearInterval(matrixInterval);
        }
    }

    async function setupAnagramPuzzle() {
        clearInteractive();
        const word = GEO_WORDS[Math.floor(Math.random() * GEO_WORDS.length)];
        puzzles[0].answer = word.toLowerCase();

        let scrambledWord = word.split('').sort(() => 0.5 - Math.random()).join('');
        while (scrambledWord.toLowerCase() === word.toLowerCase()) {
            scrambledWord = word.split('').sort(() => 0.5 - Math.random()).join('');
        }

        await type(`\n--- PULMA 1/7: Anagrammi ---`);
        await type(`Järjestä kirjaimet sanaksi: ${scrambledWord.toUpperCase()}`);
        await type("Jos sana on liian vaikea, kirjoita 'anna uusi sana'.");
        setInputState(true);
    }
    
    async function setupNumericPuzzle() {
        clearInteractive();
        const word = GEO_WORDS[Math.floor(Math.random() * GEO_WORDS.length)];
        puzzles[1].answer = word.toLowerCase();

        const numericSequence = word.toLowerCase().split('').map(char => {
            const index = FINNISH_ALPHABET.indexOf(char);
            return index !== -1 ? index + 1 : '?';
        }).join('-');

        await type(`\n--- PULMA 2/7: Numeerinen protokolla ---`);
        await type(`Käännä numerot kirjaimiksi (A=1, B=2, ..., Ä=28, Ö=29):`);
        await type(numericSequence);
        await type("Jos numerosarja on liian vaikea, kirjoita 'anna uusi sana'.");
        setInputState(true);
    }
    
    async function setupMemoryPuzzle() {
        clearInteractive();
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let sequence = '';
        for (let i = 0; i < 6; i++) {
            sequence += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        puzzles[2].answer = sequence.toLowerCase();
        
        await type(`\n--- PULMA 3/7: Muistipeli ---`);
        await type(`Toista 6-merkkinen aakkosnumeerinen koodi...`);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const interactiveWrapper = document.createElement('div');
        interactiveWrapper.className = 'interactive-wrapper';
        interactiveWrapper.innerHTML = `<div class="memory-sequence">${sequence.split('').join(' ')}</div>`;
        output.appendChild(interactiveWrapper);
        scrollToBottom();

        await new Promise(resolve => setTimeout(resolve, 2500));
        const sequenceDiv = interactiveWrapper.querySelector('.memory-sequence');
        if(sequenceDiv) {
            sequenceDiv.innerHTML = '█ █ █ █ █ █';
        }
        scrollToBottom();
        
        await type(`Syötä koodi. Jos unohdit, kirjoita 'anna uusi koodi'.`);
        setInputState(true);
    }

    async function setupPasswordCracker() {
        clearInteractive();
        
        const passwordWords = ["agentti", "eventti", "vesistö", "peruuta", "adoptoi", "tilasto", "foorumi", "puhelin", "paristo", "korkeus", "säännöt", "yhteisö", "opastus", "vaellus", "melonta", "veneily", "arkisto", "piilotus", "etsintä"];
        const word = passwordWords[Math.floor(Math.random() * passwordWords.length)];
        
        puzzles[3].answer = word.toLowerCase();
        puzzles[3].guesses = [];

        await type(`\n--- PULMA 4/7: Salasananmurtaja ---`);
        await type(`Järjestelmän palomuuri vaatii 7-kirjaimisen salasanan.`);
        await type("Vihje: Salasana on geokätköilyyn liittyvä termi.");
        await type("Palaute arvauksestasi annetaan väreillä:");
        print({html: `<div><span class="highlight">VIHREÄ</span>: Oikea kirjain ja oikealla paikalla.</div>`});
        print({html: `<div><span class="error">KELTAINEN</span>: Oikea kirjain, mutta väärällä paikalla.</div>`});
        await type("Yritysten määrää ei ole rajoitettu.");
        await type("Jos haluat uuden salasanan, kirjoita 'anna uusi salasana'.");
        await type(`Syötä ensimmäinen arvauksesi.`);
        setInputState(true);
    }

    async function processPasswordGuess(guess) {
        const puzzle = puzzles[3];
        const answer = puzzle.answer;

        if (guess.length !== answer.length) {
            print({html: `<span class="error">Virhe: Salasanan on oltava ${answer.length} kirjaimen pituinen.</span>`});
            setInputState(true);
            return;
        }

        puzzle.guesses.push(guess);

        const result = new Array(answer.length).fill(null).map(() => ({status: 'incorrect'}));
        const answerLetters = answer.split('');

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === answer[i]) {
                result[i] = { char: guess[i], status: 'correct' };
                answerLetters[i] = null;
            }
        }

        for (let i = 0; i < guess.length; i++) {
            if (result[i].status === 'correct') {
                continue;
            }

            const misplacedIndex = answerLetters.indexOf(guess[i]);
            if (misplacedIndex !== -1) {
                result[i] = { char: guess[i], status: 'misplaced' };
                answerLetters[misplacedIndex] = null;
            } else {
                result[i] = { char: guess[i], status: 'incorrect' };
            }
        }
        
        const resultHtml = result.map(item => {
            if (item.status === 'correct') return `<span class="highlight">${item.char.toUpperCase()}</span>`;
            if (item.status === 'misplaced') return `<span class="error">${item.char.toUpperCase()}</span>`;
            return item.char.toUpperCase();
        }).join('');

        print({html: `<div style="letter-spacing: 0.5em;">${resultHtml}</div>`});

        if (guess === answer) {
            await type("SALASANA MURRETTU!");
            await handleSuccess();
        } else {
            await type("Arvaa uudelleen.");
            setInputState(true);
        }
    }

    async function setupPatternPuzzle() {
        clearInteractive();
        await type(`\n--- PULMA 5/7: Kuviomuisti ---`);
        await type(`Järjestelmä näyttää 4 symbolin sarjan. Toista se.`);

        const symbols = [
            { symbol: '▲', name: 'kolmio', color: '#FF4136' },
            { symbol: '●', name: 'ympyrä', color: '#0074D9' },
            { symbol: '■', name: 'neliö', color: '#2ECC40' },
            { symbol: '♦', name: 'ruutu', color: '#FFDC00' }
        ];
        
        let sequence = [];
        let answerSequence = [];

        for (let i = 0; i < 4; i++) {
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            sequence.push(randomSymbol);
            answerSequence.push(randomSymbol.name);
        }
        puzzles[4].answer = answerSequence.join("");

        const interactiveWrapper = document.createElement('div');
        interactiveWrapper.className = 'interactive-wrapper';
        const sequenceDisplay = document.createElement('div');
        sequenceDisplay.style.fontSize = '4em';
        sequenceDisplay.style.height = '1.2em';
        sequenceDisplay.style.textAlign = 'center';
        interactiveWrapper.appendChild(sequenceDisplay);
        output.appendChild(interactiveWrapper);
        scrollToBottom();
        
        await new Promise(resolve => setTimeout(resolve, 2000));

        for(const item of sequence) {
            sequenceDisplay.innerText = item.symbol;
            sequenceDisplay.style.color = item.color;
            await new Promise(resolve => setTimeout(resolve, 900));
            sequenceDisplay.innerText = '';
            await new Promise(resolve => setTimeout(resolve, 250));
        }

        sequenceDisplay.remove();
        await type(`Syötä symbolien nimet peräkkäin ilman välejä (esim. kolmioneliöympyrä).`);
        await type(`Jos et nähnyt sarjaa, kirjoita 'anna kuvat uudelleen'.`);
        setInputState(true);
    }

    // --- KORJATTU PULMA 6 ---
    async function setupCorruptionPuzzle() {
        clearInteractive();
        await type(`\n--- PULMA 6/7: Datavirran analysointi ---`);
        await type(`Signaali on pahasti korruptoitunut. Vain yksi datapaketti on ehjä.`);
        await type(`Tunnista symboli, joka esiintyy datavirrassa vain yhden kerran.`);

        const charPool = "AZX$#*|&!?%".split('');
        const answerChar = charPool[Math.floor(Math.random() * charPool.length)];
        puzzles[5].answer = answerChar.toLowerCase();

        let decoyPool = charPool.filter(c => c.toLowerCase() !== answerChar.toLowerCase());
        let stream = [];
        stream.push(answerChar);

        const streamLength = 61;
        while (stream.length < streamLength) {
            let decoy = decoyPool[Math.floor(Math.random() * decoyPool.length)];
            stream.push(decoy, decoy);
        }
        
        stream = stream.sort(() => 0.5 - Math.random());

        const interactiveWrapper = document.createElement('div');
        interactiveWrapper.className = 'interactive-wrapper';
        const streamDisplay = document.createElement('div');
        streamDisplay.style.fontSize = '1.5em';
        streamDisplay.style.lineHeight = '1.6em';
        streamDisplay.style.wordBreak = 'break-all';
        streamDisplay.style.textAlign = 'center';
        streamDisplay.style.color = '#FF4136';
        interactiveWrapper.appendChild(streamDisplay);
        output.appendChild(interactiveWrapper);
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Palautettu toimiva "kirjoitusefekti" datavirralle
        for (const char of stream) {
            streamDisplay.innerText += char;
            // Vieritys ei ole välttämätön loopin sisällä, jos se on lopussa
            await new Promise(resolve => setTimeout(resolve, 15));
        }
        scrollToBottom();
        
        await new Promise(resolve => setTimeout(resolve, 500));
        await type(`\nSyötä uniikki symboli.`);
        await type(`Jos haluat uuden datavirran, kirjoita 'anna datavirta uudelleen'.`);
        setInputState(true);
    }

    function initializePuzzles() {
        puzzles = [
            { type: 'interactive', setup: setupAnagramPuzzle, answer: "" },
            { type: 'interactive', setup: setupNumericPuzzle, answer: "" },
            { type: 'interactive', setup: setupMemoryPuzzle, answer: "" },
            { type: 'interactive', setup: setupPasswordCracker, answer: "" },
            { type: 'interactive', setup: setupPatternPuzzle, answer: "" },
            { type: 'interactive', setup: setupCorruptionPuzzle, answer: "" },
            { question: [`\n--- LOPULLINEN HAASTE ---`, `Koordinaatit purettu. Tiedät paikan. Missä olemme?`], answer: "niagaran putouksilla" }
        ];
        puzzles.forEach((puzzle, index) => {
            const rewards = [
                "43°..′..″N ..°..′..″W",
                "43°04′..″N ..°..′..″W",
                "43°04′41″N ..°..′..″W",
                "43°04′41″N 79°..′..″W",
                "43°04′41″N 79°04′..″W",
                "43°04′41″N 79°04′30″W"
            ];
            if (index < rewards.length) {
                puzzle.reward = rewards[index];
            }
        });
    }
    
    async function displayPuzzle() {
        clearInteractive();
        const puzzle = puzzles[currentPuzzle];
        await textCorruptionEffect(puzzle.question ? puzzle.question[0] : `PULMA ${currentPuzzle + 1}`);
        if (puzzle.type === 'interactive') {
            await puzzle.setup();
        } else {
            for (const line of puzzle.question) await type(line);
            setInputState(true);
        }
    }
    
    async function handleInput(command) {
        print(`> ${command}`);
        input.value = '';
        setInputState(false);
        if (gameState === 'AWAITING_NAME') {
            agentName = command || "Tuntematon";
            if (agentName.length > 2) customWords.push(agentName.toUpperCase());
            gameState = 'PLAYING';
            initializePuzzles();
            await type("Yhdistetään MIKKO-GEO-KALEVI-verkkoon...");
            await new Promise(resolve => setTimeout(resolve, 500));
            await type("Vastaanotetaan signaalia... OK");
            await new Promise(resolve => setTimeout(resolve, 500));
            print({html: `GeoAgentti ${agentName.toUpperCase()}... <span class="blinking-text">VALTUUTETTU</span>`});
            await new Promise(resolve => setTimeout(resolve, 2000));
            await type("Ladataan Ällös Operaatio ...");
            await type("------------------------------------");
            await type(`TERVETULOA, AGENTTI ${agentName.toUpperCase()}.`);
            await displayPuzzle();
            return;
        }
        if (gameState === 'PLAYING') {
            const puzzle = puzzles[currentPuzzle];
            const cmd = command.toLowerCase();

            if (currentPuzzle === 3) {
                if (cmd === 'ohitus4') {
                    print(`> Testausohitus (4) suoritettu.`);
                    await handleSuccess();
                } else if (cmd === 'anna uusi salasana') {
                    await type("Generoidaan uutta salasanaa...");
                    await setupPasswordCracker();
                } else {
                    await processPasswordGuess(cmd);
                }
                return;
            }

            if (cmd === `ohitus${currentPuzzle + 1}`) {
                print(`> Testausohitus (${currentPuzzle + 1}) suoritettu.`);
                await handleSuccess();
                return;
            }
             if (currentPuzzle === 2 && cmd === 'ylipääsy') {
                print("> Pääkäyttäjän ohitus hyväksytty.");
                await handleSuccess();
                return;
            }

            if ((currentPuzzle === 0 || currentPuzzle === 1) && cmd === 'anna uusi sana') {
                 if (currentPuzzle === 0) {
                    await type("Generoidaan uutta anagrammia...");
                    await setupAnagramPuzzle();
                 } else {
                    await type("Generoidaan uutta numerosarjaa...");
                    await setupNumericPuzzle();
                 }
                 return;
            }
            if (currentPuzzle === 2 && cmd === 'anna uusi koodi') {
                await type("Generoidaan uutta turvakoodia...");
                await setupMemoryPuzzle();
                return;
            }
            if (currentPuzzle === 4 && cmd === 'anna kuvat uudelleen') {
                await type("Generoidaan uutta kuvasarjaa...");
                await setupPatternPuzzle();
                return;
            }
            if (currentPuzzle === 5 && cmd === 'anna datavirta uudelleen') {
                await type("Generoidaan uutta datavirtaa...");
                await setupCorruptionPuzzle();
                return;
            }
            
            if (cmd === puzzle.answer) {
                await handleSuccess();
            } else {
                await handleWrongAnswer();
            }
        }
    }

    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            if (isInputLocked) return;
            const command = input.value.trim();
            if(command === '' && gameState !== 'AWAITING_NAME') return;
            await handleInput(command);
        }
    });

    async function main() {
        setInputState(false);
        await type("SYÖTÄ GEOKÄTKÖILY NIMESI...");
        setInputState(true);
    }
    main();
});
