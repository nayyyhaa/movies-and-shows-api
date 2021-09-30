# Contribution Guide for Movies and Shows API

## Installation
Make sure `git` is installed in your system.

## Creating a Pull Request: 

1) Click on the **fork** on the top to fork this repo.

![FORK](https://user-images.githubusercontent.com/46138150/135512198-b6d37c9c-1a68-4e7a-a961-76a1e18be3bd.png)

2) Go to your forked Repository.
3) Hit the **clone** button on your forked repo and copy the given link.
![CLONE](https://user-images.githubusercontent.com/46138150/135512568-c6b723f5-500b-481c-873f-914b3f68af65.png)

**NOTICE! Your URL will be diffrent to what's shown and have your github username instead of *nayyyhaa***

4) On your terminal / command prompt, type "git clone [put the link here]".
5) Change the `db.json` file in the folder with your favorite movie/shows.
**EXAMPLE FORMAT OF ONE DATA IN JSON**
```json
      {
          "id": 1,
          "title":"F.R.I.E.N.D.S",
          "plot":"Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.",
          "genre":"Sitcom",
          "rating": 8.8,
          "year":"1994",
          "poster":"https://images.app.goo.gl/s8MgXzzvR5KmzT1R8"
      }
```

It should include `id`, `title`, `plot`, `genre`, `rating`, `year` and `poster` in respective **movies** or **shows** array.

6) Afterward, on your terminal / command prompt, type "git add db.json"; then 'git commit -m "[type a message]" '.
7) Create a remote to link the repository on github to your local workspace. use "git remote add [remote-name] [put the github link here]"
8) Push the commit. For example, type "git push [remote-name] main".
9) Go back to the [original repo](https://github.com/nayyyhaa/movies-and-shows-api).
10) Hit "new pull request" and compare between forks.
![PR](https://user-images.githubusercontent.com/46138150/135514215-c98ddc1b-a7f2-45d7-b60d-ec2490cf7cbb.png)
11) Add a message and click on **Create Pull Request**.
![PR2](https://user-images.githubusercontent.com/46138150/135514625-c121de09-c64e-462d-8017-16f8e14de5fe.png)

Confirm the pull request and that's it!

🥁*BADUM-TISS!!!*🥁

YAYY!! You've finally made your Open Source Contribution OR maybe you will. 😉



