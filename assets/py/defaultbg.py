import os
import shutil

file_dir = "../img"
os.chdir(file_dir)
shutil.copyfile("test_org.","test_copy.txt")        # copy test_org.txt 为 test_copy.txt 若存在，则覆盖
shutil.copyfile("test_org.txt","test1.txt")            # 存在，覆盖