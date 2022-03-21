import React from "react";
interface PatternViewProps {
  children: React.ReactNode;
}

const PatternView = ({ children }: PatternViewProps) => {
  return (
    <main className={''}>
        
      <div className={''}>{children}</div>
    </main>
  );
};
export default PatternView;
