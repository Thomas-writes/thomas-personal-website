
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';

const Navmenu = () => {
    return (
        <Menu>
            <MenuButton as={Button} leftIcon={<HamburgerIcon />}>
                Sections
            </MenuButton>
            <MenuList>
                <MenuItem>About</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuList>
        </Menu>
      );
}
 
export default Navmenu;