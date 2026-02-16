import { loadTodos } from "../store/todo.actions.js"

const {useSelector} = ReactRedux
const {useState,useEffect} = React
export function AppFooter(){
    const loggedinUser = useSelector((storeState)=>storeState.userModule.loggedinUser)
    function getDoneTodosPrecents(){
    const todos = useSelector((storeState)=>storeState.todoModule.todos)
    const doneTodosNumber = todos.filter(todo=>todo.isDone).length
    const doneTodosPrecent = doneTodosNumber/todos.length * 100
    
    return JSON.stringify(doneTodosPrecent).substring(0,4)
   }
   function getStyleByUser() {
        if (!loggedinUser) return {}
        const { color, bgColor: backgroundColor } = loggedinUser.pref
        return { color, backgroundColor }
    }
    useEffect(()=>{
    loadTodos()
    },[])
    return (
        <footer className="full" style={getStyleByUser()}>
            <section className="footer-container" >
               <span>Done todos: {getDoneTodosPrecents()}%</span><br/>
                {loggedinUser? <span>Your balance: {loggedinUser.balance}</span>:''}<br/>
                <progress  value={getDoneTodosPrecents()} max="100"></progress> 
            </section>
        </footer>
    )
}