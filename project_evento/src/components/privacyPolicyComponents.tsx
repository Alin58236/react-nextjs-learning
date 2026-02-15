import React, { PropsWithChildren } from "react";

export const PrivacyPolicyHeader = ({ children }: PropsWithChildren) => {
  return <h2 className=" text-zinc-300 mt-10 text-xl font-semibold tracking-tight">{children}</h2>;
};

export const PrivacyPolicyParagraph = ({ children }: PropsWithChildren) => {
  return <p className="mt-3 text-sm text-zinc-400 leading-6">{children}</p>;
};

export const PrivacyPolicyList = ({ children }: PropsWithChildren) => {
  return <ul className="mt-3 list-disc pl-6 text-sm text-zinc-400 leading-6">{children}</ul>;
};
