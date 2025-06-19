document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const input = document.getElementById('input');

    let agentName = '';
    let currentPuzzle = 0;
    let gameState = 'AWAITING_NAME';
    let puzzles = [];

    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const customWords = ["MKTRIX", "MIKKOKALEVI"];
    const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
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

    async function type(line) {
        const speed = 40;
        const lineDiv = document.createElement('div');
        output.appendChild(lineDiv);
        for (let i = 0; i < line.length; i++) {
            lineDiv.innerHTML += line.charAt(i);
            output.scrollTop = output.scrollHeight;
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    }
    function print(line) {
        const lineDiv = document.createElement('div');
        if (typeof line === 'string') lineDiv.innerText = line;
        else lineDiv.innerHTML = line.html;
        output.appendChild(lineDiv);
        output.scrollTop = output.scrollHeight;
    }
    
    function setInputState(enabled) {
        input.disabled = !enabled;
        if (enabled) input.focus();
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
        
        let timeLeft = 30;
        const countdownInterval = setInterval(() => {
            countdownElement.innerText = `...${timeLeft}...`;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                countdownElement.innerText = 'Järjestelmä aktiivinen.';
                setTimeout(() => {
                    clearInteractive();
                    output.classList.remove('glitch-effect');
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
    
    // --- Interaktiiviset pulmat ---
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
        interactiveWrapper.innerHTML = `<div style="font-size: 2em; letter-spacing: 0.5em;">${sequence.split('').join(' ')}</div>`;
        output.appendChild(interactiveWrapper);
        output.scrollTop = output.scrollHeight;

        await new Promise(resolve => setTimeout(resolve, 2500));
        interactiveWrapper.innerHTML = `<div style="font-size: 2em; letter-spacing: 0.5em;">█ █ █ █ █ █</div>`;
        
        await type(`Syötä koodi. Jos unohdit, kirjoita 'anna uusi koodi' tai 'ylipääsy'.`);
        setInputState(true);
    }
    
    async function setupCipherDisk() {
        clearInteractive();
        await type(`\n--- PULMA 6/7: Koodikiekko ---`);
        await type(`Viesti on salattu Caesar-kiekolla. Etsi oikea siirtymä ja pura avainsana: PBZFR`);
        setInputState(false);

        const interactiveWrapper = document.createElement('div');
        interactiveWrapper.className = 'interactive-wrapper';
        output.appendChild(interactiveWrapper);

        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let shift = 0;

        function updateDisk() {
            const shiftedChar = alphabet.charAt((0 + shift + 26) % 26);
            interactiveWrapper.innerHTML = `
                <div>Kiekon asetus:</div>
                <div style="font-size: 2em; margin: 10px;">
                    <span class="dial-button" id="disk-left">[<]</span>
                    <span id="disk-value" style="margin: 0 20px;">A -> ${shiftedChar}</span>
                    <span class="dial-button" id="disk-right">[>]</span>
                </div>
                <div>Kirjoita purettu sana alla olevaan komentoriviin.</div>`;
            document.getElementById('disk-left').onclick = () => { shift--; updateDisk(); };
            document.getElementById('disk-right').onclick = () => { shift++; updateDisk(); };
        }
        updateDisk();
        setInputState(true);
    }

    function initializePuzzles() {
        puzzles = [
            { question: [`\n--- PULMA 1/7: Anagrammi ---`, `Järjestä kirjaimet sanaksi: TORIDAKOINAT`], answer: "koordinaatit", reward: "43°..′..″N ..°..′..″W" },
            { question: [`\n--- PULMA 2/7: Numeerinen protokolla ---`, `Käännä numerot kirjaimiksi (A=1...): 14-1-22-9-7-15-9-14-20-9`], answer: "navigointi", reward: "43°04′..″N ..°..′..″W" },
            { type: 'interactive', setup: setupMemoryPuzzle, reward: "43°04′41″N ..°..′..″W" },
            { question: [`\n--- PULMA 4/7: Morse-koodi ---`, `Viesti on katkonainen. Käytä kansainvälistä standardia sen purkamiseen:`, `...- .- .- .-. .-`], answer: "vaara", reward: "43°04′41″N 79°..′..″W" },
            { question: [`\n--- PULMA 5/7: "Katso ja Sano" ---`, `Agentti 'Yksi' jätti jälkeensä tämän kryptisen numerosarjan. Päättele sen logiikka ja anna seuraava rivi:`, `1`, `11`, `21`, `1211`, `111221`, `?`], answer: "312211", reward: "43°04′41″N 79°04′..″W" },
            { type: 'interactive', setup: setupCipherDisk, answer: "agentti", reward: "43°04′41″N 79°04′30″W" },
            { question: [`\n--- LOPULLINEN HAASTE ---`, `Koordinaatit purettu. Tiedät paikan. Missä olemme?`], answer: "niagaran putouksilla" }
        ];
    }
    
    async function displayPuzzle() {
        clearInteractive();
        const puzzle = puzzles[currentPuzzle];
        await textCorruptionEffect(puzzle.question ? puzzle.question[0] : `PULMA ${currentPuzzle + 1}`);
        if (puzzle.type === 'interactive') await puzzle.setup();
        else {
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
            if (currentPuzzle === 2 && (cmd === 'anna uusi koodi' || cmd === 'ylipääsy')) {
                if(cmd === 'ylipääsy') { print(`> Järjestelmän pääkäyttäjän ohituskoodi hyväksytty.`); await handleSuccess(); }
                else { await type("Generoidaan uutta turvakoodia..."); await setupMemoryPuzzle(); }
                return;
            }
            if (cmd === puzzle.answer) await handleSuccess();
            else await handleWrongAnswer();
        }
    }

    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            if (input.disabled) return;
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
