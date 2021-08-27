import os
import shutil
def main():
    project_path="G:/WallPaper"

    img_dir = project_path+"/assets/img"
    os.chdir(img_dir)
    shutil.copyfile("defaultbg.png","bg.jpg")        #copy defaultbg.png 为 bg.jpg 若存在，则覆盖
    print("copy "+img_dir)
main()