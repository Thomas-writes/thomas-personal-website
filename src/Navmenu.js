import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';

const Navmenu = ({ onSelectSection, color }) => {
    return (
        <Menu>
            <MenuButton as={Button} bg={color} leftIcon={<HamburgerIcon />}>
                Sections
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectSection(0)}>About</MenuItem>
                <MenuItem onClick={() => onSelectSection(1)}>Projects</MenuItem>
                <MenuItem onClick={() => onSelectSection(2)}>Contact</MenuItem>
            </MenuList>
        </Menu>
      );
}
 
export default Navmenu;