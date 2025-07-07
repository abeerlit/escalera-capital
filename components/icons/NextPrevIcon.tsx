export const NextPrevIcon = ({
  className = 'w-4 h-4',
}: {
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.2"
    >
      <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 " />
    </svg>
  );
};
