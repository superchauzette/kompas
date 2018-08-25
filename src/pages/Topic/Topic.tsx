import * as React from "react"

interface IProps {
  match: {
    params: {
      topicId: string;
    };
  }
}

const Topic = ({ match }: IProps) => (
  <div>
    <h3>Topic {match.params.topicId}</h3>
  </div>
)

export default Topic
