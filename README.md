# Fireflies-First-Month-Project

## 1. Introduction

An awesome **static** NEWS website built to provide informations about **Cambodia Seagames 2023** and **ASEAN Para Games 2023**

- **Live preview** [Fireflies First Month Project](https://anb-hq.github.io/Fireflies-First-Month-Project/)

- **Website reference:** [cambodia2023](https://www.cambodia2023.com/)

### Features and Functionality

- **Feature 1**: Drop down nav menu for the mobile and tablet screens
- **Feature 2**: Infinite carousel loop images <br> The **carousel** section on the
**main page** appears different from the original website. The reason for this difference is that creating that specific part of the page requires higher coding knowledge, which our team members mostly lack. Most of us are not proficient in coding, which is why we couldn't replicate it exactly as it was on the original site.

### Our carousel section:
![Alt text](<img/readme/Screenshot 2023-07-29 233455.jpg>)

### The reference page carousel section:
![Alt text](<img/readme/Screenshot 2023-07-29 234047.jpg>)

## 2. Folder Structure

- **CSS folder** : Contains all the CSS files.
- **img folder** : Contains all the images of header and footer, and all the image sub-folders that are specifically related to each page or html files.
- **JS folder** : Contains JavaScript file.
- **.gitignore** : Specifies files and directories that should be ignored by Git version control.
- **guide.md** : A convention guide file.
- **README.md** : Documentation file that provides information about the project, folder structure and other relevant details.
- **index.html** : Is the main page of the project.
- **The other <file_name>.html** : The HTML files that contain HTML code of each page according to its name.

## 3. Documentation

Convention guide [guide.md](https://github.com/anb-hq/Fireflies-First-Month-Project/blob/main/guide.md)

## 4. Git Flow Method

We followed the Git flow methodology to manage our project. This approach helped us maintain a structured development process and ensure a smooth collaboration among team members. Below is an overview of the branches we used and the branch that was finally merged for submission:

- **main** Branch : The main branch serves as our stable and production-ready code. It shows the latest release version of our project.
- **develop** Branch : The develop branch is our integration branch, where we continuously integrate new features and bug fixes. It is a working copy of the main branch.
- **Feature** Branches : For each new feature or task, we created a separate feature branch (Example: `feature/issue4`, `feature/issue5`). These branches were used to develop and test the functionalities.
- **BugFix** Branches : Whenever a bug was identified, we created bug fix branches. These branches were used to isolate and resolve the issues.
- **Release** Branches : Before each release, we created a release branch (Example: `release/1.0`) to ensure the stability of the upcoming version. Final testing and adjustments were performed in this branch.
- **Hotfix** Branch : Hotfix Branches: In the event of critical issues in the production code, we used hotfix branches (Example: `hotfix/1.1`) to address these issues promptly and independently of the regular development process.