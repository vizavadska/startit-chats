from flask import Flask


app = Flask('app')


@app.route('/')
def index_page():
  return "Sveiciens no StartIT! (33333)"


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000, debug=True)