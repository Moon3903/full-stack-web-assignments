# 04-more-advanced

1. What is the difference between git reset and git revert. When would you use one over the other?<br>
`git reset`<br>
This command is somewhat complicated. It actually does a couple of different things depending on how it is invoked. The command modifies the index (the so-called “staging area”). 
It can also change which commit a branch head is currently pointing at. This command may alter existing history (by changing the commit that a branch references).<br>
`git revert`<br>
This command can be considered an ‘undo’ type command. However, it is not a traditional undo operation. Instead of removing the commit from the project history, it figures out 
how to invert the changes introduced by the commit and appends a new commit with the resulting inverse content. This prevents Git from losing history, which is important for the 
integrity of your revision history and for reliable collaboration.<br>
Which one to use?<br>
Using git log when using git revert will have all the history of commits. If you want to remove the commits from the history, then revert is not a good choice, but if you want to 
maintain the commit changes in the history, then revert is the suitable command instead of reset.


2. What is the difference between git merge and git rebase. When would you use one over the other?<br>
`git merge`<br>
Git merge is a command that allows you to merge branches from Git. Merging is a common practice for developers. Whether branches are created for testing, bug fixes, or other reasons, 
merging commits changes to another branch. It takes the contents of a source branch and integrates it with a target branch.<br>
When you use Git merge, only the target branch is changed. The source branch history remains. Advocates of Git merge like it because it preserves the history of a branch. <br>
`git rebase`<br>
Git rebase is a command that allows developers to integrate changes from one branch to another. Git rebase compresses all the changes into a single “patch.” Then it integrates the 
patch onto the target branch. Unlike merging, rebasing flattens history. It transfers the completed work from one branch to another. In the process, unwanted history is eliminated.<br>
Advocates of Git rebase like it because it simplifies their review process.<br>
Difference?<br>
Git rebase and merge both integrate changes from one branch into another. Where they differ is how it's done. Git rebase moves a feature