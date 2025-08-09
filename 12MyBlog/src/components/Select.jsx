import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='text-sm font-medium text-gray-700'>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ' + className}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}


            </select>
        </div>
    )
}

export default React.forwardRef(Select)

/*If you want a React component to accept a ref (so that the parent can directly reference
 a DOM node or imperative methods inside it), you must wrap it in React.forwardRef(). */
