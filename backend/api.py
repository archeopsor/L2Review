from flask import Flask, request
from resources import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/") 

def home():
	return "Hello, world!"

@app.route("/process_text", methods=['POST'])
def process_text():
	language: str = request.form.get("lang")
	text: str = request.form.get("text")
	
	sentences: list[str] = split_into_sentences(text)
	results: list[list[str]] = [] # For each sentence, there will be a score and a string with mistakes generated by GPT
	for sentence in sentences:
		grammar_score = get_sentence_grammar_score(language, sentence)
		complexity_score = get_sentence_complexity_score(language, sentence)
		mistakes = get_sentence_grammar_mistakes(language, sentence)
		results.append({"Grammar": grammar_score, "Complexity": complexity_score, "Mistakes": mistakes})
	
	return {"results": results}


@app.route("/prompts")
def generate_prompts():
	language: str = request.args.get("lang")
	category: str = call_api("You're teaching a {language} class, and are coming up with a topic for your students to talk about. In one or two words, generate a category of topics that would be good for someone to talk about when they are learning {language}. Respond with only the category name. Your response should only be one or two words total.", "")
	prompts: str = call_api(f"In the category of {category.content}, come up with four prompts, each around one or two sentences in english, for someone who is learning {language} to respond to. Respond with only the text needed for the prompts, with no other formatting. Use fewer than 100 words total. Separate each prompt with $$$. Make sure the prompts are in English.", "")
	return {"category": category.content, "prompts": prompts.content.replace("\n", "").split(".")}

app.run(port=5000)