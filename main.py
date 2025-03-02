import webview

# import pandas as pd
import json
# import requests

class Api:
    def __init__(self):
            self.catList = []

    
api = Api()

window = webview.create_window('PyPost', 'index.html', js_api=api)
webview.start(ssl=True)