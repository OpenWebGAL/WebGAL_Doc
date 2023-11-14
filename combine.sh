#!/bin/bash

# 遍历所有子目录（包括当前目录）
find . -type d | while read -r dir; do
    # 从目录路径中提取目录名，替换 '/' 为 '_'
    dir_name=$(basename "$dir")
    output_file="$dir/${dir_name}_combined.md"

    # 检查并删除已存在的输出文件
    if [ -f "$output_file" ]; then
        rm "$output_file"
    fi

    # 在每个目录中遍历 .md 文件
    find "$dir" -maxdepth 1 -name '*.md' | while read -r file; do
        # 确保文件存在且不是目录
        if [ -f "$file" ]; then
            echo "Merging $file into $output_file"
            cat "$file" >> "$output_file"
            # 在每个文件之间加入换行以分隔内容
            echo -e "\n" >> "$output_file"
        fi
    done
done

echo "All .md files in each directory have been combined."

