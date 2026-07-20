import React from "react";
import { useParams } from "react-router";

function CoursesDetails() {
  const data = useParams();

  return (
    <div>
      <h1>{data.id}= Courses Details</h1>
    </div>
  );
}

export default CoursesDetails;
