import os
import cv2

path_to_read = "../cu31924099427886_jp2/"
path_to_write = "../pages/"
os.makedirs(path_to_write, exist_ok=True)
for total_page_num, filename in enumerate(os.listdir(path_to_read)):
    if filename.endswith(".jp2"): 
        image = cv2.imread(os.path.join(path_to_read, filename))
        cv2.imwrite(os.path.join(path_to_write, f"{total_page_num}.png"), image)