
# Create sample NBA playoff team data for the predictive model
import pandas as pd
import numpy as np

# Create sample data for 16 playoff teams (8 from each conference)
np.random.seed(42)

teams_data = {
    "Team": [
        # Eastern Conference
        "Boston Celtics", "New York Knicks", "Milwaukee Bucks", "Cleveland Cavaliers",
        "Orlando Magic", "Indiana Pacers", "Miami Heat", "Philadelphia 76ers",
        # Western Conference
        "Oklahoma City Thunder", "Denver Nuggets", "Minnesota Timberwolves", 
        "LA Clippers", "Dallas Mavericks", "Phoenix Suns", "LA Lakers", "Golden State Warriors"
    ],
    "Conference": ["East"]*8 + ["West"]*8,
    "Seed": [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
    "Wins": [64, 56, 54, 53, 51, 49, 47, 46, 62, 58, 56, 52, 50, 48, 47, 46],
    "Losses": [18, 26, 28, 29, 31, 33, 35, 36, 20, 24, 26, 30, 32, 34, 35, 36],
    "Win_Pct": [0.780, 0.683, 0.659, 0.646, 0.622, 0.598, 0.573, 0.561, 
                0.756, 0.707, 0.683, 0.634, 0.610, 0.585, 0.573, 0.561],
    "Offensive_Rating": [120.1, 116.8, 118.5, 115.2, 113.8, 119.3, 114.5, 115.9,
                         121.2, 119.8, 116.4, 117.2, 118.1, 115.7, 116.3, 117.8],
    "Defensive_Rating": [110.2, 112.1, 113.8, 111.5, 109.2, 115.1, 112.8, 113.4,
                         108.5, 111.3, 110.8, 112.6, 114.2, 113.9, 114.1, 113.5],
    "Net_Rating": [9.9, 4.7, 4.7, 3.7, 4.6, 4.2, 1.7, 2.5,
                   12.7, 8.5, 5.6, 4.6, 3.9, 1.8, 2.2, 4.3],
    "Effective_FG_Pct": [58.2, 55.8, 56.9, 54.2, 53.5, 57.1, 54.8, 55.3,
                         59.1, 57.5, 55.6, 56.2, 56.8, 54.9, 55.4, 56.7],
    "True_Shooting_Pct": [61.5, 58.3, 59.2, 56.8, 56.1, 59.4, 57.2, 57.8,
                          62.1, 60.2, 58.1, 58.9, 59.3, 57.3, 58.0, 59.1],
    "Pace": [98.5, 96.2, 97.8, 95.3, 94.8, 101.2, 96.5, 95.9,
             99.8, 97.1, 98.4, 96.7, 98.9, 95.6, 97.3, 99.2],
    "Assist_Rate": [24.8, 22.1, 23.5, 21.8, 20.9, 25.3, 22.4, 22.9,
                    26.1, 24.5, 23.2, 23.8, 24.1, 21.6, 22.7, 25.8],
    "Turnover_Rate": [12.8, 13.5, 13.2, 14.1, 13.8, 12.9, 14.5, 13.9,
                      11.9, 12.5, 13.4, 13.1, 13.6, 14.3, 13.8, 12.7],
    "Offensive_Reb_Pct": [26.5, 25.8, 27.2, 24.9, 23.8, 26.1, 25.3, 25.7,
                          27.8, 26.9, 26.4, 25.5, 26.7, 24.6, 25.2, 27.1],
    "Defensive_Reb_Pct": [75.2, 73.8, 74.5, 72.9, 78.1, 73.2, 73.5, 74.1,
                          76.5, 75.1, 74.8, 73.6, 74.2, 72.8, 73.4, 75.8],
    "Free_Throw_Rate": [25.8, 23.4, 24.9, 22.1, 21.5, 25.1, 23.7, 24.2,
                        26.5, 25.3, 23.8, 24.6, 24.8, 22.9, 23.5, 26.2],
    "Clutch_Net_Rating": [8.2, 3.5, 2.1, 1.8, 3.9, 2.7, -0.5, 1.2,
                          10.5, 6.8, 4.2, 3.1, 2.9, 0.8, 1.5, 5.3],
    "Home_Win_Pct": [0.829, 0.732, 0.707, 0.683, 0.659, 0.634, 0.610, 0.585,
                     0.805, 0.756, 0.732, 0.683, 0.659, 0.634, 0.610, 0.585],
    "Away_Win_Pct": [0.732, 0.634, 0.610, 0.610, 0.585, 0.561, 0.537, 0.537,
                     0.707, 0.659, 0.634, 0.585, 0.561, 0.537, 0.537, 0.537],
    "Recent_Form_L10": [8, 7, 6, 7, 7, 6, 5, 6, 9, 8, 7, 6, 6, 5, 6, 7],
    "Star_Player_PER": [28.5, 26.1, 27.8, 24.9, 23.2, 26.5, 24.1, 25.3,
                        31.2, 29.8, 26.4, 25.7, 27.1, 23.8, 24.5, 26.9],
    "Bench_Depth_Score": [8.2, 7.5, 7.1, 6.8, 7.9, 8.5, 6.9, 7.2,
                          8.8, 8.1, 7.6, 7.8, 7.3, 6.7, 7.1, 8.3],
    "Playoff_Experience": [145, 98, 132, 87, 45, 76, 156, 89,
                           76, 178, 102, 134, 98, 87, 167, 189],
    "Key_Players_Injured": [0, 1, 0, 1, 2, 0, 1, 1, 0, 0, 1, 0, 1, 2, 1, 0],
    "Injury_Impact_Score": [0.0, 2.5, 0.0, 3.1, 5.8, 0.0, 2.8, 3.5,
                            0.0, 0.0, 3.2, 0.0, 2.9, 6.1, 3.8, 0.0]
}

df_teams = pd.DataFrame(teams_data)

# Save to CSV
df_teams.to_csv('nba_playoff_teams_data.csv', index=False)

print("NBA Playoff Teams Dataset Created")
print("=" * 80)
print(f"\nShape: {df_teams.shape}")
print(f"Teams: {len(df_teams)}")
print(f"Features: {df_teams.shape[1] - 1}")  # Excluding team name

print("\n\nSample Data (First 5 Teams):")
print(df_teams.head().to_string())

print("\n\nFeature Summary:")
print(df_teams.describe().round(2).to_string())

print("\n\nDataset saved as: nba_playoff_teams_data.csv")
