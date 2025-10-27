import pandas as pd
import plotly.graph_objects as go

# Load the data
df = pd.read_csv("model_performance_comparison.csv")

# Map the column names to display names and select the 4 required metrics
metric_mapping = {
    'Test_Accuracy': 'Test Accuracy',
    'Precision': 'Precision', 
    'Recall': 'Recall',
    'F1_Score': 'F1 Score'
}

# Convert metric values to percentages (multiply by 100)
for col in metric_mapping.keys():
    if col in df.columns:
        df[col] = df[col] * 100

# Create grouped bar chart
fig = go.Figure()

# Define colors for each metric using the brand colors
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F']

# Add bars for each metric
for i, (col_name, display_name) in enumerate(metric_mapping.items()):
    if col_name in df.columns:
        fig.add_trace(go.Bar(
            name=display_name,
            x=df['Model'],
            y=df[col_name],
            marker_color=colors[i],
            cliponaxis=False
        ))

# Update layout with the exact title requested
fig.update_layout(
    title="Machine Learning Model Performance Comparison",
    xaxis_title="Model",
    yaxis_title="Score (%)",
    barmode='group',
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

# Set y-axis range from 0 to 100
fig.update_yaxes(range=[0, 100])

# Update traces to clip on axis
fig.update_traces(cliponaxis=False)

# Save the chart
fig.write_image("model_performance_chart.png")
fig.write_image("model_performance_chart.svg", format="svg")

print("Updated chart saved successfully!")
print(f"Models included: {list(df['Model'])}")
print(f"Metrics included: {list(metric_mapping.values())}")