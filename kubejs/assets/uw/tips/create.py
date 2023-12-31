import os
import json

# 获取当前脚本文件所在目录
current_directory = os.path.dirname(__file__)

# 创建文件的总数
file_count = 100

# 循环创建文件
for i in range(1, file_count + 1):
    file_name = os.path.join(current_directory, f"tips{i:02d}.json")
    content = {
        "tip": {
            "translate": f"uw.tips.{i:02d}"
        }
    }

    with open(file_name, 'w') as file:
        json.dump(content, file, ensure_ascii=False, indent=4)

    print(f"文件 '{file_name}' 创建成功")

print("所有文件已创建完成。")
