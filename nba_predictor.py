# nba_predictor.py

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load your data (replace filename if needed)
df = pd.read_csv("model_performance_comparison.csv")

# Show first few rows to check
print("Dataset preview:")
print(df.head())

# Example: Let's assume you have 'Winner' column as target
# You might need to adjust column names based on your dataset
target = 'Winner'  # change this based on your data
features = [col for col in df.columns if col != target]

# Split data
X = df[features]
y = df[target]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Predict
pred = model.predict(X_test)
acc = accuracy_score(y_test, pred)

print(f"✅ Model trained successfully!")
print(f"🎯 Accuracy: {acc * 100:.2f}%")

# Predict a new example (optional)
# example = [values matching your feature columns]
# print("Prediction:", model.predict([example]))
