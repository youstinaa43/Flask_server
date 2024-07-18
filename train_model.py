from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
import joblib

# Sample training data (you should use your actual data here)
texts = ["High priority issue", "High priority problem", "Medium priority task"]
targets = ["Blocker", "Major", "Minor"]

# Create a pipeline that vectorizes the text data and then applies Naive Bayes
model = make_pipeline(TfidfVectorizer(), MultinomialNB())

# Train the model
model.fit(texts, targets)

# Save the model to a file
joblib.dump(model, 'priority_model.pkl')
