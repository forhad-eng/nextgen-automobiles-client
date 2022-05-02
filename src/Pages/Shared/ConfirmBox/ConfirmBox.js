import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const ConfirmBox = (confirmFunction, confirmText) => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className="bg-[#28b5df] text-white text-center shadow px-14 py-6 md:px-20 md:py-11">
                    <p className="text-2xl md:text-3xl font-[700]">Are you sure?</p>
                    <p className="text-sm mt-3">{confirmText}</p>
                    <div className="flex justify-between gap-2 md:gap-5 mt-5">
                        <button className="inline-block w-1/2 md:w-28 lg:w-40  py-2 border-[1px]" onClick={onClose}>
                            No
                        </button>
                        <button
                            className="inline-block w-1/2 md:w-28 lg:w-40 py-2 border-[1px]"
                            onClick={() => {
                                confirmFunction()
                                onClose()
                            }}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            )
        }
    })
}

export default ConfirmBox
