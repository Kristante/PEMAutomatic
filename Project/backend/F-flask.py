from flask import Flask, request, jsonify
import psycopg2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Параметры подключения к PostgreSQL
DB_HOST = "localhost"
DB_NAME = "PEMAutomatic"
DB_USER = "postgres"
DB_PASSWORD = "32409jsd23"

conn = psycopg2.connect(
    host=DB_HOST,
    database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD
)
cursor = conn.cursor()

def separate_datetime(datetime_str):
    date, time = datetime_str.split(',')
    return date.strip(), time.strip()

@app.route('/api/data', methods=['POST'])

def receive_data():
    # Получаем JSON-данные из тела запроса
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 415

    data = request.get_json()
    date, time = separate_datetime(data['DateTime'])
    
    cursor.execute("INSERT INTO orders (name, phone_number, date, time) VALUES (%s, %s, %s, %s)", (data["Name"], data["PhoneNumber"], date, time))
    conn.commit()
    # Здесь можно обработать полученные данные
    print(data)

    # Возвращаем ответ в JSON-формате
    return jsonify({'message': 'Data received successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)