from flask import Flask
import os
import openai

app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
    model='text-davinci-001',
    prompt='how old are you',
    temperature=0.4,
    max_tokens=64,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
)


@app.route('/')
def hello_world():  # put application's code here
    return response.choices[0].text


if __name__ == '__main__':
    app.run(debug=True)
