import React from "react";
import { format } from "date-fns";

export default function Profile(props) {
  return (
    <>
      <article>
        <article>
          <img
            src={props.owner.avatar_url}
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            alt={props.owner.login}
          />
          <div>
            <h2>{props.owner.login}</h2>
            <p>{props.name}</p>
            {props.private ? <p>Private</p> : <p>Public</p>}
          </div>
        </article>
        <div>
          This repo was created at{" "}
          {format(new Date(props.created_at), "dd MMMM yyyy")} by{" "}
          {props.owner.login}{" "}
        </div>
        <div>
          <a href={props.html_url} target="_blank" rel="noreferrer">
            View Repo
          </a>
          <ul>
            <li>{props.stargazers_count.toLocaleString()} stars</li>
            <li>{props.watchers_count.toLocaleString()} watchers</li>
          </ul>
        </div>

        <div>
          <p>{props.language}</p>

          <ul>
            {props.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
          <p>{props.open_issues} issues</p>
        </div>
      </article>
    </>
  );
}
