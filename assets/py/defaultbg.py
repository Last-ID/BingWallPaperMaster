import os
import shutil

project_path = "C:/Last_ID-mybugs/BingWallPaperMaster"

img_dir = project_path+"/assets/img"
os.chdir(img_dir)
shutil.copyfile("defaultbg.png","bg.jpg")        # copy test_org.txt 为 test_copy.txt 若存在，则覆盖
