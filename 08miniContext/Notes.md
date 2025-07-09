# Prop Drilling

Prop drilling is a term in React that refers to the process of passing data (props) from a parent component down to deeply nested child components, even if intermediate components don't need the data themselves.

- Prop drilling happens when you pass props through multiple layers of components just to get them to a deeply nested child.

Why It's a Problem:
- Becomes messy with many levels.
- Hard to maintain and refactor.
- Can cause unnecessary re-renders.

Solution - React Context API

# Context API to the Rescue
The Context API allows you to:
- Store shared data (like user, theme, language) in one place.
- Access it from any component, no matter how deeply nested.
- Avoid unnecessary prop passing through components that don’t care about that data

### Step - 1
creating context :

const UserContext =  React.createContext()
export default UserContext;

### Step - 2
making provider

```html
const UserContextProvider = ({ children }) => {
    const [User,setUser] = useState(null)
    return(

    <UserContext.Provider value={{User,setUser}}>
        {children}
    </UserContext.Provider>

    )
}

- This makes the User state and setUser function available to all nested components via useContext(UserContext).
- {children} Renders Nested Components
Whatever you wrap with <UserContextProvider> will appear inside this component.

    