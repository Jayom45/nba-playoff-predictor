import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

# Load the data
df = pd.read_csv('feature_importance.csv')

# Get top 15 features by importance score
top_15 = df.nlargest(15, 'Importance_Score')

# Sort by importance score for better visualization (ascending for horizontal bar)
top_15 = top_15.sort_values('Importance_Score', ascending=True)

# Create horizontal bar chart
fig = px.bar(
    top_15,
    x='Importance_Score',
    y='Feature',
    color='Category',
    orientation='h',
    title='Feature Imp. for NBA Playoff Prediction',
    labels={'Importance_Score': 'Importance Score', 'Feature': 'Feature Name'},
    text='Importance_Score'
)

# Update text format to show 3 decimal places
fig.update_traces(texttemplate='%{text:.3f}', textposition='outside')

# Update layout
fig.update_layout(
    xaxis=dict(range=[0, 0.15]),
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

# Update traces for better display
fig.update_traces(cliponaxis=False)

# Save the chart
fig.write_image("chart.png")
fig.write_image("chart.svg", format="svg")

print("Chart created successfully!")
print(f"Top 15 features selected from {len(df)} total features")
print("Categories included:", top_15['Category'].unique().tolist())