import { createContext, useContext, useState } from "react"
import PropTypes from 'prop-types'
const componentContext = createContext();

const CompoentContext = ({children}) => {
    const [check, setCheck] = useState(false);
    const [avaiableHotel, setAvailableHotel] = useState(false);
  return (
    <componentContext.Provider value={{
        check,
        setCheck,
        setAvailableHotel,
        avaiableHotel,
    }}>
        {children}
    </componentContext.Provider>
  )
}


CompoentContext.propTypes = {
    children: PropTypes.node.isRequired
}

export default CompoentContext

export const useCompoContext = ()=> useContext(componentContext);