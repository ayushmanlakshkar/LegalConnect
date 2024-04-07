T#test response
import requests

def ask_question(question):
    url = 'http://localhost:5000/ask'
    data = {'question': question}
    response = requests.post(url, json=data)
    return response.json()

if __name__ == "__main__":
    question = '''Hello,
    I need some legal advice regarding a situation involving document tampering or destruction, specifically under Section 477-A of the Indian Penal Code. Can you please help me understand the following:
    - What constitutes a "document" under this section? Are forged documents covered by this provision?
    - What are the elements that need to be proven to convict someone under Section 477-A IPC?
    - How does the concept of "intent to defraud" apply in cases related to falsification of accounts?
    I  appreciate any insights you can provide on this matter. Thank you'''
    response = ask_question(question)
    print(response)
