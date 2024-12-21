import SocialButton from "./SocialButton.tsx";

function Title() {

    const emoji_img = 'https://em-content.zobj.net/source/apple/391/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png'

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-back">
            <img src={emoji_img} className="w-20 h-20 sm:w-24 sm:h-24 mb-6 sm:mb-9"></img>
            <h1 className="font-poppin text-h1 sm:text-4xl font-semibold text-dark mb-2 sm:mb-1 text-center">Chayutphong Soisri</h1>
            <h3 className="font-poppin text-h3 sm:text-2xl font-semibold text-light mb-4 sm:mb-5 text-center">Chulalongkorn University | Bangkok, Thailand</h3>
            <SocialButton></SocialButton>
            <code className="text-[#707070] text-center mt-6 sm:mt-5 font-mono text-sm sm:text-[15px] leading-7 sm:leading-8 max-w-lg">
                {'{'}
                "email": "<a href="mailto:peanutpeanut@hotmail.co.th" className="text-[#24292e] transition-colors hover:text-[#00ccff]">peanutpeanut@hotmail.co.th</a>",
                "phone": "<a href="tel:+66992247671" className="text-[#24292e] transition-colors hover:text-[#00ccff]">+66992247671</a>"
                {'}'}
            </code>
        </div>
    );
}

export default Title