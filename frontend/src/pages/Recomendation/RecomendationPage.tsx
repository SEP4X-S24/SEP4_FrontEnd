import React from "react";
import { useAuth } from "../../utils/AuthContext";

function RecomendationPage() {
  const { authenticated } = useAuth();
  if (!authenticated) {
    return <div>You are not Authentificated</div>;
  }

  return (
    <div>
      <h1 className="heading-1">Heading 1</h1>
      <h2 className="heading-2">Heading 2</h2>
      <h3 className="heading-3">Heading 3</h3>
      <h4 className="heading-4">Heading 4</h4>
      <h5 className="subtitle">Subtitle 1</h5>
      <h5 className="subtitle-2">Subtitle 2</h5>
      <h5 className="subtitle-3">Subtitle 3</h5>
      <h5 className="subtitle-4">Subtitle 4</h5>
      <p className="body-text-regular">Body Text Regular</p>
      <p className="body-text-regular-sm">Body Text Regular Small</p>
      <p className="body-text-bold">Body Text Bold</p>
      <p className="body-text-bold-sm">Body Text Bold Small</p>
    </div>
  );
}

export default RecomendationPage;
