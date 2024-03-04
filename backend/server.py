from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()


app = Flask(__name__)
CORS(app) 

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_HOST')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')

mail = Mail(app)



@app.route('/')
def hello():
    return 'Hello, Flask!'



@app.route('/send_mail', methods=['POST'])
def send_mail():
    try:
        data = request.get_json()

        # Check if 'email' key is present in the JSON data
        if 'email' in data and 'link' in data:
            recipient_email: str = data.get('email')
            link: str = data.get('link')
            
            msg = Message('Verify Email', sender='no-reply', recipients=[recipient_email])
            msg.body = f'Confrim you email by clicking on the link below \n {link}'
            mail.send(msg)

            # Return a JSON response
            return jsonify({'message': f'Email received: {recipient_email}'}), 200
        else:
            return jsonify({'error': 'Invalid or missing parameter'}), 400

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=8000)
    

