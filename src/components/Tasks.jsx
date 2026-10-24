import { MdDelete } from "react-icons/md"

function Tasks({ todos, deleteFun, statusFun }) {
    return (
        <div>
            <ul className="text-white flex flex-col w-full items-start mt-4 sm:mt-8 gap-3 sm:gap-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex flex-row w-full justify-between items-center gap-2 sm:gap-3">
                        <span onClick={() => statusFun(todo.id)} className={`min-w-0 text-left ${todo.status === 'done' && 'line-through text-green-400'} cursor-pointer`}>{todo.text}</span>
                        <MdDelete className="cursor-pointer hover:text-red-400 transition-colors shrink-0 text-lg sm:text-xl" onClick={() => deleteFun(todo.id)}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks