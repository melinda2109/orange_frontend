## Practice Exercises

1. Display the current directory using `pwd`.
```bash
pwd
``` 
2. Create a directory named `git_project` and navigate into it.
```bash
mkdir git_project
cd git_project/
```
3. Inside, create two subdirectories: `src` and `docs`.
```bash
mkdir src
mkdir docs
```
4. Inside `src`, create two empty files: `main.py` and `utils.py`.
```bash
touch src/main.py
touch src/utils.py
```
5. List all files and directories including hidden ones.
```bash
ls -la
```

6. Go one level back and create a `README.md` file.
```bash
cd ..
touch README.md
```
7. Remove the `docs` folder using `rmdir` (make sure it's empty).
```bash
rmdir docs
```
8. Create a nested folder structure `demo/test1/test2` in one command.
```bash
mkdir -p demo/test1/test2
```
9. Navigate to `test2` using only relative paths.
```bash
cd ../../test2
```
10. Clear the terminal using `clear` or `Ctrl + L`.
```bash
clear
``` 
11. Commits and push the changes to your GitHub repository. 
```bash
git add .
git commit -m "choose a descriptive message"
git push
```