import requests
import jsonpath
api_url='https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1'
r = requests.get(api_url,timeout = 6)
status=r.status_code
res=r.json()
print(res)
resault=jsonpath.jsonpath(res,'$.images.0.urlbase')
print(resault)
pic_url='https://www.bing.com'+resault[0]+'_UHD.jpg'
r=requests.get(pic_url)
name="C:\saya_plugins_collection-master\RscMod\123.jpg"
with open(name,'wb')as f:
    f.write(r.content)
f.close()