import CustomButton from "./CustomButton"

const Subscribe:React.FC = () => {
  return (
    <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10 md:py-20 bg-primary w-full">
        <div className="max-w-[750px] flex flex-col justify-center items-center gap-5 mx-auto">
            <p className="font-semibold text-5xl text-white">Never miss an event</p>
            <p className="font-medium text-2xl text-white">Subscribe to Ticketbay newsletter now</p>
            <div className="relative w-full mt-5">
            <input type="email" name="email" id="email" placeholder="Email Address" className="rounded-lg outline-none w-full p-5"/>
            <CustomButton text={`Subscribe`} bg_color={`bg-primary`} text_color={`text-white`} hover_bg_color={`bg-cyan-400`} hover_text_color={``} other_classes={`absolute right-3 top-3`} onclick_func={() => {}}></CustomButton>
            </div>
        </div>
    </section>
  )
}
export default Subscribe