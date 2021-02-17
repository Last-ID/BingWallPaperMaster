import requests
url = 'https://v2.jinrishici.com/info'
headers = {
#    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
"Accept-Encoding": "UTF-8",
"Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
"Cache-Control": "max-age=0",
"Connection": "keep-alive",
"Host": "v2.jinrishici.com",
"TE": "Trailers",
"Upgrade-Insecure-Requests": "1",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0"
,'X-User-Token':'VrFiih3tfMARuw1nsOdckJEE3ZKkZxcK'
}
r = requests.get(url, headers=headers)
print (str(r.text))



'''
"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
"Accept-Encoding": "gzip, deflate, br"
"Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2"
"Cache-Control": "max-age=0"
"Connection": "keep-alive"
"Host": "v2.jinrishici.com"
"TE": "Trailers"
"Upgrade-Insecure-Requests": "1"
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0"
'''