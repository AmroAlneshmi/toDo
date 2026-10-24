function NewTask({inputRef, addNew}) {

    return (
        <div className='w-full flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center text-center text-black'>
            <input ref={inputRef} type="text" className='bg-white h-12 sm:h-16 w-full sm:flex-1 p-4 rounded' placeholder='Enter a new task' />
            <button onClick={addNew} className='bg-blue-400 p-3 sm:p-4 rounded cursor-pointer hover:bg-blue-600 hover:text-gray-300 duration-100 whitespace-nowrap'>Add Task</button>
        </div>
    )
}

export default NewTask