import requests
import os
import jsonpath
def main():
    api_url='https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1'
    r = requests.get(api_url,timeout = 6)
    status=r.status_code
    res=r.json()
    print(res)
    resault=jsonpath.jsonpath(res,'$.images.0.urlbase')
    print(resault)
    pic_url='https://www.bing.com'+resault[0]+'_UHD.jpg'
    pic_name=jsonpath.jsonpath(res,'$.images.0.copyright')[0]
    pic_date=jsonpath.jsonpath(res,'$.images.0.enddate')[0]
    pic=pic_url
    print(pic)
	#获得图片名字
    #将名字中的/替换
    pic_name=pic_name.replace('/','_',5)
    print(pic_name)
	#储存在D:/bing/下
    pic_name='D:/bing/'+pic_date+'_'+pic_name+'.jpg'
    #bg_pic_name='../img/bg.jpg'
    bg_name="G:/WallPaper/assets/img/bg.jpg"
    r=requests.get(pic)
    with open(pic_name,'wb')as f:
        f.write(r.content)
    with open(bg_name,'wb')as fb:
        fb.write(r.content)
main()

	
