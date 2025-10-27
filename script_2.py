
# Create sample historical matchup data
import pandas as pd
import numpy as np

np.random.seed(42)

# Historical playoff matchup trends data
historical_matchups = []

matchup_types = [
    {"seed_diff": "1v8", "higher_seed_win_pct": 0.82, "avg_games": 4.8, "sweep_rate": 0.35},
    {"seed_diff": "2v7", "higher_seed_win_pct": 0.73, "avg_games": 5.2, "sweep_rate": 0.22},
    {"seed_diff": "3v6", "higher_seed_win_pct": 0.68, "avg_games": 5.6, "sweep_rate": 0.15},
    {"seed_diff": "4v5", "higher_seed_win_pct": 0.58, "avg_games": 6.1, "sweep_rate": 0.08},
]

for matchup in matchup_types:
    historical_matchups.append({
        "Matchup_Type": matchup["seed_diff"],
        "Higher_Seed_Win_Pct": matchup["higher_seed_win_pct"],
        "Lower_Seed_Win_Pct": 1 - matchup["higher_seed_win_pct"],
        "Avg_Games_To_Close": matchup["avg_games"],
        "Sweep_Rate": matchup["sweep_rate"],
        "Game_7_Rate": (7 - matchup["avg_games"]) / 3,  # Simplified calculation
        "Home_Court_Advantage": 0.65,
        "Sample_Size": np.random.randint(150, 250)
    })

df_historical = pd.DataFrame(historical_matchups)
df_historical.to_csv('historical_matchup_trends.csv', index=False)

print("Historical Matchup Trends Dataset Created")
print("=" * 80)
print(df_historical.to_string(index=False))

# Create model performance comparison data
model_comparison = {
    "Model": ["Logistic Regression", "Random Forest", "XGBoost", "Neural Network", 
              "Gaussian Naive Bayes", "Ensemble (Stacked)"],
    "Training_Accuracy": [0.72, 0.78, 0.81, 0.76, 0.68, 0.83],
    "Test_Accuracy": [0.68, 0.71, 0.74, 0.70, 0.65, 0.75],
    "Precision": [0.70, 0.73, 0.76, 0.72, 0.67, 0.77],
    "Recall": [0.67, 0.70, 0.73, 0.69, 0.64, 0.74],
    "F1_Score": [0.68, 0.71, 0.74, 0.70, 0.65, 0.75],
    "Training_Time_Sec": [2.1, 45.3, 120.5, 180.2, 1.5, 250.8],
    "Prediction_Time_Ms": [1.2, 8.5, 15.3, 22.1, 0.8, 35.2]
}

df_models = pd.DataFrame(model_comparison)
df_models.to_csv('model_performance_comparison.csv', index=False)

print("\n\nModel Performance Comparison Dataset Created")
print("=" * 80)
print(df_models.to_string(index=False))

# Create feature importance data
feature_importance = {
    "Feature": [
        "Net_Rating", "Offensive_Rating", "Defensive_Rating", "Effective_FG_Pct",
        "Clutch_Net_Rating", "Win_Pct", "True_Shooting_Pct", "Star_Player_PER",
        "Home_Win_Pct", "Injury_Impact_Score", "Bench_Depth_Score", "Recent_Form_L10",
        "Assist_Rate", "Turnover_Rate", "Offensive_Reb_Pct", "Defensive_Reb_Pct",
        "Free_Throw_Rate", "Playoff_Experience", "Away_Win_Pct", "Pace"
    ],
    "Importance_Score": [
        0.142, 0.135, 0.128, 0.095, 0.089, 0.076, 0.068, 0.061,
        0.054, 0.048, 0.035, 0.027, 0.019, 0.015, 0.012, 0.011,
        0.009, 0.008, 0.006, 0.005
    ],
    "Category": [
        "Advanced", "Team Offense", "Team Defense", "Shooting", 
        "Advanced", "Basic", "Shooting", "Player",
        "Advanced", "Injury", "Player", "Advanced",
        "Team Offense", "Team Defense", "Team Offense", "Team Defense",
        "Shooting", "Player", "Advanced", "Team Offense"
    ]
}

df_importance = pd.DataFrame(feature_importance)
df_importance = df_importance.sort_values('Importance_Score', ascending=False)
df_importance.to_csv('feature_importance.csv', index=False)

print("\n\nFeature Importance Rankings Dataset Created")
print("=" * 80)
print(df_importance.head(10).to_string(index=False))

print("\n\nAll datasets created successfully!")
print("Files saved:")
print("  1. nba_playoff_teams_data.csv")
print("  2. historical_matchup_trends.csv")
print("  3. model_performance_comparison.csv")
print("  4. feature_importance.csv")
