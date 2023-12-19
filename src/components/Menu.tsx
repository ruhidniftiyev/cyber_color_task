import { FC } from 'react'

type MenuProps = {
  selectedColorName: string
}

const Menu: FC<MenuProps> = ({selectedColorName}) => {
  return (
    <div className="menu">
        <p className="menu__selected">Selected color:</p>
        <p className="menu__selected__color">{selectedColorName}</p>
    </div>
  )
}

export default Menu