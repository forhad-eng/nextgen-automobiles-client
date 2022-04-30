import React from 'react'
import CountUp from 'react-countup'

const Counter = ({ end }) => {
    return (
        <CountUp start={0} end={end} delay={0}>
            {({ countUpRef }) => (
                <div className="text-3xl text-[#363636] font-[700] mt-6">
                    <span ref={countUpRef} />
                </div>
            )}
        </CountUp>
    )
}

export default Counter
