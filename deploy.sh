#!/bin/bash

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#npm config set registry https://registry.npmjs.org
#npm config set registry https://registry.npm.taobao.org


npm install -g vuepress --registry=https://registry.npm.taobao.org

npm install --registry=https://registry.npm.taobao.org

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'jdk.plus' > CNAME

git config --global user.email "deploy@jdk.plus"
git config --global user.name "deploy"

git init
git add -A
git commit -m 'deploy'

#git push -f git@github.com:JDK-Plus/doc.git gh_pages

cd -

