type Props = {
  text: string | undefined;
  bg_color: string | undefined;
  text_color: string | undefined;
  hover_bg_color: string | undefined;
  hover_text_color: string | undefined;
  other_classes: string | undefined;
  isLoading?: boolean | undefined;
  loaderColor?: string | undefined;
} & React.ComponentPropsWithoutRef<'button'>;

const CustomButton: React.FC<Props> = ({
  text,
  bg_color,
  text_color,
  hover_bg_color,
  hover_text_color,
  other_classes,
  isLoading = false,
  loaderColor = "text-white",
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`px-7 py-2 rounded-lg text-center transition-all duration-200 flex items-center justify-center gap-2
        ${
          isLoading
            ? `${bg_color} opacity-75 cursor-not-allowed`
            : `${bg_color} ${text_color} hover:${hover_bg_color} hover:${hover_text_color}`
        }
        ${other_classes}`}
    >
      {isLoading ? (
        <>
          <div
            className={`w-5 h-5 border-2 ${loaderColor} border-t-transparent rounded-full animate-spin`}
          />
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default CustomButton;
