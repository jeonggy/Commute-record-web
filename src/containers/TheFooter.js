import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="http://timehive.co.kr"
          target="_blank"
          rel="noopener noreferrer"
        >
          TIMEHIVE Inc.
        </a>
        <span className="ml-1">&copy; 2021 creativeLabs.</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
