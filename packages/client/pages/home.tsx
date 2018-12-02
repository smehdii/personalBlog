import { listCodeReviewRequestsQuery } from "../graphql/code-review-request/query/listCodeReviewRequests";
import { Query } from "react-apollo";
import { ListCodeReviewRequestsQuery } from "../lib/schema-types";

export default () => (
  <Query<ListCodeReviewRequestsQuery> query={listCodeReviewRequestsQuery}>
    {({ data }) => {
      const items = [];
      data.listCodeReviewRequests.map(crr => {
        let x = {
          header: crr.codeUrl,
          description: crr.notes,
          meta: crr.numDays
        };
        items.push(x);
      });
      return <div>Home</div>;
    }}
  </Query>
);
