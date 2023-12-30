import os
import re
import openai
from nltk.tokenize import sent_tokenize
from dotenv import load_dotenv

load_dotenv()

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

def get_sentence_grammar_score(language: str, sentence: str) -> float:
    system = f"You are a {language} teacher, trying to grade a student who is \
    learning {language} based on how accurate their grammar is. You will read a \
    given sentence, and give the student a number from 0 to 100 to represent how \
    good their grammar is, with 0 being unintelligible and 100 being perfect. \
    Respond only with this number, and with no other text, for each sentence individually."
    user = f"Grade this sentence: {sentence}"

    response = call_api(system, [user])
    try:
        return int(response['content']) / 100
    except ValueError:
        return int(re.findall(r'\d+', response['content'])[0]) / 100
    

def get_sentence_complexity_score(language: str, sentence: str) -> float:
    system = f"You are a {language} teacher, trying to grade a student who is \
    learning {language} based on how advanced their use of language is. You will read a \
    given sentence, and give the student a number from 0 to 100 to represent how \
    advanced their use of language is, with 0 being child-level and 100 being very complex. \
    Respond only with this number, and with no other text, for each sentence individually."
    user = f"Grade this sentence: {sentence}"

    response = call_api(system, [user])
    try:
        return int(response['content']) / 100
    except ValueError:
        return int(re.findall(r'\d+', response['content'])[0]) / 100


def get_sentence_grammar_mistakes(language: str, sentence: str) -> str:
    system = f"You are a {language} teacher, trying to correct grammar mistakes from a \
    student learning {language}. You will read a given sentence, and give just the mistake \
    and the corrections, without any other text. Make sure to respond in English."
    user = sentence
    
    response = call_api(system, [user])
    return response['content']


def split_into_sentences(sentence: str) -> list[str]:
    return sent_tokenize(sentence)