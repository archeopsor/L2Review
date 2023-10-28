import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def call_api(system: str, user: list[str]) -> str:
    messages=[
        {"role": "system", "content": system},
    ]

    for message in user:
        messages.append({"role": "user", "content": message})

    return(
        openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        ).choices[0].message
    )

def get_sentence_grammar_score(language: str, sentences: list[str]) -> float:
    system = f"You are a {language} teacher, trying to grade a student who doesn't know {language} based on how accurate their grammar is. You will read a given sentence, and give the student a number from 0 to 100 to represent how good their grammar is, with 0 being unintelligible and 100 being perfect. Respond only with this number, and with no other text, for each sentence individually."

    response = call_api(system, sentences)