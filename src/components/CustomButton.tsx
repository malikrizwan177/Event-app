import { MouseEventHandler } from "react";

type Props = {
    text : String
    bg_color : String
    text_color : String
    hover_bg_color : String
    hover_text_color : String
    other_classes : String
    onclick_func : MouseEventHandler
};

const CustomButton: React.FC<Props> = (props: Props) => {
  return (
    <>
      <button onClick={props.onclick_func} className={`px-7 py-2 ${props.bg_color} ${props.text_color} hover:${props.hover_bg_color} rounded-lg text-center ${props.other_classes} hover:text-white`}>
        {props.text}
      </button>
    </>
  );
};

export default CustomButton;
