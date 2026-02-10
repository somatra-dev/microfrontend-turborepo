echo "Auto Push"

echo "Enter your message: ";
read message;

git add .
git commit -m "${message}"
git push