<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>인디언포커</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&family=Bebas+Neue&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --felt: #1a5c35;
      --felt-dark: #0e3d22;
      --felt-mid: #154d2b;
      --gold: #f2c94c;
      --gold-dark: #b8921a;
      --gold-shine: #ffe97a;
      --red: #e05252;
      --red-dark: #b53535;
      --card-bg: #fff;
      --card-shadow: 0 8px 24px rgba(0,0,0,0.45);
      --text: #fff;
      --panel: rgba(0,0,0,0.25);
      --panel-border: rgba(255,255,255,0.08);
    }

    body {
      font-family: 'Noto Sans KR', sans-serif;
      background: radial-gradient(ellipse at 50% 30%, #1f6b3d 0%, #0a2e16 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 20px 12px 40px;
    }

    .container {
      width: 100%;
      max-width: 860px;
    }

    /* ── SCREENS ── */
    .screen { display: none; }
    .screen.active { display: flex; flex-direction: column; gap: 16px; }

    /* ── HEADER ── */
    .game-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 52px;
      letter-spacing: 4px;
      color: var(--gold);
      text-shadow: 0 0 30px rgba(242,201,76,0.5), 2px 4px 0 rgba(0,0,0,0.4);
      text-align: center;
      line-height: 1;
    }

    .subtitle {
      text-align: center;
      color: rgba(255,255,255,0.55);
      font-size: 14px;
      letter-spacing: 1px;
    }

    /* ── PANEL ── */
    .panel {
      background: var(--panel);
      border: 1px solid var(--panel-border);
      border-radius: 18px;
      padding: 20px;
      backdrop-filter: blur(4px);
    }

    .panel-title {
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 14px;
      opacity: 0.85;
    }

    /* ── INPUT / SELECT ── */
    select, input[type="text"] {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 10px;
      font-size: 15px;
      font-family: 'Noto Sans KR', sans-serif;
      background: rgba(0,0,0,0.3);
      color: #fff;
      margin-bottom: 8px;
      outline: none;
      transition: border-color 0.2s;
    }
    select:focus, input[type="text"]:focus { border-color: var(--gold); }
    select option { background: #1a3a28; color: #fff; }

    /* ── BUTTONS ── */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 13px 22px;
      border: none;
      border-radius: 12px;
      font-size: 15px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.12s, box-shadow 0.12s, background 0.15s;
      letter-spacing: 0.5px;
    }
    .btn-gold {
      background: linear-gradient(145deg, var(--gold-shine), var(--gold));
      color: #1a1a1a;
      box-shadow: 0 4px 0 var(--gold-dark), 0 6px 16px rgba(0,0,0,0.3);
    }
    .btn-gold:hover { background: linear-gradient(145deg, #fff6aa, var(--gold-shine)); transform: translateY(-1px); }
    .btn-gold:active { transform: translateY(2px); box-shadow: 0 2px 0 var(--gold-dark); }

    .btn-red {
      background: linear-gradient(145deg, #ff7070, var(--red));
      color: #fff;
      box-shadow: 0 4px 0 var(--red-dark), 0 6px 16px rgba(0,0,0,0.3);
    }
    .btn-red:hover { background: linear-gradient(145deg, #ff8a8a, #e06060); transform: translateY(-1px); }
    .btn-red:active { transform: translateY(2px); box-shadow: 0 2px 0 var(--red-dark); }

    .btn-ghost {
      background: rgba(255,255,255,0.1);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.18); }

    .btn-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }

    /* ── POKER TABLE (Card Sharing Zone) ── */
    .poker-table {
      position: relative;
      background: radial-gradient(ellipse at 50% 45%, #1f7040 0%, #0e4a28 60%, #07311a 100%);
      border-radius: 120px;
      border: 10px solid #6b4c1e;
      outline: 4px solid #3d2a0e;
      box-shadow: inset 0 0 40px rgba(0,0,0,0.4), 0 10px 40px rgba(0,0,0,0.5);
      padding: 24px 30px;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }

    .table-label {
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 3px;
      font-size: 16px;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase;
    }

    .table-cards {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      justify-content: center;
      align-items: flex-end;
    }

    .table-card-slot {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .table-card-slot .player-label {
      font-size: 12px;
      color: rgba(255,255,255,0.7);
      letter-spacing: 0.5px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.6);
    }

    .playing-card {
      width: 72px;
      height: 100px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 38px;
      font-weight: 900;
      color: #1a1a1a;
      box-shadow: var(--card-shadow);
      border: 1px solid rgba(0,0,0,0.08);
      position: relative;
      transition: transform 0.2s;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 0;
    }
    .playing-card:hover { transform: translateY(-4px) scale(1.05); }

    .playing-card.folded-card {
      background: #c8d8c8;
      color: #888;
      font-size: 14px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      text-align: center;
      padding: 8px;
    }

    .table-card-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      margin-top: 4px;
    }

    .tci-bet {
      font-size: 11px;
      font-weight: 700;
      color: var(--gold);
      background: rgba(242,201,76,0.15);
      border-radius: 6px;
      padding: 2px 7px;
      white-space: nowrap;
    }

    .tci-chips {
      font-size: 11px;
      color: rgba(255,255,255,0.6);
      white-space: nowrap;
    }

    .tci-fold {
      font-size: 11px;
      color: rgba(255,255,255,0.3);
    }

    /* ── POT INFO ── */
    .pot-display {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(0,0,0,0.35);
      border-radius: 30px;
      padding: 8px 20px;
      border: 1px solid rgba(242,201,76,0.25);
    }
    .pot-icon { font-size: 22px; }
    .pot-amount { font-family: 'Bebas Neue', sans-serif; font-size: 24px; color: var(--gold); letter-spacing: 2px; }
    .pot-unit { font-size: 13px; color: rgba(255,255,255,0.5); }

    /* ── COIN BUTTONS ── */
    .coin-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
      margin: 4px 0;
    }
    .coin {
      width: 66px;
      height: 66px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, var(--gold-shine), var(--gold));
      border: none;
      box-shadow: 0 5px 0 var(--gold-dark), 0 8px 16px rgba(0,0,0,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3a2500;
      font-weight: 900;
      font-size: 16px;
      cursor: pointer;
      user-select: none;
      transition: transform 0.1s, box-shadow 0.1s;
      font-family: 'Noto Sans KR', sans-serif;
    }
    .coin:hover { transform: translateY(-2px); box-shadow: 0 7px 0 var(--gold-dark), 0 10px 20px rgba(0,0,0,0.35); }
    .coin:active { transform: translateY(3px); box-shadow: 0 2px 0 var(--gold-dark); }

    .raise-display {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px;
      color: var(--gold);
      letter-spacing: 2px;
      text-align: center;
    }

    /* ── PLAYER STATUS LIST ── */
    .players-status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      gap: 8px;
    }

    .player-status-card {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 10px 12px;
      font-size: 13px;
      line-height: 1.7;
      transition: opacity 0.2s;
    }

    .player-status-card.is-current {
      border-color: var(--gold);
      background: rgba(242,201,76,0.1);
    }

    .player-status-card.is-folded {
      opacity: 0.35;
    }

    .status-name {
      font-weight: 700;
      font-size: 14px;
      color: var(--gold);
      margin-bottom: 2px;
    }

    .status-name.folded-name { color: #aaa; }

    /* ── READY SCREEN ── */
    .ready-box {
      text-align: center;
      padding: 30px 20px;
    }

    .ready-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 42px;
      letter-spacing: 3px;
      color: var(--gold);
      text-shadow: 0 0 30px rgba(242,201,76,0.5), 2px 4px 0 rgba(0,0,0,0.4);
      margin-bottom: 8px;
      font-weight: 500;
    }

    .ready-msg {
      font-size: 15px;
      color: rgba(255,255,255,0.7);
      margin-bottom: 6px;
    }

    .ready-warning {
      font-size: 13px;
      color: rgba(255,255,255,0.4);
      margin-bottom: 20px;
    }

    /* ── INFO ROW ── */
    .info-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    .info-chip {
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 8px;
      padding: 8px 16px;
      font-size: 14px;
      color: rgba(255,255,255,0.85);
    }

    .highlight { color: var(--gold); font-weight: 700; }

    /* ── RESULT SCREEN ── */
    .result-header {
      text-align: center;
    }

    .result-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 52px;
      font-weight: 700;
      letter-spacing: 4px;
      color: var(--gold);
      text-shadow: 0 0 30px rgba(242,201,76,0.5), 2px 4px 0 rgba(0,0,0,0.4);
      text-align: center;
      line-height: 1;
    }

    .result-cards-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      margin: 8px 0;
    }

    .result-card-slot {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .result-card-slot .player-label {
      font-size: 13px;
      font-weight: 700;
      color: rgba(255,255,255,0.8);
    }

    .result-playing-card {
      width: 70px;
      height: 98px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 38px;
      font-weight: 900;
      color: #1a1a1a;
      box-shadow: var(--card-shadow);
      font-family: 'Bebas Neue', sans-serif;
    }

    .result-playing-card.winner-card {
      border: 3px solid var(--gold);
      box-shadow: 0 0 20px rgba(242,201,76,0.5), var(--card-shadow);
    }

    .result-playing-card.folded-result {
      background: #d0d8d0;
      color: #888;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .fold-badge {
      margin-top: 4px;
      font-size: 11px;
      font-weight: 700;
      color: rgba(255,255,255,0.45);
      letter-spacing: 1px;
      background: rgba(0,0,0,0.25);
      border-radius: 6px;
      padding: 2px 8px;
    }

    /* ── RANKING TABLE ── */
    .ranking-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }

    .ranking-table th {
      padding: 10px 14px;
      text-align: left;
      font-size: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--gold);
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .ranking-table td {
      padding: 11px 14px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      color: rgba(255,255,255,0.85);
    }

    .ranking-table tr:last-child td { border-bottom: none; }

    .rank-badge {
      display: inline-flex;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 14px;
    }

    .rank-1 { background: linear-gradient(135deg, var(--gold-shine), var(--gold)); color: #2a1800; }
    .rank-2 { background: linear-gradient(135deg, #ddd, #aaa); color: #222; }
    .rank-3 { background: linear-gradient(135deg, #d4956a, #a0632e); color: #fff; }

    .delta-pos { color: #5ef58a; font-weight: 700; }
    .delta-neg { color: #ff7070; font-weight: 700; }
    .delta-zero { color: rgba(255,255,255,0.4); }

    .winner-row td { background: rgba(242,201,76,0.07); }

    /* ── SECTION LABEL ── */
    .section-label {
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
      text-align: center;
      margin-bottom: 4px;
    }



    .player-input-row {
      display: grid;
      grid-template-columns: 1fr 150px auto;
      gap: 8px;
      align-items: center;
      margin-bottom: 8px;
    }

    .player-input-row input[type="text"],
    .player-input-row select {
      margin-bottom: 0;
    }

    .load-player-select {
      font-size: 12px;
      padding: 10px 12px;
    }

    .saved-chip-pill {
      min-width: 92px;
      text-align: center;
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid rgba(242,201,76,0.25);
      background: rgba(242,201,76,0.1);
      color: var(--gold);
      font-size: 12px;
      font-weight: 700;
      white-space: nowrap;
    }

    .saved-chip-pill.empty {
      border-color: rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.35);
    }

    label { font-size: 14px; color: rgba(255,255,255,0.7); display: block; margin-bottom: 4px; }

    .save-cell {
      text-align: center;
      white-space: nowrap;
    }

    .save-btn {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background 0.15s, color 0.15s, border-color 0.15s, opacity 0.15s;
    }

    /* 저장 버튼 */
    .keep-btn {
      background: rgba(255,255,255,0.07);
      border-color: rgba(255,255,255,0.2);
      color: rgba(255,255,255,0.45);
      margin-right: 4px;
    }
    .keep-btn.active-keep {
      background: rgba(94, 245, 138, 0.18);
      border-color: #5ef58a;
      color: #5ef58a;
    }
    .keep-btn:hover { opacity: 0.8; }

    /* 삭제 버튼 */
    .del-btn {
      background: rgba(255,255,255,0.07);
      border-color: rgba(255,255,255,0.2);
      color: rgba(255,255,255,0.45);
    }
    .del-btn.active-del {
      background: rgba(255, 112, 112, 0.18);
      border-color: #ff7070;
      color: #ff7070;
    }
    .del-btn:hover { opacity: 0.8; }
  </style>
</head>
<body>
  <div class="container">

    <!-- ══ START SCREEN ══ -->
    <div id="startScreen" class="screen active">
      <div style="text-align:center; padding-top: 10px;">
        <div class="game-title">INDIAN POKER</div>
        <div class="subtitle">2~10명 · 한 기기로 번갈아 플레이</div>
      </div>

      <div class="panel">
        <div class="panel-title">게임 설정</div>
        <label for="playerCount">플레이어 수</label>
        <select id="playerCount" onchange="makeNameInputs()">
          <option value="2">2명</option>
          <option value="3">3명</option>
          <option value="4">4명</option>
          <option value="5">5명</option>
          <option value="6">6명</option>
          <option value="7">7명</option>
          <option value="8">8명</option>
          <option value="9">9명</option>
          <option value="10">10명</option>
        </select>

        <div id="nameInputs"></div>
      </div>

      <div class="btn-row">
        <button class="btn btn-gold" onclick="startGame()">🃏 게임 시작</button>
      </div>
    </div>

    <!-- ══ READY SCREEN ══ -->
    <div id="readyScreen" class="screen">
      <div class="panel ready-box">
        <div class="ready-title" id="readyTitle"></div>
        <div class="ready-msg" id="readyMessage"></div>
        <div class="ready-warning">📵 다른 플레이어들은 화면을 보지 마세요</div>
        <button class="btn btn-gold" onclick="showTurnScreen()">확인하기 →</button>
      </div>
    </div>

    <!-- ══ TURN SCREEN ══ -->
    <div id="turnScreen" class="screen">

      <!-- 현재 플레이어 표시 -->
      <div style="text-align:center;">
        <div class="game-title" style="font-size:36px; font-weight:500; text-shadow: 0 0 30px rgba(242,201,76,0.5), 2px 4px 0 rgba(0,0,0,0.5);" id="turnTitle"></div>
      </div>

      <!-- 포커 테이블 - 카드 공유판 -->
      <div class="poker-table">
        <div class="table-label">공유 카드판 — 나를 제외한 모든 플레이어</div>
        <div class="table-cards" id="tableCards"></div>
        <div class="pot-display">
          <span class="pot-icon">💰</span>
          <span class="pot-amount" id="potAmount">0</span>
          <span class="pot-unit">칩 (판돈)</span>
        </div>
      </div>

      <!-- 내 정보 + Call 안내 -->
      <div class="panel">
        <div class="info-row">
          <div class="info-chip" id="myChipInfo">내 칩: –</div>
          <div class="info-chip" id="callInfo">–</div>
        </div>
      </div>

      <!-- 레이즈 선택 -->
      <div class="panel">
        <div class="panel-title">레이즈 금액 선택 (누를수록 누적)</div>
        <div class="coin-row">
          <div class="coin" onclick="addRaise(5)">+5</div>
          <div class="coin" onclick="addRaise(10)">+10</div>
          <div class="coin" onclick="addRaise(20)">+20</div>
        </div>
        <div class="raise-display" id="selectedAmount">선택된 레이즈: 0칩</div>
        <div class="btn-row" style="margin-top:10px;">
          <button class="btn btn-ghost" onclick="clearRaise()">초기화</button>
        </div>
      </div>

      <!-- 액션 버튼 -->
      <div class="btn-row">
        <button class="btn btn-gold" onclick="chooseAction('call')">Call / Check</button>
        <button class="btn btn-gold" onclick="chooseAction('raise')">Raise</button>
        <button class="btn btn-red" onclick="chooseAction('fold')">✖ Fold</button>
      </div>

    </div>

    <!-- ══ RESULT SCREEN ══ -->
    <div id="resultScreen" class="screen">
      <div class="result-header">
        <div class="result-title">결과 발표</div>
      </div>

      <!-- 카드 공개 -->
      <div class="panel">
        <div class="section-label">공개된 카드</div>
        <div class="result-cards-row" id="resultCards"></div>
        <div style="text-align:center; margin-top:12px; font-size:15px; font-weight:700; color:#ffffff;" id="winnerResult"></div>
      </div>

      <!-- 순위표 -->
      <div class="panel">
        <div class="panel-title">🏆 이번 라운드 순위</div>
        <table class="ranking-table">
          <thead>
            <tr>
              <th>순위</th>
              <th>플레이어</th>
              <th>획득/손실</th>
              <th>총 칩</th>
              <th style="text-align:center;">다음 라운드 참여</th>
            </tr>
          </thead>
          <tbody id="rankingBody"></tbody>
        </table>
      </div>

      <div class="btn-row">
        <button class="btn btn-gold" onclick="goNextGame()">다음 게임 시작 →</button>
      </div>
    </div>

  </div>

  <script>
    let players = [];
    let currentPlayerIndex = 0;
    let pot = 0;
    let selectedRaiseTotal = 0;
    let currentBet = 0;
    let lastRaiseAmount = 0;
    const ANTE = 5;
    let pendingPlayers = [];
    let chipsAtRoundStart = [];
    // 새로고침 후에도 유지할 플레이어 저장: { name, chips, keep }
    let savedPlayers = [];
    const SAVED_PLAYERS_KEY = 'indianPokerSavedPlayers';

    function loadSavedPlayersFromStorage() {
      try {
        const stored = localStorage.getItem(SAVED_PLAYERS_KEY);
        const parsed = stored ? JSON.parse(stored) : [];
        savedPlayers = Array.isArray(parsed)
          ? parsed
              .filter(p => p && typeof p.name === 'string' && p.name.trim() !== '')
              .map(p => ({
                name: p.name,
                chips: Number(p.chips) || 100,
                keep: p.keep !== false
              }))
          : [];
      } catch (e) {
        savedPlayers = [];
      }
    }

    function saveSavedPlayersToStorage() {
      const dataToSave = savedPlayers
        .filter(p => p.keep !== false)
        .map(p => ({ name: p.name, chips: p.chips, keep: true }));
      localStorage.setItem(SAVED_PLAYERS_KEY, JSON.stringify(dataToSave));
    }

    window.addEventListener('load', function () {
      loadSavedPlayersFromStorage();
      makeNameInputs();
    });

    function escapeHTML(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function makeNameInputs() {
      const count = Number(document.getElementById('playerCount').value);
      const box = document.getElementById('nameInputs');
      box.innerHTML = '';

      for (let i = 1; i <= count; i++) {
        // 저장된 플레이어가 있으면 기본으로 순서대로 채워줌
        const saved = savedPlayers[i - 1];
        const defaultName = saved ? saved.name : '';
        const placeholder = saved ? saved.name : ('플레이어 ' + i);
        const chipText = saved ? (saved.chips + '칩 남음') : '저장 없음';
        const chipClass = saved ? 'saved-chip-pill' : 'saved-chip-pill empty';

        let options = '<option value="">불러오기</option>';
        savedPlayers.forEach(sp => {
          const selected = saved && sp.name === saved.name ? ' selected' : '';
          options += '<option value="' + escapeHTML(sp.name) + '"' + selected + '>'
            + escapeHTML(sp.name) + ' (' + sp.chips + '칩)</option>';
        });

        box.innerHTML +=
          '<div class="player-input-row">' +
            '<input type="text" id="playerName' + i + '" placeholder="' + escapeHTML(placeholder) + '" value="' + escapeHTML(defaultName) + '" oninput="updateNameChip(' + i + ')" />' +
            '<select id="loadPlayer' + i + '" class="load-player-select" onchange="loadSavedPlayer(' + i + ')">' + options + '</select>' +
            '<div id="savedChip' + i + '" class="' + chipClass + '">' + chipText + '</div>' +
          '</div>';
      }
    }

    function loadSavedPlayer(index) {
      const select = document.getElementById('loadPlayer' + index);
      const input = document.getElementById('playerName' + index);
      if (!select || !input) return;

      input.value = select.value;
      updateNameChip(index);
    }

    function updateNameChip(index) {
      const input = document.getElementById('playerName' + index);
      const chipBox = document.getElementById('savedChip' + index);
      if (!input || !chipBox) return;

      const name = input.value.trim();
      const saved = savedPlayers.find(s => s.name === name);

      if (saved) {
        chipBox.textContent = saved.chips + '칩 남음';
        chipBox.className = 'saved-chip-pill';
      } else {
        chipBox.textContent = '저장 없음';
        chipBox.className = 'saved-chip-pill empty';
      }
    }

    function changeScreen(screenId) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(screenId).classList.add('active');
    }

    function startGame() {
      const count = Number(document.getElementById('playerCount').value);
      players = [];
      for (let i = 1; i <= count; i++) {
        const input = document.getElementById('playerName' + i);
        const name = (input && input.value.trim()) || ('플레이어 ' + i);
        // 저장된 플레이어면 칩 누적, 아니면 100칩 시작
        const saved = savedPlayers.find(s => s.name === name);
        const chips = saved ? saved.chips : 100;
        players.push({ name, chips, card: 0, folded: false, betThisRound: 0 });
      }
      startRound();
    }

    function startRound() {
      if (players.length < 2) { alert('플레이어가 2명 이상이어야 합니다.'); return; }

      // 라운드 시작 시 칩 스냅샷 저장
      chipsAtRoundStart = players.map(p => p.chips);

      // 참가비 5칩: 시작하자마자 전원이 판돈에 넣음
      // 그래서 첫 턴에 바로 Fold해도 최소 5칩은 잃음
      const brokePlayer = players.find(p => p.chips < ANTE);
      if (brokePlayer) {
        alert(brokePlayer.name + '님은 참가비 ' + ANTE + '칩이 부족해서 라운드를 시작할 수 없습니다.');
        changeScreen('startScreen');
        makeNameInputs();
        return;
      }

      pot = 0;
      selectedRaiseTotal = 0;
      currentBet = ANTE;
      lastRaiseAmount = 0;
      currentPlayerIndex = 0;
      pendingPlayers = [];

      dealCards();

      for (let i = 0; i < players.length; i++) {
        players[i].folded = false;
        players[i].chips -= ANTE;
        players[i].betThisRound = ANTE;
        pot += ANTE;
        pendingPlayers.push(i);
      }

      showReadyScreen();
    }

    function dealCards() {
      // 트럼프카드 형식: 1~10 각 4장 = 40장 덱
      // 최대 10명이므로 덱이 충분함 (40장 > 10명)
      // 같은 숫자가 최대 4명에게 배분될 수 있음 (정상)
      let deck = [];
      for (let value = 1; value <= 10; value++) {
        for (let c = 0; c < 4; c++) {
          deck.push(value);
        }
      }
      // Fisher-Yates 셔플
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = deck[i];
        deck[i] = deck[j];
        deck[j] = tmp;
      }
      // 앞에서부터 플레이어 수만큼 배분 (중복 가능)
      for (let i = 0; i < players.length; i++) {
        players[i].card = deck[i];
      }
    }

    function showReadyScreen() {
      const p = players[currentPlayerIndex];
      document.getElementById('readyTitle').textContent = p.name + '님의 차례';
      document.getElementById('readyMessage').textContent = '준비되셨으면 확인 버튼을 눌러주세요.';
      changeScreen('readyScreen');
    }

    function showTurnScreen() {
      selectedRaiseTotal = 0;
      const p = players[currentPlayerIndex];
      const needToCall = currentBet - p.betThisRound;

      document.getElementById('turnTitle').textContent = p.name + '님의 선택';
      document.getElementById('potAmount').textContent = pot;
      document.getElementById('myChipInfo').innerHTML = `내 칩: <span class="highlight">${p.chips}칩</span>`;
      document.getElementById('callInfo').innerHTML = needToCall > 0
        ? `Call 하려면 <span class="highlight">${needToCall}칩</span> 필요 · 다음 Raise는 <span class="highlight">${lastRaiseAmount + 5}칩 이상</span>`
        : `참가비 5칩 지불 완료 · 현재 Check 가능 · 다음 Raise는 <span class="highlight">${lastRaiseAmount + 5}칩 이상</span>`;

      renderTableCards();
      updateSelectedAmount();
      changeScreen('turnScreen');
    }

    // ── 포커 테이블 카드 공유판 렌더링 ──
    function renderTableCards() {
      const box = document.getElementById('tableCards');
      box.innerHTML = '';

      const others = players
        .map((p, i) => ({ p, i }))
        .filter(({ i }) => i !== currentPlayerIndex);

      if (others.length === 0) {
        box.innerHTML = '<div style="color:rgba(255,255,255,0.4); font-size:14px;">상대 카드가 없습니다</div>';
        return;
      }

      others.forEach(({ p }) => {
        const slot = document.createElement('div');
        slot.className = 'table-card-slot';

        const label = document.createElement('div');
        label.className = 'player-label';
        label.textContent = p.name;

        const card = document.createElement('div');
        if (p.folded) {
          card.className = 'playing-card folded-card';
          card.textContent = 'FOLD';
        } else {
          card.className = 'playing-card';
          card.textContent = p.card;
        }

        const info = document.createElement('div');
        info.className = 'table-card-info';
        if (p.folded) {
          info.innerHTML =
            '<span class="tci-bet">베팅 ' + p.betThisRound + '칩</span>' +
            '<span class="tci-fold">폴드</span>';
        } else {
          info.innerHTML =
            '<span class="tci-bet">베팅 ' + p.betThisRound + '칩</span>' +
            '<span class="tci-chips">잔여 ' + p.chips + '칩</span>';
        }

        slot.appendChild(label);
        slot.appendChild(card);
        slot.appendChild(info);
        box.appendChild(slot);
      });
    }

    function addRaise(amount) {
      selectedRaiseTotal += amount;
      updateSelectedAmount();
    }

    function clearRaise() {
      selectedRaiseTotal = 0;
      updateSelectedAmount();
    }

    function updateSelectedAmount() {
      document.getElementById('selectedAmount').textContent = `선택된 레이즈: ${selectedRaiseTotal}칩`;
    }

    function chooseAction(action) {
      const p = players[currentPlayerIndex];
      const needToCall = currentBet - p.betThisRound;

      if (action === 'fold') {
        p.folded = true;
        removeFromPending(currentPlayerIndex);
        if (activePlayerCount() === 1) {
          const wi = players.findIndex(x => !x.folded);
          finishByOnlyOneLeft(wi);
          return;
        }
        goNextTurn(); return;
      }

      if (action === 'call') {
        if (p.chips < needToCall) { alert('Call 할 칩이 부족합니다.'); return; }
        p.chips -= needToCall;
        p.betThisRound += needToCall;
        pot += needToCall;
        removeFromPending(currentPlayerIndex);
        if (pendingPlayers.length === 0) { showdown(); } else { goNextTurn(); }
        return;
      }

      if (action === 'raise') {
        if (selectedRaiseTotal <= 0) { alert('레이즈 금액을 선택하세요.'); return; }

        // 이전 플레이어가 올린 레이즈 금액보다 더 크게 올려야 함
        // 예: P1 +10 → P2는 +15 이상, P2 +20 → P1은 +25 이상
        const minimumRaise = lastRaiseAmount + 5;
        if (selectedRaiseTotal < minimumRaise) {
          alert('이전 레이즈보다 더 많이 올려야 합니다. 최소 ' + minimumRaise + '칩 이상 레이즈하세요.');
          return;
        }

        const totalPayment = needToCall + selectedRaiseTotal;
        if (p.chips < totalPayment) { alert('칩이 부족합니다.'); return; }
        p.chips -= totalPayment;
        p.betThisRound += totalPayment;
        pot += totalPayment;
        currentBet = p.betThisRound;
        lastRaiseAmount = selectedRaiseTotal;
        pendingPlayers = players.map((_, i) => i).filter(i => !players[i].folded && i !== currentPlayerIndex);
        goNextTurn();
      }
    }

    function removeFromPending(index) {
      pendingPlayers = pendingPlayers.filter(i => i !== index);
    }

    function goNextTurn() {
      if (pendingPlayers.length === 0) { showdown(); return; }
      let next = currentPlayerIndex;
      let safety = 0;
      do {
        next = (next + 1) % players.length;
        safety++;
      } while ((players[next].folded || !pendingPlayers.includes(next)) && safety <= players.length + 1);
      currentPlayerIndex = next;
      showReadyScreen();
    }

    function activePlayerCount() {
      return players.filter(p => !p.folded).length;
    }

    function finishByOnlyOneLeft(winnerIndex) {
      players[winnerIndex].chips += pot;
      pot = 0;
      renderResultScreen('다른 플레이어들이 모두 Fold 했습니다.', [winnerIndex]);
    }

    function showdown() {
      let maxCard = -1;
      let winners = [];

      for (let i = 0; i < players.length; i++) {
        if (!players[i].folded) {
          if (players[i].card > maxCard) { maxCard = players[i].card; winners = [i]; }
          else if (players[i].card === maxCard) { winners.push(i); }
        }
      }

      const prize = winners.length > 0 ? Math.floor(pot / winners.length) : 0;
      winners.forEach(wi => { players[wi].chips += prize; });
      pot = 0;

      const subtitle = winners.length === 1
        ? `${players[winners[0]].name}님 승리!`
        : `무승부: ${winners.map(i => players[i].name).join(', ')}`;

      renderResultScreen(subtitle, winners);
    }

    // ── 결과 화면 렌더링 ──
    function renderResultScreen(subtitle, winners) {
      // 카드 공개
      const cardsRow = document.getElementById('resultCards');
      cardsRow.innerHTML = '';
      players.forEach((p, i) => {
        const slot = document.createElement('div');
        slot.className = 'result-card-slot';

        const label = document.createElement('div');
        label.className = 'player-label';
        label.textContent = p.name;

        const card = document.createElement('div');
        // 결과 화면은 게임 종료 후이므로 폴드 여부와 관계없이 모든 카드 공개
        card.className = 'result-playing-card'
          + (winners.includes(i) ? ' winner-card' : '')
          + (p.folded ? ' folded-result' : '');
        card.textContent = p.card;

        // 폴드 배지 (카드 숫자는 보이되 폴드했음을 별도 표시)
        if (p.folded) {
          const badge = document.createElement('div');
          badge.className = 'fold-badge';
          badge.textContent = 'FOLD';
          slot.appendChild(label);
          slot.appendChild(card);
          slot.appendChild(badge);
          cardsRow.appendChild(slot);
          return;
        }

        slot.appendChild(label);
        slot.appendChild(card);
        cardsRow.appendChild(slot);
      });

      document.getElementById('winnerResult').textContent = subtitle;

      // 순위 계산
      const ranked = players.map((p, i) => ({
        name: p.name,
        chips: p.chips,
        delta: p.chips - chipsAtRoundStart[i],
        isWinner: winners.includes(i)
      }));
      ranked.sort((a, b) => b.chips - a.chips);

      // 라운드 종료마다 savedPlayers를 현재 플레이어 전원으로 초기화 (기본: 전원 저장)
      savedPlayers = players.map(p => ({ name: p.name, chips: p.chips, keep: true }));
      saveSavedPlayersToStorage();

      const tbody = document.getElementById('rankingBody');
      tbody.innerHTML = '';

      // 총 칩이 같으면 같은 등수를 부여함
      // 예: 200칩, 200칩, 150칩 → 1등, 1등, 3등
      let prevChips = null;
      let displayRank = 0;

      ranked.forEach((r, index) => {
        const tr = document.createElement('tr');
        tr.id = 'rank-row-' + r.name;
        if (r.isWinner) tr.className = 'winner-row';

        if (r.chips !== prevChips) {
          displayRank = index + 1;
        }
        prevChips = r.chips;

        const rankNum = displayRank;
        const badgeClass = rankNum <= 3 ? 'rank-' + rankNum : '';
        const deltaClass = r.delta > 0 ? 'delta-pos' : r.delta < 0 ? 'delta-neg' : 'delta-zero';
        const deltaText = r.delta > 0 ? '+' + r.delta : '' + r.delta;
        const medal = rankNum === 1 ? '🥇' : rankNum === 2 ? '🥈' : rankNum === 3 ? '🥉' : '';

        tr.innerHTML =
          '<td><span class="rank-badge ' + badgeClass + '">' + rankNum + '</span></td>' +
          '<td>' + (medal ? medal + ' ' : '') + r.name + '</td>' +
          '<td><span class="' + deltaClass + '">' + deltaText + '칩</span></td>' +
          '<td><strong>' + r.chips + '칩</strong></td>' +
          '<td class="save-cell">' +
            '<button class="save-btn keep-btn active-keep" onclick="setSave(\'' + r.name + '\', true)">저장</button>' +
            '<button class="save-btn del-btn" onclick="setSave(\'' + r.name + '\', false)">삭제</button>' +
          '</td>';
        tbody.appendChild(tr);
      });

      changeScreen('resultScreen');
    }

    // 저장(keep=true) / 삭제(keep=false) 선택
    function setSave(name, keep) {
      const entry = savedPlayers.find(s => s.name === name);
      if (entry) entry.keep = keep;
      saveSavedPlayersToStorage();

      // 해당 행 버튼 UI 갱신
      const row = document.getElementById('rank-row-' + name);
      if (row) {
        const keepBtn = row.querySelector('.keep-btn');
        const delBtn  = row.querySelector('.del-btn');
        if (keep) {
          keepBtn.classList.add('active-keep');
          delBtn.classList.remove('active-del');
          row.style.opacity = '1';
        } else {
          keepBtn.classList.remove('active-keep');
          delBtn.classList.add('active-del');
          row.style.opacity = '0.45';
        }
      }
    }

    // 다음 게임 시작: 저장된 플레이어만 유지, 삭제된 플레이어는 제거
    function goNextGame() {
      // keep=true인 플레이어만 남김
      savedPlayers = savedPlayers.filter(s => s.keep);
      saveSavedPlayersToStorage();
      players = [];
      changeScreen('startScreen');
      makeNameInputs();
    }

    function nextRound() { startRound(); }

    function resetGame() {
      savedPlayers = savedPlayers.filter(s => s.keep);
      saveSavedPlayersToStorage();
      players = [];
      changeScreen('startScreen');
      makeNameInputs();
    }
  </script>
</body>
</html>
