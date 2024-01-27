# Collection of eXplainable AI for Software Engineering (XAI4SE) Research
![Database validation](https://github.com/riss-vul/xai4se-paper/actions/workflows/main.yml/badge.svg)
![Test](https://github.com/riss-vul/xai4se-paper/actions/workflows/test.yml/badge.svg)
![Database validation](https://github.com/riss-vul/xai4se-paper/actions/workflows/deploy.yml/badge.svg)
[![Check code cleanliness](https://github.com/riss-vul/xai4se-paper/actions/workflows/linter.yml/badge.svg)](https://github.com/riss-vul/xai4se-paper/actions/workflows/linter.yml)

<p align="center">
  <img src="public/Overview.png" width="500">
</p>

### Website: https://riss-vul.github.io/xai4se-paper/

### Paper: 

### Introduction: 
This is an exploration and visualisation website for a categorization of XAI4SE papers, hosted on GitHub pages. This website provides an interactive way to [explore the dataset](https://riss-vul.github.io/xai4se-paper/#/papers), and we invite the community to contribute relevant primary studies in order to make this a living and curated collection of XAI4SE research.

The detailed statistics can be found in [our excel table]([https://github.com/riss-vul/xai4se-paper/XAI4SE-Data.xlsx](https://github.com/RISS-Vul/xai4se-paper/blob/master/XAI4SE-Data.xlsx)). If you want to add an XAI4SE paper to the database, follow the instructions below.

## Add a paper
- Fork this repository by clicking the fork button in the top right.
- Go to https://riss-vul.github.io/xai4se-paper/#/add-paper and fill in the form to generate a database entry (will be shown on the right side of the webpage).
- Edit the file ```src/db/db.json``` in your fork.
- After the final entry's '}' (and before the final ']') append the JSON code copied from our website.
- Commit the changes. The current naming convention for the commit is as follows, the title of the commit should remain "update db.json" and in the commit message please include the title, the link to the paper, and the authors of the paper you added.
- Create a new pull request from your forked repository to the main repository. 
- When your pull request is approved and passes the automated tests, it will be merged and your paper will show up on the website.

## Review a pull request
To review a pull request, follow these steps:
- Go to the pull request section of the main GitHub.
- Click a pull request that still requires reviews with "update db.json" as the title.
- Go to the Files Changed section of the pull request.
- Check if the entry into the database is correctly formatted and has the correct tags or that a valid reason for removal is provided.
- Click the review changes button, if everything is correct click approve, otherwise reject and provide an explanation why the proposed changes were rejected. 


## Acknowledgement
We thank [Nauta, et al.](https://dl.acm.org/doi/10.1145/3583558) for their open-sourced interactive [platform's](https://github.com/utwente-dmb/xai-papers) inspiration to us.

This repository is based on our paper, ["A Systematic Literature Review on Explainability for Machine/Deep Learning-based Software Engineering Research"](https://aclanthology.org/2021.findings-acl.84/). You can cite it as follows:
```
@article{XAI4SE-paper,
  author       = {Sicong Cao and
                  Xiaobing Sun and
                  Ratnadira Widyasari and
                  David Lo and
                  Xiaoxue Wu and
                  Lili Bo and 
                  Jiale Zhang and
                  Bin Li and
                  Wei Liu and
                  Di Wu and
                  Yixin Chen},
  title        = {A Systematic Literature Review on Explainability for Machine/Deep Learning-based Software Engineering Research},
  journal      = {arXiv preprint arXiv: 2309.11960},
  year         = {2024}
}
```
