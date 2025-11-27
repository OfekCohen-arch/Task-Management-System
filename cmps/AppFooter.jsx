const {useSelector} = ReactRedux
export function AppFooter(){
    const loggedinUser = useSelector((state)=>state.loggedinUser)
    function getDoneTodosPrecents(){
    const todos = useSelector((state)=>state.todos)
    const doneTodosNumber = todos.filter(todo=>todo.isDone).length
    const doneTodosPrecent = doneTodosNumber/todos.length * 100
    
    return JSON.stringify(doneTodosPrecent).substring(0,4)
   }
   function getStyleByUser() {
        if (!loggedinUser) return {}
        const { color, bgColor: backgroundColor } = loggedinUser.pref
        return { color, backgroundColor }
    }
    return (
        <footer className="app-footer full main-layout" style={getStyleByUser()}>
            <section className="footer-container" >
               <span>Done todos: {getDoneTodosPrecents()}%</span>
                {loggedinUser? <span>Your balance: {loggedinUser.balance}</span>:''}
                <progress  value={getDoneTodosPrecents()} max="100"></progress> 
            </section>
        </footer>
    )
}