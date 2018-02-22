import re
import os

def start():
    print('initial function')
    path = os.getcwd()  # 文件夹目录
    files = os.listdir(path)  # 得到文件夹下的所有文件名称
    s = []
    regex = re.compile(r"#.+\.", re.IGNORECASE)
    for file in files:  # 遍历文件夹
        if not os.path.isdir(file):  # 判断是否是文件夹，不是文件夹才打开
            original_name = file
            print(original_name)
            file = re.sub(regex, '.', file)
            os.rename(path + "/" + original_name, file)

start()
