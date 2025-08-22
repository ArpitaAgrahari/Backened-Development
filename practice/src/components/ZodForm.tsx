import React from "react";
import { z } from "zod";

export const ZodForm = () => {
  return (
    <div>
      <form>
        <div>
          <label>Full Name: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};
