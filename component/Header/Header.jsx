import React, { useState } from "react";
import {
    AppBar,
    IconButton,
    Button,
    Avatar,
} from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Entypo';

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <AppBar
            title="ToDo by AT"
            leading={props => (
                <IconButton
                    icon={props => <Icon name="menu" {...props} />}
                    {...props}
                />
            )}
            trailing={props =>
                <IconButton
                    icon={<Avatar label="Yaman KATBY" size={28} />}
                    onPress={() => setLoggedIn(!loggedIn)}
                    {...props}
                />
            }
        />
    );
};

export default Header;