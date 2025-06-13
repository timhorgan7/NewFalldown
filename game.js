// --- Character Drawing Functions: Place these at the top! ---

function drawPikachu(x, y, size) {
    const u = size / 32;
    ctx.save();
    ctx.translate(x, y);

    // --- Tail (zigzag) ---
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(u*28, u*20);
    ctx.lineTo(u*34, u*8);
    ctx.lineTo(u*30, u*7);
    ctx.lineTo(u*34, u*1.5);
    ctx.lineTo(u*27, u*4);
    ctx.lineTo(u*29, u*12);
    ctx.lineTo(u*25.5, u*19);
    ctx.closePath();
    ctx.fillStyle = "#f4d84a";
    ctx.strokeStyle = "#b89c1b";
    ctx.lineWidth = u*0.9;
    ctx.fill();
    ctx.stroke();
    // Brown tip
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(u*34, u*1.5);
    ctx.lineTo(u*32.5, u*5);
    ctx.lineTo(u*30, u*7);
    ctx.lineTo(u*34, u*1.5);
    ctx.closePath();
    ctx.fillStyle = "#a87c1d";
    ctx.fill();
    ctx.restore();
    ctx.restore();

    // --- Feet ---
    ctx.beginPath();
    ctx.ellipse(u*11, u*29, u*2.0, u*1.1, Math.PI/8, 0, Math.PI*2);
    ctx.ellipse(u*21, u*29, u*2.0, u*1.1, -Math.PI/8, 0, Math.PI*2);
    ctx.fillStyle = "#f4d84a";
    ctx.fill();
    // Toes (brown)
    ctx.save();
    ctx.fillStyle = "#a87c1d";
    ctx.beginPath();
    ctx.arc(u*10, u*29.7, u*0.35, 0, Math.PI*2);
    ctx.arc(u*12, u*29.7, u*0.35, 0, Math.PI*2);
    ctx.arc(u*20, u*29.7, u*0.35, 0, Math.PI*2);
    ctx.arc(u*22, u*29.7, u*0.35, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();

    // --- Legs ---
    ctx.beginPath();
    ctx.ellipse(u*11, u*25, u*1.0, u*2.7, Math.PI/7, 0, Math.PI*2);
    ctx.ellipse(u*21, u*25, u*1.0, u*2.7, -Math.PI/7, 0, Math.PI*2);
    ctx.fillStyle = "#f4d84a";
    ctx.fill();

    // --- Body ---
    ctx.beginPath();
    ctx.ellipse(u*16, u*17, u*7.2, u*10.3, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f4d84a";
    ctx.fill();

    // --- Brown back stripes ---
    ctx.save();
    ctx.strokeStyle = "#a87c1d";
    ctx.lineWidth = u*1.1;
    ctx.beginPath();
    ctx.moveTo(u*20, u*18.5);
    ctx.lineTo(u*23.5, u*19.7);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(u*19.5, u*20.5);
    ctx.lineTo(u*23, u*22.2);
    ctx.stroke();
    ctx.restore();

    // --- Arms ---
    ctx.beginPath();
    ctx.ellipse(u*6.8, u*19, u*1.3, u*4.2, Math.PI/7, 0, Math.PI*2);
    ctx.ellipse(u*25.2, u*19, u*1.3, u*4.2, -Math.PI/7, 0, Math.PI*2);
    ctx.fillStyle = "#f4d84a";
    ctx.fill();

    // --- Hands (fingers, brown) ---
    ctx.beginPath();
    ctx.ellipse(u*5.6, u*23, u*0.65, u*1.0, Math.PI/6, 0, Math.PI*2);
    ctx.ellipse(u*26.4, u*23, u*0.65, u*1.0, -Math.PI/6, 0, Math.PI*2);
    ctx.fillStyle = "#a87c1d";
    ctx.fill();

    // --- Head ---
    ctx.beginPath();
    ctx.ellipse(u*16, u*8.5, u*8.7, u*8, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f4d84a";
    ctx.fill();

    // --- Ears ---
    // Left ear
    ctx.save();
    ctx.translate(u*7.5, u*1.5);
    ctx.rotate(-Math.PI/10);
    ctx.beginPath();
    ctx.ellipse(0, 0, u*2.2, u*8.6, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f4d84a";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, -u*4.5, u*1.2, u*2.7, 0, 0, Math.PI*2);
    ctx.fillStyle = "#232323";
    ctx.fill();
    ctx.restore();
    // Right ear
    ctx.save();
    ctx.translate(u*24.5, u*1.5);
    ctx.rotate(Math.PI/10);
    ctx.beginPath();
    ctx.ellipse(0, 0, u*2.2, u*8.6, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f4d84a";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, -u*4.5, u*1.2, u*2.7, 0, 0, Math.PI*2);
    ctx.fillStyle = "#232323";
    ctx.fill();
    ctx.restore();

    // --- Cheek blush ---
    ctx.beginPath();
    ctx.ellipse(u*10, u*13.5, u*1.5, u*1.1, 0, 0, Math.PI*2);
    ctx.ellipse(u*22, u*13.5, u*1.5, u*1.1, 0, 0, Math.PI*2);
    ctx.fillStyle = "#ea6257";
    ctx.globalAlpha = 0.82;
    ctx.fill();
    ctx.globalAlpha = 1;

    // --- Eyes ---
    ctx.beginPath();
    ctx.ellipse(u*13, u*9.4, u*1.1, u*2.05, 0, 0, Math.PI*2);
    ctx.ellipse(u*19, u*9.4, u*1.1, u*2.05, 0, 0, Math.PI*2);
    ctx.fillStyle = "#232323";
    ctx.fill();

    // Eye shines
    ctx.beginPath();
    ctx.ellipse(u*12.7, u*8.7, u*0.32, u*0.5, 0, 0, Math.PI*2);
    ctx.ellipse(u*18.7, u*8.7, u*0.32, u*0.5, 0, 0, Math.PI*2);
    ctx.fillStyle = "#fff";
    ctx.fill();

    // --- Nose ---
    ctx.beginPath();
    ctx.ellipse(u*16, u*12, u*0.22, u*0.52, 0, 0, Math.PI*2);
    ctx.fillStyle = "#232323";
    ctx.globalAlpha = 0.85;
    ctx.fill();
    ctx.globalAlpha = 1;

    // --- Mouth (smile) ---
    ctx.save();
    ctx.strokeStyle = "#232323";
    ctx.lineWidth = u*0.32;
    ctx.beginPath();
    ctx.arc(u*16, u*12.6, u*2, Math.PI*0.18, Math.PI*0.82, false);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
}

// --- Meowth Drawing Function ---
function drawMeowth(x, y, size) {
    const u = size / 32;
    ctx.save();
    ctx.translate(x, y);

    // --- Tail (curly) ---
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(u*28, u*22);
    ctx.bezierCurveTo(u*35, u*29, u*24, u*34, u*22, u*26);
    ctx.strokeStyle = "#c39b6a";
    ctx.lineWidth = u*2;
    ctx.stroke();
    // Brown tip
    ctx.beginPath();
    ctx.arc(u*32, u*28, u*2.1, Math.PI*0.32, Math.PI*1.7, false);
    ctx.strokeStyle = "#9b6745";
    ctx.lineWidth = u*1.05;
    ctx.stroke();
    ctx.restore();

    // --- Feet ---
    ctx.beginPath();
    ctx.ellipse(u*11, u*29, u*2.1, u*1.1, Math.PI/8, 0, Math.PI*2);
    ctx.ellipse(u*21, u*29, u*2.1, u*1.1, -Math.PI/8, 0, Math.PI*2);
    ctx.fillStyle = "#f1e0c2";
    ctx.fill();
    // Toes
    ctx.save();
    ctx.fillStyle = "#9b6745";
    ctx.beginPath();
    ctx.arc(u*10, u*29.7, u*0.35, 0, Math.PI*2);
    ctx.arc(u*12, u*29.7, u*0.35, 0, Math.PI*2);
    ctx.arc(u*20, u*29.7, u*0.35, 0, Math.PI*2);
    ctx.arc(u*22, u*29.7, u*0.35, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();

    // --- Legs ---
    ctx.beginPath();
    ctx.ellipse(u*11, u*24, u*1.1, u*2.5, Math.PI/7, 0, Math.PI*2);
    ctx.ellipse(u*21, u*24, u*1.1, u*2.5, -Math.PI/7, 0, Math.PI*2);
    ctx.fillStyle = "#f1e0c2";
    ctx.fill();

    // --- Body ---
    ctx.beginPath();
    ctx.ellipse(u*16, u*17, u*6.8, u*9.8, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f1e0c2";
    ctx.fill();

    // --- Arms ---
    ctx.beginPath();
    ctx.ellipse(u*6.8, u*19, u*1.3, u*4, Math.PI/7, 0, Math.PI*2);
    ctx.ellipse(u*25.2, u*19, u*1.3, u*4, -Math.PI/7, 0, Math.PI*2);
    ctx.fillStyle = "#f1e0c2";
    ctx.fill();

    // --- Hands (brown) ---
    ctx.beginPath();
    ctx.ellipse(u*5.8, u*23, u*0.7, u*1.1, Math.PI/6, 0, Math.PI*2);
    ctx.ellipse(u*26.2, u*23, u*0.7, u*1.1, -Math.PI/6, 0, Math.PI*2);
    ctx.fillStyle = "#9b6745";
    ctx.fill();

    // --- Head ---
    ctx.beginPath();
    ctx.ellipse(u*16, u*8.5, u*8.5, u*7.8, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f1e0c2";
    ctx.fill();

    // --- Cheek shadow ---
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(u*10, u*13, u*1.3, u*1, 0, 0, Math.PI*2);
    ctx.ellipse(u*22, u*13, u*1.3, u*1, 0, 0, Math.PI*2);
    ctx.fillStyle = "#e5c489";
    ctx.globalAlpha = 0.6;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.restore();

    // --- Ears ---
    // Left ear
    ctx.save();
    ctx.translate(u*7, u*2);
    ctx.rotate(-Math.PI/10);
    ctx.beginPath();
    ctx.ellipse(0, 0, u*2, u*7.1, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f1e0c2";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, -u*3.5, u*1.1, u*2.5, 0, 0, Math.PI*2);
    ctx.fillStyle = "#232323";
    ctx.fill();
    ctx.restore();
    // Right ear
    ctx.save();
    ctx.translate(u*25, u*2);
    ctx.rotate(Math.PI/10);
    ctx.beginPath();
    ctx.ellipse(0, 0, u*2, u*7.1, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f1e0c2";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, -u*3.5, u*1.1, u*2.5, 0, 0, Math.PI*2);
    ctx.fillStyle = "#232323";
    ctx.fill();
    ctx.restore();

    // --- Forehead coin ---
    ctx.beginPath();
    ctx.ellipse(u*16, u*2, u*1.1, u*1.5, 0, 0, Math.PI*2);
    ctx.fillStyle = "#f7d66a";
    ctx.strokeStyle = "#b89c1b";
    ctx.lineWidth = u*0.4;
    ctx.fill();
    ctx.stroke();

    // --- Eyes ---
    ctx.beginPath();
    ctx.ellipse(u*13, u*9.3, u*1.0, u*2.0, 0, 0, Math.PI*2);
    ctx.ellipse(u*19, u*9.3, u*1.0, u*2.0, 0, 0, Math.PI*2);
    ctx.fillStyle = "#232323";
    ctx.fill();

    // Eye shines
    ctx.beginPath();
    ctx.ellipse(u*12.6, u*8.6, u*0.3, u*0.5, 0, 0, Math.PI*2);
    ctx.ellipse(u*18.4, u*8.6, u*0.3, u*0.5, 0, 0, Math.PI*2);
    ctx.fillStyle = "#fff";
    ctx.fill();

    // --- Nose ---
    ctx.beginPath();
    ctx.ellipse(u*16, u*12, u*0.22, u*0.52, 0, 0, Math.PI*2);
    ctx.fillStyle = "#232323";
    ctx.globalAlpha = 0.85;
    ctx.fill();
    ctx.globalAlpha = 1;

    // --- Mouth (smile, fangs) ---
    ctx.save();
    ctx.strokeStyle = "#232323";
    ctx.lineWidth = u*0.32;
    ctx.beginPath();
    ctx.arc(u*16, u*12.7, u*1.9, Math.PI*0.18, Math.PI*0.82, false);
    ctx.stroke();
    // Fangs
    ctx.beginPath();
    ctx.moveTo(u*15, u*14.1);
    ctx.lineTo(u*15.2, u*13.5);
    ctx.lineTo(u*15.4, u*14.1);
    ctx.moveTo(u*17.6, u*14.1);
    ctx.lineTo(u*17.8, u*13.5);
    ctx.lineTo(u*18, u*14.1);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = u*0.13;
    ctx.stroke();
    ctx.restore();

    ctx.restore();
}

// --- Brick Wall Drawing Function ---
function drawBrickWall(x, y, width, height) {
    if (width <= 0.5) return; // Do not draw nearly-zero-width segments

    const brickH = Math.max(6, Math.floor(height / 2));
    const brickW = 28;
    ctx.save();
    ctx.fillStyle = "#a0522d";
    ctx.fillRect(x, y, width, height);

    ctx.strokeStyle = "#73381d";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x, y + 0.5);
    ctx.lineTo(x + width, y + 0.5);
    ctx.moveTo(x, y + brickH + 0.5);
    ctx.lineTo(x + width, y + brickH + 0.5);
    ctx.moveTo(x, y + height - 0.5);
    ctx.lineTo(x + width, y + height - 0.5);

    for (let bx = 0; bx <= width - 1; bx += brickW) {
        ctx.moveTo(x + bx, y);
        ctx.lineTo(x + bx, y + brickH);
    }
    for (let bx = -brickW/2; bx <= width - 1; bx += brickW) {
        ctx.moveTo(x + bx, y + brickH);
        ctx.lineTo(x + bx, y + height);
    }
    ctx.stroke();

    ctx.globalAlpha = 0.18;
    ctx.fillStyle = "#fff8ed";
    ctx.fillRect(x, y, width, height * 0.15);
    ctx.globalAlpha = 1;
    ctx.restore();
}

// --- Game Constants and Variables ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('startBtn');
const scoreDisplay = document.getElementById('scoreDisplay');

const PLAYER_SIZE = 32;
const PLAYER_SPEED = 10;
const PLAYER_SPEED_TOUCH = 7;
const WALL_HEIGHT = 20;
const WALL_GAP_MIN = 70;
const WALL_GAP_MAX = 110;
const WALL_SPEED_START = 4.5;
const WALL_SPEED_PER_LINE = 0.30;
const WALL_SPACING = 90;

let walls, player, wallSpeed, score, running, animationId, touchX;
let meowth = null;
let meowthActive = false;
const MEOWTH_SIZE = 32;
const MEOWTH_SPEED = 9.5; // Similar to player but slightly slower for gameplay
let numWallsOnScreen;
let lastSpeedUpScore = 0;
let highScore = Number(localStorage.getItem('falldown_highscore')) || 0;

// --- Game Rendering ---
function resetGame() {
    walls = [];
    wallSpeed = WALL_SPEED_START;
    score = 0;
    lastSpeedUpScore = 0;
    player = {
        x: canvas.width / 2 - PLAYER_SIZE / 2,
        y: canvas.height / 2 - PLAYER_SIZE / 2,
        size: PLAYER_SIZE,
        vy: 0
    };
    meowth = null;
    meowthActive = false;
    numWallsOnScreen = Math.ceil(canvas.height / WALL_SPACING) + 2;
    for (let i = 0; i < numWallsOnScreen; i++) {
        addWall(WALL_SPACING * i - WALL_HEIGHT);
    }
}

// --- Five distinct gap sizes implementation ---
function addWall(y) {
    // Five distinct gap sizes: smallest, small, normal, large, largest
    const minGap = 38; // Minimum playable gap
    const gapSizes = [
        minGap,                                  // Smallest (hardest)
        minGap + 18,                             // Small
        (WALL_GAP_MIN + WALL_GAP_MAX) / 2,       // Normal
        WALL_GAP_MAX + 30,                       // Large
        Math.max(WALL_GAP_MAX + 70, minGap + 85, canvas.width * 0.55) // Largest (easiest)
    ];

    // Weighted random: most likely normal or small
    const weights = [0.10, 0.18, 0.44, 0.18, 0.10];
    let r = Math.random(), sum = 0, selectedGap = gapSizes[2];
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (r < sum) {
            selectedGap = gapSizes[i];
            break;
        }
    }
    // Clamp so gap never goes negative or off-screen
    selectedGap = Math.max(minGap, Math.min(selectedGap, canvas.width - minGap));
    const gapX = Math.random() * (canvas.width - selectedGap);
    walls.push({ y, gapX, gapWidth: selectedGap, scored: false });
}

function drawWalls() {
    for (const wall of walls) {
        if (wall.gapX > 0)
            drawBrickWall(0, wall.y, wall.gapX, WALL_HEIGHT);
        if (wall.gapX + wall.gapWidth < canvas.width)
            drawBrickWall(wall.gapX + wall.gapWidth, wall.y, canvas.width - (wall.gapX + wall.gapWidth), WALL_HEIGHT);
    }
}

function drawPlayer() {
    drawPikachu(player.x, player.y, player.size);
}

function drawMeowthCharacter() {
    if (meowth && meowthActive) drawMeowth(meowth.x, meowth.y, meowth.size);
}

// --- Meowth AI ---
function updateMeowth() {
    if (!meowthActive) return;

    // Chase Pikachu horizontally first
    let dx = (player.x + player.size/2) - (meowth.x + meowth.size/2);
    if (Math.abs(dx) > 2) {
        let direction = dx > 0 ? 1 : -1;
        let tryX = meowth.x + direction * MEOWTH_SPEED;
        // Clamp to walls (same rules as player)
        const hitboxMargin = meowth.size * 0.16;
        let mx = tryX + hitboxMargin;
        let msize = meowth.size - hitboxMargin * 2;
        let blocked = false;
        for (const wall of walls) {
            if (
                meowth.y <= wall.y + WALL_HEIGHT &&
                meowth.y + meowth.size > wall.y &&
                (mx < wall.gapX ||
                mx + msize > wall.gapX + wall.gapWidth)
            ) {
                blocked = true;
                break;
            }
        }
        if (!blocked) {
            meowth.x = tryX;
        }
    }
    // Clamp to bounds
    meowth.x = Math.max(0, Math.min(canvas.width - meowth.size, meowth.x));

    // Meowth is always "falling" upward (like Pikachu)
    let vy = -2.2;
    // Check if Meowth is standing on a wall
    const hitboxMargin = meowth.size * 0.16;
    let mx = meowth.x + hitboxMargin;
    let msize = meowth.size - hitboxMargin * 2;
    for (const wall of walls) {
        if (
            meowth.y <= wall.y + WALL_HEIGHT &&
            meowth.y + meowth.size > wall.y &&
            (mx < wall.gapX ||
            mx + msize > wall.gapX + wall.gapWidth)
        ) {
            meowth.y = wall.y + WALL_HEIGHT;
            vy = 0;
            break;
        }
    }
    meowth.y += vy;
    if (meowth.y < 0) meowth.y = 0;
    // Chase Pikachu vertically
    if (meowth.y > player.y + 1) {
        meowth.y -= Math.min(2, meowth.y - player.y);
    }
}

// --- Meowth spawn logic ---
function maybeSpawnMeowth() {
    if (!meowthActive && score >= 15) {
        meowthActive = true;
        meowth = {
            x: Math.max(0, Math.min(canvas.width - MEOWTH_SIZE, player.x + 40)),
            y: canvas.height - MEOWTH_SIZE,
            size: MEOWTH_SIZE,
            vy: 0
        };
    }
}

// --- Game Logic ---
function updatePlayer(keys) {
    const hitboxMargin = player.size * 0.16;
    let px = player.x + hitboxMargin;
    let psize = player.size - hitboxMargin * 2;

    if (keys['ArrowLeft'] || keys['a']) player.x -= PLAYER_SPEED;
    if (keys['ArrowRight'] || keys['d']) player.x += PLAYER_SPEED;
    if (touchX !== null) {
        if (Math.abs(player.x + player.size / 2 - touchX) > 5) {
            if (player.x + player.size / 2 < touchX) player.x += PLAYER_SPEED_TOUCH;
            else player.x -= PLAYER_SPEED_TOUCH;
        }
    }
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.vy = -2.2;
    for (const wall of walls) {
        if (
            player.y <= wall.y + WALL_HEIGHT &&
            player.y + player.size > wall.y &&
            (px < wall.gapX ||
            px + psize > wall.gapX + wall.gapWidth)
        ) {
            player.y = wall.y + WALL_HEIGHT;
            player.vy = 0;
            break;
        }
    }
    player.y += player.vy;
    if (player.y < 0) player.y = 0;
}
function updateWalls() {
    for (const wall of walls) wall.y += wallSpeed;
    let playerMid = player.y + player.size / 2;
    for (let wall of walls) {
        if (!wall.scored && playerMid < wall.y + WALL_HEIGHT && playerMid > wall.y + WALL_HEIGHT - wallSpeed) {
            score++;
            wall.scored = true;
            if (score % 15 === 0) wallSpeed += WALL_SPEED_PER_LINE;
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('falldown_highscore', highScore);
            }
        }
    }
    while (walls.length > 0 && walls[0].y > canvas.height) {
        walls.shift();
        const lastWallY = walls.length > 0 ? walls[walls.length - 1].y : 0;
        addWall(lastWallY - WALL_SPACING);
    }
}
function drawScore() {
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px Segoe UI';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${score}`, 12, 30);
    ctx.font = '14px Segoe UI';
    ctx.fillText(`High: ${highScore}`, 12, 52);
}
function gameLoop(keys) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer(keys);
    updateWalls();

    maybeSpawnMeowth();
    if (meowthActive) updateMeowth();

    drawPlayer();
    if (meowthActive) drawMeowthCharacter();
    drawWalls();
    drawScore();

    // Check if Meowth caught Pikachu
    if (
        meowthActive &&
        meowth &&
        Math.abs((meowth.x + meowth.size/2) - (player.x + player.size/2)) < player.size * 0.7 &&
        Math.abs((meowth.y + meowth.size/2) - (player.y + player.size/2)) < player.size * 0.7
    ) {
        running = false;
        showOverlay(`Meowth caught Pikachu!\nScore: ${score}\nHigh score: ${highScore}`);
        return;
    }

    if (player.y + player.size >= canvas.height) {
        running = false;
        player.y = canvas.height - player.size;
        drawPlayer();
        drawWalls();
        drawScore();
        showOverlay();
        return;
    }
    animationId = requestAnimationFrame(() => gameLoop(keys));
}

// --- User Input ---
let keys = {};
document.addEventListener('keydown', (e) => { keys[e.key] = true; });
document.addEventListener('keyup', (e) => { keys[e.key] = false; });
touchX = null;
canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
        touchX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    }
});
canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        touchX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    }
});
canvas.addEventListener('touchend', (e) => { touchX = null; });
canvas.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive: false });

// --- Overlay and Game Start ---
function showOverlay(text) {
    overlay.style.display = 'flex';
    if (text) {
        scoreDisplay.textContent = text;
    } else {
        scoreDisplay.textContent = running ? '' : `Game Over! Your score: ${score}\nHigh score: ${highScore}`;
    }
    startBtn.textContent = running ? 'Restart' : 'Restart';
}
function hideOverlay() {
    overlay.style.display = 'none';
}
function startGame() {
    resetGame();
    running = true;
    hideOverlay();
    keys = {};
    animationId = requestAnimationFrame(() => gameLoop(keys));
}
startBtn.addEventListener('click', () => {
    startGame();
});
overlay.addEventListener('touchstart', function(e) {
    if (!running) {
        startGame();
    }
});

// --- Resize and Initial Setup ---
function resizeCanvas() {
    const container = document.getElementById('gameContainer');
    const width = container.clientWidth;
    const height = container.clientHeight;
    canvas.width = width; canvas.height = height;
    if (!running) resetGame();
}
window.addEventListener('resize', resizeCanvas);

// --- Initial state: Start Game Immediately as Pikachu ---
hideOverlay();
resizeCanvas();
startGame();