
# Detailed Git Bash Guide: Basic Commands and Terminal Navigation

## Table of Contents
- [Navigation and Listing Commands](#navigation-and-listing-commands)
- [Working with Directories](#working-with-directories)
- [Working with Files](#working-with-files)
- [Relative vs. Absolute Paths](#relative-vs-absolute-paths)
- [Command Parameters](#command-parameters)
- [Efficiency and Automation](#efficiency-and-automation)
- [Practice Exercises](#practice-exercises)

---

## Navigation and Listing Commands

### `pwd` – Print Working Directory
Displays the absolute path to the current directory.

**Examples:**
```bash
pwd
# /c/Users/your_username/Documents
```

### `ls` – List
Lists the contents of the current directory.

**Examples:**
```bash
ls
# Documents  Downloads  Pictures

ls -l
# Shows detailed list view with permissions, size, and date.

ls -la
# Includes hidden files (those starting with a dot).
```

## Working with Directories

### `cd` – Change Directory
Changes the current directory.

**Examples:**
```bash
cd Documents
cd ..        # Go to the parent directory
cd /f        # Navigate to drive F
cd /d D:/Projects # Switch drive and directory (Windows only)
```

### `mkdir` – Make Directory
Creates a new directory.

**Examples:**
```bash
mkdir test
mkdir projects/test1/test2 -p  # Recursively create subdirectories
```

### `rm`, `rmdir`, `rm -r` – Remove
Remove files or directories.

**Examples:**
```bash
rm file.txt         # Deletes a file
rmdir folder        # Deletes an empty folder
rm -r folder        # Deletes a folder and all its contents
```

## Working with Files

### `touch` – Create an empty file

**Examples:**
```bash
touch test.txt
touch project1/main.py
```

### `clear` – Clear the terminal screen

**Example:**
```bash
clear
```

## Relative vs. Absolute Paths

- **Absolute path**: Starts from the root of the file system (`/` or drive letter).
  - Example: `/c/Users/John/Projects`
- **Relative path**: Relative to the current directory.
  - Example: `../other_projects`

## Command Parameters

Parameters are additional arguments that modify command behavior.

**Examples:**
```bash
ls -l      # detailed list view
rm -r dir  # recursively delete a directory
```

## Efficiency and Automation

### `TAB` Key – Autocompletion

**Example:**
```bash
cd Doc[TAB]   # Autocompletes to Documents
```

### `ctrl + r` – Search command history

**Example:**
- Press `ctrl + r` and type `touch` to find your last `touch` command.

---

## Practice Exercises

1. Print the current working directory.
2. Create a folder named `git_project`.
3. Navigate into `git_project` and create two files: `README.md` and `main.py`.
4. Create a subfolder `src` and move `main.py` inside it.
5. List all contents of the current folder in detailed mode.
6. Go back to the parent directory.
7. Delete the `git_project` folder with all its contents.
8. Repeat the folder creation using `TAB` for autocompletion.
9. Use `ctrl + r` to reuse a previously typed command.
10. Clear the terminal using the `clear` command.

---

> **Note:** Be cautious when using the `rm` command – it can permanently delete files!
