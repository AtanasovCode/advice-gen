import pauseIcon from '../assets/pattern-divider-mobile.svg'
import dice from '../assets/icon-dice.svg';

const Card = ({
    fetchAdvice,
    loading,
    error,
    id, 
    advice,
}) => {
    return (
        <div className="
            bg-darkGrayishBlue flex flex-col items-center justify-center w-[90%] md:w-[70%] lg:w-[30%] m-3 p-6 pb-16 relative rounded-xl text-lightCyan
        ">
            <div className="flex items-center justify-center text-neonGreen text-sm mb-4">
                <div className="mr-2">Advice</div>
                <div>#{id}</div>
            </div>

            <div className="text-center text-2xl mb-6">
                {
                    loading ? "Loading..." : error ? `${error.message}` : `"${advice}"`
                }
            </div>

            <div className="w-full flex items-center justify-center">
                <img src={pauseIcon} alt="pattern devider icon" />
            </div>

            <div className="
                bg-neonGreen w-16 h-16 flex items-center justify-center rounded-full
                absolute -bottom-7 left-50 -translate-x-50 cursor-pointer
                hover:rotate-180 transition-all duration-500"
                onClick={() => !loading && fetchAdvice()}
            >
                <img src={dice} alt="dice icon used to randomize advice" />
            </div>
        </div>
    );
}

export default Card;