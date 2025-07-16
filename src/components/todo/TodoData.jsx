const TodoData = (props) => {
    const {todoList, deletedTodo} = props
    const handleClick = (id) => {
        deletedTodo(id)
    }
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        {item.name}
                    <button 
                    onClick={() => handleClick(item.id)}
                    style={{cursor:"pointer"}}>deleted</button>
                    </div>
                    
                )
            })}
      </div>
    );
}
export default TodoData