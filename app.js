// NBA Team Data
const teams = [
  { name: "Boston Celtics", conference: "East", seed: 1, wins: 64, losses: 18, win_pct: 0.780, offensive_rating: 120.1, defensive_rating: 110.2, net_rating: 9.9, effective_fg_pct: 58.2, true_shooting_pct: 61.5, clutch_net_rating: 8.2, home_win_pct: 0.829, away_win_pct: 0.732, recent_form_l10: 8, star_player_per: 28.5, bench_depth_score: 8.2, playoff_experience: 145, key_players_injured: 0, injury_impact_score: 0.0 },
  { name: "New York Knicks", conference: "East", seed: 2, wins: 56, losses: 26, win_pct: 0.683, offensive_rating: 116.8, defensive_rating: 112.1, net_rating: 4.7, effective_fg_pct: 55.8, true_shooting_pct: 58.3, clutch_net_rating: 3.5, home_win_pct: 0.732, away_win_pct: 0.634, recent_form_l10: 7, star_player_per: 26.1, bench_depth_score: 7.5, playoff_experience: 98, key_players_injured: 1, injury_impact_score: 2.5 },
  { name: "Milwaukee Bucks", conference: "East", seed: 3, wins: 54, losses: 28, win_pct: 0.659, offensive_rating: 118.5, defensive_rating: 113.8, net_rating: 4.7, effective_fg_pct: 56.9, true_shooting_pct: 59.2, clutch_net_rating: 2.1, home_win_pct: 0.707, away_win_pct: 0.610, recent_form_l10: 6, star_player_per: 27.8, bench_depth_score: 7.1, playoff_experience: 132, key_players_injured: 0, injury_impact_score: 0.0 },
  { name: "Cleveland Cavaliers", conference: "East", seed: 4, wins: 53, losses: 29, win_pct: 0.646, offensive_rating: 115.2, defensive_rating: 111.5, net_rating: 3.7, effective_fg_pct: 54.2, true_shooting_pct: 56.8, clutch_net_rating: 1.8, home_win_pct: 0.683, away_win_pct: 0.610, recent_form_l10: 7, star_player_per: 24.9, bench_depth_score: 6.8, playoff_experience: 87, key_players_injured: 1, injury_impact_score: 3.1 },
  { name: "Orlando Magic", conference: "East", seed: 5, wins: 51, losses: 31, win_pct: 0.622, offensive_rating: 113.8, defensive_rating: 109.2, net_rating: 4.6, effective_fg_pct: 53.5, true_shooting_pct: 56.1, clutch_net_rating: 3.9, home_win_pct: 0.659, away_win_pct: 0.585, recent_form_l10: 7, star_player_per: 23.2, bench_depth_score: 7.9, playoff_experience: 45, key_players_injured: 2, injury_impact_score: 5.8 },
  { name: "Indiana Pacers", conference: "East", seed: 6, wins: 49, losses: 33, win_pct: 0.598, offensive_rating: 119.3, defensive_rating: 115.1, net_rating: 4.2, effective_fg_pct: 57.1, true_shooting_pct: 59.4, clutch_net_rating: 2.7, home_win_pct: 0.634, away_win_pct: 0.561, recent_form_l10: 6, star_player_per: 26.5, bench_depth_score: 8.5, playoff_experience: 76, key_players_injured: 0, injury_impact_score: 0.0 },
  { name: "Miami Heat", conference: "East", seed: 7, wins: 47, losses: 35, win_pct: 0.573, offensive_rating: 114.5, defensive_rating: 112.8, net_rating: 1.7, effective_fg_pct: 54.8, true_shooting_pct: 57.2, clutch_net_rating: -0.5, home_win_pct: 0.610, away_win_pct: 0.537, recent_form_l10: 5, star_player_per: 24.1, bench_depth_score: 6.9, playoff_experience: 156, key_players_injured: 1, injury_impact_score: 2.8 },
  { name: "Philadelphia 76ers", conference: "East", seed: 8, wins: 46, losses: 36, win_pct: 0.561, offensive_rating: 115.9, defensive_rating: 113.4, net_rating: 2.5, effective_fg_pct: 55.3, true_shooting_pct: 57.8, clutch_net_rating: 1.2, home_win_pct: 0.585, away_win_pct: 0.537, recent_form_l10: 6, star_player_per: 25.3, bench_depth_score: 7.2, playoff_experience: 89, key_players_injured: 1, injury_impact_score: 3.5 },
  { name: "Oklahoma City Thunder", conference: "West", seed: 1, wins: 62, losses: 20, win_pct: 0.756, offensive_rating: 121.2, defensive_rating: 108.5, net_rating: 12.7, effective_fg_pct: 59.1, true_shooting_pct: 62.1, clutch_net_rating: 10.5, home_win_pct: 0.805, away_win_pct: 0.707, recent_form_l10: 9, star_player_per: 31.2, bench_depth_score: 8.8, playoff_experience: 76, key_players_injured: 0, injury_impact_score: 0.0 },
  { name: "Denver Nuggets", conference: "West", seed: 2, wins: 58, losses: 24, win_pct: 0.707, offensive_rating: 119.8, defensive_rating: 111.3, net_rating: 8.5, effective_fg_pct: 57.5, true_shooting_pct: 60.2, clutch_net_rating: 6.8, home_win_pct: 0.756, away_win_pct: 0.659, recent_form_l10: 8, star_player_per: 29.8, bench_depth_score: 8.1, playoff_experience: 178, key_players_injured: 0, injury_impact_score: 0.0 },
  { name: "Minnesota Timberwolves", conference: "West", seed: 3, wins: 56, losses: 26, win_pct: 0.683, offensive_rating: 116.4, defensive_rating: 110.8, net_rating: 5.6, effective_fg_pct: 55.6, true_shooting_pct: 58.1, clutch_net_rating: 4.2, home_win_pct: 0.732, away_win_pct: 0.634, recent_form_l10: 7, star_player_per: 26.4, bench_depth_score: 7.6, playoff_experience: 102, key_players_injured: 1, injury_impact_score: 3.2 },
  { name: "LA Clippers", conference: "West", seed: 4, wins: 52, losses: 30, win_pct: 0.634, offensive_rating: 117.2, defensive_rating: 112.6, net_rating: 4.6, effective_fg_pct: 56.2, true_shooting_pct: 58.9, clutch_net_rating: 3.1, home_win_pct: 0.683, away_win_pct: 0.585, recent_form_l10: 6, star_player_per: 25.7, bench_depth_score: 7.8, playoff_experience: 134, key_players_injured: 0, injury_impact_score: 0.0 },
  { name: "Dallas Mavericks", conference: "West", seed: 5, wins: 50, losses: 32, win_pct: 0.610, offensive_rating: 118.1, defensive_rating: 114.2, net_rating: 3.9, effective_fg_pct: 56.8, true_shooting_pct: 59.3, clutch_net_rating: 2.9, home_win_pct: 0.659, away_win_pct: 0.561, recent_form_l10: 6, star_player_per: 27.1, bench_depth_score: 7.3, playoff_experience: 98, key_players_injured: 1, injury_impact_score: 2.9 },
  { name: "Phoenix Suns", conference: "West", seed: 6, wins: 48, losses: 34, win_pct: 0.585, offensive_rating: 115.7, defensive_rating: 113.9, net_rating: 1.8, effective_fg_pct: 54.9, true_shooting_pct: 57.3, clutch_net_rating: 0.8, home_win_pct: 0.634, away_win_pct: 0.537, recent_form_l10: 5, star_player_per: 23.8, bench_depth_score: 6.7, playoff_experience: 87, key_players_injured: 2, injury_impact_score: 6.1 },
  { name: "LA Lakers", conference: "West", seed: 7, wins: 47, losses: 35, win_pct: 0.573, offensive_rating: 116.3, defensive_rating: 114.1, net_rating: 2.2, effective_fg_pct: 55.4, true_shooting_pct: 58.0, clutch_net_rating: 1.5, home_win_pct: 0.610, away_win_pct: 0.537, recent_form_l10: 6, star_player_per: 24.5, bench_depth_score: 7.1, playoff_experience: 167, key_players_injured: 1, injury_impact_score: 3.8 },
  { name: "Golden State Warriors", conference: "West", seed: 8, wins: 46, losses: 36, win_pct: 0.561, offensive_rating: 117.8, defensive_rating: 113.5, net_rating: 4.3, effective_fg_pct: 56.7, true_shooting_pct: 59.1, clutch_net_rating: 5.3, home_win_pct: 0.585, away_win_pct: 0.537, recent_form_l10: 7, star_player_per: 26.9, bench_depth_score: 8.3, playoff_experience: 189, key_players_injured: 0, injury_impact_score: 0.0 }
];

// State
let selectedTeamA = null;
let selectedTeamB = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initializeTabs();
  populateTeamDropdowns();
  initializeTeamSelectors();
  initializeFeatureFilters();
});

// Tab Navigation
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.nav-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      
      // Update active states
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');
    });
  });
}

// Populate Team Dropdowns
function populateTeamDropdowns() {
  const teamASelect = document.getElementById('teamA-select');
  const teamBSelect = document.getElementById('teamB-select');

  teams.forEach(team => {
    const optionA = document.createElement('option');
    optionA.value = team.name;
    optionA.textContent = `${team.name} (${team.seed} seed - ${team.conference})`;
    teamASelect.appendChild(optionA);

    const optionB = document.createElement('option');
    optionB.value = team.name;
    optionB.textContent = `${team.name} (${team.seed} seed - ${team.conference})`;
    teamBSelect.appendChild(optionB);
  });
}

// Initialize Team Selectors
function initializeTeamSelectors() {
  const teamASelect = document.getElementById('teamA-select');
  const teamBSelect = document.getElementById('teamB-select');
  const predictBtn = document.getElementById('predict-btn');

  teamASelect.addEventListener('change', (e) => {
    selectedTeamA = teams.find(t => t.name === e.target.value);
    if (selectedTeamA) {
      displayTeamInfo('teamA', selectedTeamA);
      checkPredictButton();
    }
  });

  teamBSelect.addEventListener('change', (e) => {
    selectedTeamB = teams.find(t => t.name === e.target.value);
    if (selectedTeamB) {
      displayTeamInfo('teamB', selectedTeamB);
      checkPredictButton();
    }
  });

  predictBtn.addEventListener('click', () => {
    if (selectedTeamA && selectedTeamB) {
      makePrediction(selectedTeamA, selectedTeamB);
    }
  });
}

// Display Team Info
function displayTeamInfo(teamId, team) {
  const infoDiv = document.getElementById(`${teamId}-info`);
  infoDiv.classList.remove('hidden');

  // Conference and Seed
  infoDiv.querySelector('.team-conference').textContent = `${team.conference} Conference`;
  infoDiv.querySelector('.team-seed').textContent = `#${team.seed} Seed`;

  // Record
  infoDiv.querySelector('.team-record').textContent = `${team.wins}-${team.losses} (${(team.win_pct * 100).toFixed(1)}%)`;

  // Stats
  infoDiv.querySelector('.off-rating').textContent = team.offensive_rating.toFixed(1);
  infoDiv.querySelector('.def-rating').textContent = team.defensive_rating.toFixed(1);
  infoDiv.querySelector('.net-rating').textContent = team.net_rating > 0 ? `+${team.net_rating.toFixed(1)}` : team.net_rating.toFixed(1);
  infoDiv.querySelector('.efg').textContent = `${team.effective_fg_pct.toFixed(1)}%`;

  // Injury Status
  const injuryIndicator = infoDiv.querySelector('.injury-indicator');
  if (team.key_players_injured === 0) {
    injuryIndicator.textContent = 'Healthy';
    injuryIndicator.className = 'injury-indicator healthy';
  } else if (team.key_players_injured === 1) {
    injuryIndicator.textContent = '1 Key Injury';
    injuryIndicator.className = 'injury-indicator minor';
  } else {
    injuryIndicator.textContent = `${team.key_players_injured} Key Injuries`;
    injuryIndicator.className = 'injury-indicator major';
  }

  // Recent Form
  const formIndicator = infoDiv.querySelector('.form-indicator');
  formIndicator.innerHTML = '';
  const wins = team.recent_form_l10;
  const losses = 10 - wins;
  
  for (let i = 0; i < wins; i++) {
    const box = document.createElement('div');
    box.className = 'form-box win';
    formIndicator.appendChild(box);
  }
  for (let i = 0; i < losses; i++) {
    const box = document.createElement('div');
    box.className = 'form-box loss';
    formIndicator.appendChild(box);
  }
}

// Check if Predict Button Should Be Enabled
function checkPredictButton() {
  const predictBtn = document.getElementById('predict-btn');
  if (selectedTeamA && selectedTeamB && selectedTeamA.name !== selectedTeamB.name) {
    predictBtn.disabled = false;
  } else {
    predictBtn.disabled = true;
  }
}

// Make Prediction
function makePrediction(teamA, teamB) {
  // Show loading state
  showToast('Analyzing matchup...');
  
  // Calculate win probability
  const prediction = calculateWinProbability(teamA, teamB);
  
  // Display results
  setTimeout(() => {
    displayPredictionResults(prediction);
    displayGameBreakdown(prediction);
    showToast('Prediction complete!');
  }, 800);
}

// Calculate Win Probability
function calculateWinProbability(teamA, teamB) {
  let teamAProb = 50; // Start at 50%
  
  // 1. Net Rating difference (25% weight)
  const netRatingDiff = teamA.net_rating - teamB.net_rating;
  teamAProb += netRatingDiff * 2.5;
  
  // 2. Offensive/Defensive Rating comparison (30% combined)
  const offRatingDiff = teamA.offensive_rating - teamB.offensive_rating;
  const defRatingDiff = teamB.defensive_rating - teamA.defensive_rating; // Lower is better
  teamAProb += offRatingDiff * 1.5;
  teamAProb += defRatingDiff * 1.5;
  
  // 3. Home court advantage (10% - higher seed)
  if (teamA.seed < teamB.seed) {
    teamAProb += 8;
  } else if (teamA.seed > teamB.seed) {
    teamAProb -= 8;
  }
  
  // 4. Injury impact (15%)
  const injuryDiff = teamB.injury_impact_score - teamA.injury_impact_score;
  teamAProb += injuryDiff * 3;
  
  // 5. Recent form (10%)
  const formDiff = teamA.recent_form_l10 - teamB.recent_form_l10;
  teamAProb += formDiff * 2;
  
  // 6. Playoff experience (5%)
  const expDiff = (teamA.playoff_experience - teamB.playoff_experience) / 20;
  teamAProb += expDiff;
  
  // 7. Clutch performance (5%)
  const clutchDiff = teamA.clutch_net_rating - teamB.clutch_net_rating;
  teamAProb += clutchDiff * 0.8;
  
  // Clamp probability between 15% and 85%
  teamAProb = Math.max(15, Math.min(85, teamAProb));
  const teamBProb = 100 - teamAProb;
  
  // Determine series length (based on probability difference)
  const probDiff = Math.abs(teamAProb - 50);
  let seriesLength;
  if (probDiff > 20) seriesLength = 5;
  else if (probDiff > 10) seriesLength = 6;
  else seriesLength = 7;
  
  // Calculate confidence
  const confidence = probDiff > 15 ? 'High' : probDiff > 8 ? 'Medium' : 'Low';
  
  // Determine key factors
  const factors = [];
  if (Math.abs(netRatingDiff) > 3) {
    factors.push(`Net Rating advantage: ${netRatingDiff > 0 ? teamA.name : teamB.name} (+${Math.abs(netRatingDiff).toFixed(1)})`);
  }
  if (Math.abs(teamA.seed - teamB.seed) >= 3) {
    factors.push(`Significant seed advantage: ${teamA.seed < teamB.seed ? teamA.name : teamB.name}`);
  }
  if (teamA.injury_impact_score > 4 || teamB.injury_impact_score > 4) {
    factors.push(`Key injuries impacting ${teamA.injury_impact_score > teamB.injury_impact_score ? teamA.name : teamB.name}`);
  }
  if (Math.abs(offRatingDiff) > 3) {
    factors.push(`Superior offense: ${offRatingDiff > 0 ? teamA.name : teamB.name}`);
  }
  if (Math.abs(defRatingDiff) > 2) {
    factors.push(`Elite defense: ${defRatingDiff > 0 ? teamA.name : teamB.name}`);
  }
  
  return {
    teamA,
    teamB,
    teamAProb: teamAProb.toFixed(1),
    teamBProb: teamBProb.toFixed(1),
    seriesLength,
    confidence,
    factors: factors.slice(0, 3)
  };
}

// Display Prediction Results
function displayPredictionResults(prediction) {
  const resultsDiv = document.getElementById('prediction-results');
  resultsDiv.classList.remove('hidden');
  
  // Team names and probabilities
  const teamAProb = resultsDiv.querySelector('.teamA-prob');
  teamAProb.querySelector('.prob-team').textContent = prediction.teamA.name;
  teamAProb.querySelector('.prob-value').textContent = `${prediction.teamAProb}%`;
  
  const teamBProb = resultsDiv.querySelector('.teamB-prob');
  teamBProb.querySelector('.prob-team').textContent = prediction.teamB.name;
  teamBProb.querySelector('.prob-value').textContent = `${prediction.teamBProb}%`;
  
  // Probability bar
  const probBar = resultsDiv.querySelector('.teamA-bar');
  probBar.style.width = `${prediction.teamAProb}%`;
  
  // Series info
  resultsDiv.querySelector('.series-length').textContent = `${prediction.seriesLength} games`;
  resultsDiv.querySelector('.confidence').textContent = prediction.confidence;
  
  // Key factors
  const factorsList = resultsDiv.querySelector('.factors-list');
  factorsList.innerHTML = '';
  prediction.factors.forEach(factor => {
    const li = document.createElement('li');
    li.textContent = factor;
    factorsList.appendChild(li);
  });
  
  // Scroll to results
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Display Game-by-Game Breakdown
function displayGameBreakdown(prediction) {
  const breakdownDiv = document.getElementById('game-breakdown');
  breakdownDiv.classList.remove('hidden');
  
  const gamesList = breakdownDiv.querySelector('.games-list');
  gamesList.innerHTML = '';
  
  const teamAWinProb = parseFloat(prediction.teamAProb) / 100;
  const higherSeed = prediction.teamA.seed < prediction.teamB.seed ? prediction.teamA : prediction.teamB;
  
  let teamAWins = 0;
  let teamBWins = 0;
  let gameNum = 1;
  
  // 2-2-1-1-1 format (higher seed gets games 1,2,5,7 at home)
  const homeTeams = [higherSeed, higherSeed, null, null, higherSeed, null, higherSeed];
  
  while (teamAWins < 4 && teamBWins < 4 && gameNum <= 7) {
    const homeTeam = homeTeams[gameNum - 1];
    let adjustedProb = teamAWinProb;
    
    // Home court adjustment
    if (homeTeam) {
      if (homeTeam.name === prediction.teamA.name) {
        adjustedProb += 0.08; // 8% boost for home team
      } else {
        adjustedProb -= 0.08;
      }
    }
    
    // Simulate game
    const random = Math.random();
    const winner = random < adjustedProb ? prediction.teamA : prediction.teamB;
    
    if (winner.name === prediction.teamA.name) {
      teamAWins++;
    } else {
      teamBWins++;
    }
    
    // Create game item
    const gameItem = document.createElement('div');
    gameItem.className = 'game-item';
    
    const location = homeTeam ? (homeTeam.name === winner.name ? 'Home' : 'Away') : 'Neutral';
    
    gameItem.innerHTML = `
      <span class="game-number">Game ${gameNum}</span>
      <span class="game-winner">${winner.name}</span>
      <span class="game-location">${location}</span>
    `;
    
    gamesList.appendChild(gameItem);
    gameNum++;
  }
}

// Feature Filters
function initializeFeatureFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const featureItems = document.querySelectorAll('.feature-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter items
      featureItems.forEach(item => {
        if (category === 'all') {
          item.style.display = 'block';
        } else {
          const itemCategory = item.getAttribute('data-category');
          item.style.display = itemCategory === category ? 'block' : 'none';
        }
      });
    });
  });
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}