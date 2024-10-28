from flask import Flask, request, jsonify
from pyrogram import Client, filters

app = Flask(__name__)

# Configurações do Pyrogram
api_id = 28732211           # Obtido da plataforma do Telegram
api_hash = "5fca1fc5ad3654f6a2c76e448e24519e"         # Obtido da plataforma do Telegram
bot_token = "7399650409:AAFUl9Umqi0RA4PAj7wSdA_-hDeqD1rsH8g"       # Obtido no BotFather

bot = Client("bot", api_id=api_id, api_hash=api_hash, bot_token=bot_token)

# Inicializa o bot
@app.before_request
def start_bot_once():
    if not bot.is_connected:  # Se não estiver conectado, inicie o bot
        bot.start()

# Comando básico /start para iniciar conversas com o bot
@bot.on_message(filters.command("start"))
def start(client, message):
    message.reply_text("Olá! Este é um bot com Pyrogram.")

# Rota Webhook para receber as mensagens do bot
@app.route("/webhook", methods=["POST"])
def webhook():
    update_data = request.get_json()  # Dados da mensagem
    bot.process(update_data)
    return "ok"

# Rota para interagir com o bot pelo WebApp
@app.route("/send_message", methods=["POST"])
def send_message():
    data = request.get_json()
    chat_id = data.get("chat_id")
    text = data.get("text")

    # Envia a mensagem para o chat_id especificado
    bot.send_message(chat_id, text)
    return jsonify({"status": "Mensagem enviada!"})

# Finaliza o bot no encerramento do app
@app.route("/stop", methods=["GET"])
def stop():
    bot.stop()
    return "Bot desativado"

if __name__ == "__main__":
    app.run(port=5000)
