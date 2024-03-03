interface ButtonProps {
  text: string;
  handleClick?: () => void;
}
export default function PrimaryButton({ text, handleClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="py-2 px-6 bg-blue-600 rounded-xl font-semibold text-white add-animation "
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
