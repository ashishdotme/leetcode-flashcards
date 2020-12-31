from datetime import timezone
import git
import os
import re
import pathlib
from urllib.parse import urlencode
import sqlite_utils
from sqlite_utils.db import NotFoundError
import time

root = pathlib.Path(__file__).parent.resolve()


def created_changed_times(repo_path, ref="master"):
    created_changed_times = {}
    repo = git.Repo(repo_path, odbt=git.GitDB)
    commits = reversed(list(repo.iter_commits(ref)))
    for commit in commits:
        dt = commit.committed_datetime
        affected_files = list(commit.stats.files.keys())
        for filepath in affected_files:
            if filepath not in created_changed_times:
                created_changed_times[filepath] = {
                    "created": dt.isoformat(),
                    "created_utc": dt.astimezone(timezone.utc).isoformat(),
                }
            created_changed_times[filepath].update(
                {
                    "updated": dt.isoformat(),
                    "updated_utc": dt.astimezone(timezone.utc).isoformat(),
                }
            )
    return created_changed_times


def build_database(repo_path):
    # all_times = created_changed_times(repo_path)
    db = sqlite_utils.Database(repo_path / "flashcards.db")
    table = db.table("flashcards", pk="path")
    for filepath in root.glob("docs/**/*.md"):
        fpFront = filepath.open()
        fpBack = filepath.open()
        title = fpFront.readline().lstrip("#").strip()
        back = re.findall(r'## Answer(.+?)$',fpFront.read(), re.DOTALL)
        front = re.findall(r'## Question(.+?)## Answer',fpBack.read(), re.DOTALL)
        path = str(filepath.relative_to(root))
        slug = filepath.stem
        url = "https://github.com/ashishdotme/leetcode-flashcards/blob/master/{}".format(path)
        path_slug = path.replace("/", "_")
        record = {
            "path": path_slug,
            "slug": slug,
            "topic": path.split("/")[1],
            "title": title,
            "url": url,
            "front": front[0].strip(),
            "back": back[0].strip()
        }
        # record.update(all_times[path])
        with db.conn:
            table.upsert(record, alter=True)

    table.enable_fts(
        ["title", "front"], tokenize="porter", create_triggers=True, replace=True
    )


if __name__ == "__main__":
    build_database(root)